<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateSupplierRequest;
use App\Http\Requests\UpdateSupplierRequest;
use App\Models\Product;
use App\Models\Purchase;
use App\Models\SupplierSalesman;
use App\Queries\SupplierDataTable;
use App\Repositories\SupplierRepository;
use Illuminate\Http\Request;
use DataTables;
use Flash;

class SupplierController extends AppBaseController
{

    protected $supplierRepository;

    public function __construct(SupplierRepository $supplierRepository)
    {
        $this->supplierRepository = $supplierRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->ajax()) {
            return DataTables::of((new SupplierDataTable())->get())->addIndexColumn()->make(true);
        }
        return view('suppliers.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('suppliers.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateSupplierRequest $request)
    {
        $this->supplierRepository->createSupplier($request->except(['_token']));

        Flash::success("Berhasil menyimpan data supplier baru.");

        return redirect()->route('suppliers.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $supplier = $this->supplierRepository->getSupplierAssociatedData($id);
        if ($request->ajax()) {
            return DataTables::of(SupplierSalesman::where('supplier_id', $supplier->id))->make(true);
        }
        return view('suppliers.show', compact('supplier'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $supplier = $this->supplierRepository->getSupplier($id);
        return view('suppliers.edit', compact('supplier'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSupplierRequest $request, $id)
    {
        $this->supplierRepository->updateSupplier($request->except(['_token']), $id);
        Flash::success("Berhasil memperbarui data supplier");
        return redirect()->route('suppliers.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $supplier = $this->supplierRepository->getSupplier($id);
        $supplierModels = [
            Purchase::class,
            SupplierSalesman::class
        ];
        $result = canDelete($supplierModels, 'supplier_id', $supplier->id);
        if ($result) {
            return $this->sendError('Supplier can\'t be deleted.');
        } else {
            if (!auth()->user()->hasRole('owner')) addNotification("melakukan penghapusan data supplier : " . $supplier->name);
            $supplier->delete();
            return $this->sendSuccess('Supplier deleted successfully.');
        }
    }
    public function destroySalesman($supplier_id, $salesmanId)
    {
        $models = [
            Purchase::class
        ];
        $result = canDelete($models, 'salesman_id', 'id');
        if ($result) {
            return $this->sendError('Supplier Tidak Dapat Dihapus');
        } else {
            $salesman  = $this->supplierRepository->getSalesman($salesmanId);
            if ($salesman) {
                if (!auth()->user()->hasRole('owner')) addNotification("melakukan penghapusan data salesman supplier : " . $salesman->salesman_name);
                $salesman->delete();
                return $this->sendSuccess("Supplier berhasil dihapus");
            } else {
                return $this->sendError("Supplier tidak dapat dihapus");
            }
        }
    }
    public function createSalesman(Request $request, $supplier_id)
    {
        try {
            $salesman = $this->supplierRepository->createSalesman($request->except(['_token']), $supplier_id);
            return $this->sendSuccess("Berhasil membuat data salesman");
        } catch (\Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }
}
