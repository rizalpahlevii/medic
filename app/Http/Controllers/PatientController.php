<?php

namespace App\Http\Controllers;

use App\Exports\PatientExport;
use App\Http\Requests\CreatePatientRequest;
use App\Http\Requests\UpdatePatientRequest;
use App\Models\Patient;
use App\Models\Services\FamilyPlanning;
use App\Models\Services\General;
use App\Models\Services\Laboratory;
use App\Models\Services\Pregnancy;
use App\Queries\PatientDataTable;
use App\Repositories\PatientRepository;
use DataTables;
use Exception;
use Flash;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;
use Illuminate\View\View;
use Maatwebsite\Excel\Facades\Excel;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class PatientController extends AppBaseController
{
    /** @var  PatientRepository */
    private $patientRepository;

    public function __construct(PatientRepository $patientRepo)
    {
        $this->patientRepository = $patientRepo;
    }

    /**
     * Display a listing of the Patient.
     *
     * @param  Request  $request
     *
     * @throws Exception
     *
     * @return Factory|View
     */
    public function index(Request $request)
    {

        if ($request->ajax()) {
            return Datatables::of((new PatientDataTable())->get())->addIndexColumn()->make(true);
        }

        return view('patients.index');
    }

    /**
     * Show the form for creating a new Patient.
     *
     * @return Factory|View
     */
    public function create()
    {
        $bloodGroup = getBloodGroups();

        return view('patients.create', compact('bloodGroup'));
    }

    /**
     * Store a newly created Patient in storage.
     *
     * @param  CreatePatientRequest  $request
     *
     * @return RedirectResponse|Redirector
     */
    public function store(CreatePatientRequest $request)
    {
        $input = $request->all();

        $this->patientRepository->store($input);
        Flash::success('Berhasil menyimpan data pasien baru.');

        return redirect(route('patients.index'));
    }


    /**
     * @param  int  $patientId
     *
     * @return Factory|RedirectResponse|Redirector|View
     */
    public function show($patientId)
    {
        $data = $this->patientRepository->getPatientAssociatedData($patientId);
        return view('patients.show', compact('data'));
    }

    /**
     * Show the form for editing the specified Patient.
     *
     * @param  Patient  $patient
     *
     * @return Factory|View
     */
    public function edit($id)
    {
        $patient = $this->patientRepository->getPatient($id);
        $bloodGroup = getBloodGroups();

        return view('patients.edit', compact('patient', 'bloodGroup'));
    }

    /**
     * @param  Patient  $patient
     * @param  UpdatePatientRequest  $request
     *
     * @return RedirectResponse|Redirector
     */
    public function update(UpdatePatientRequest $request, $id)
    {
        $input = $request->all();

        $this->patientRepository->update($input, $id);

        Flash::success('Berhasil mengubah data pasien.');

        return redirect(route('patients.index'));
    }

    /**
     * Remove the specified Patient from storage.
     *
     * @param  Patient  $patient
     *
     * @throws Exception
     *
     * @return JsonResponse
     */
    public function destroy($id)
    {
        $patientModels = [
            General::class,
            Pregnancy::class,
            FamilyPlanning::class,
            Laboratory::class
        ];
        $result = canDelete($patientModels, 'patient_id', $id);
        if ($result) {
            return $this->sendError('Patient can\'t be deleted.');
        } else {

            $patient = $this->patientRepository->getPatient($id);
            if (!auth()->user()->hasRole('owner')) addNotification("melakukan penghapusan data pasien : " . $patient->name);

            $patient->delete();
            return $this->sendSuccess('Berhasil menghapus data pasien.');
        }
    }

    public function service($patientId, $serviceName)
    {
        if ($serviceName == "generals") {
            $service = $this->patientRepository->getPatientAssociatedData($patientId, 'generalServices.medic');
            $service = $service->generalServices;
        }
        if ($serviceName == "pregnancies") {
            $service = $this->patientRepository->getPatientAssociatedData($patientId, 'pregnancyServices.medic');
            $service = $service->pregnancyServices;
        }
        if ($serviceName == "family-plannings") {
            $service = $this->patientRepository->getPatientAssociatedData($patientId, 'familyPlanningServices.medic');
            $service = $service->familyPlanningServices;
        }
        if ($serviceName == "laboratories") {
            $service = $this->patientRepository->getPatientAssociatedData($patientId, 'laboratoryServices.medic');
            $service = $service->laboratoryServices;
        }
        if ($serviceName == "immunizations") {
            $service = $this->patientRepository->getPatientAssociatedData($patientId, 'immunizationServices.medic');
            $service = $service->immunizationServices;
        }
        if ($serviceName == "parturitions") {
            $service = $this->patientRepository->getPatientAssociatedData($patientId, 'parturitionServices.medic');
            $service = $service->parturitionServices;
        }
        if ($serviceName == "inpatients") {
            $service = $this->patientRepository->getPatientAssociatedData($patientId, 'inpatientServices.medic');
            $service = $service->inpatientServices;
        }
        if ($serviceName == "electrocardiograms") {
            $service = $this->patientRepository->getPatientAssociatedData($patientId, 'electrocardiogramServices.medic');
            $service = $service->electrocardiogramServices;
        }
        if ($serviceName == "administrations") {
            $service = $this->patientRepository->getPatientAssociatedData($patientId, 'administrationServices.medic');
            $service = $service->administrationServices;
        }
        return $this->sendResponse($service, "Successfully to get service.");
    }

    /**
     * @param  int  $id
     *
     * @return JsonResponse
     */
    public function activeDeactiveStatus($id)
    {
        $patient = Patient::findOrFail($id);
        $status = !$patient->user->status;
        $patient->user()->update(['status' => $status]);

        return $this->sendSuccess('Status updated successfully.');
    }

    /**
     * @return BinaryFileResponse
     */
    public function patientExport()
    {
        return Excel::download(new PatientExport, 'patients-' . time() . '.xlsx');
    }
}
