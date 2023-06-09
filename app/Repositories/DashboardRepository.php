<?php

namespace App\Repositories;

use \Illuminate\Database\QueryException;

use App\Models\CashierShift;
use App\Models\Sale;
use App\Models\Services\Administration;
use App\Models\Services\Electrocardiogram;
use App\Models\Services\FamilyPlanning;
use App\Models\Services\General;
use App\Models\Services\Immunization;
use App\Models\Services\Inpatient;
use App\Models\Services\Laboratory;
use App\Models\Services\Parturition;
use App\Models\Services\Pregnancy;
use App\Models\ShiftCashTransfer;
use App\Models\ShiftCashAdd;
use App\Models\Spending;
use App\Models\StockAdjusment;
use App\Models\User;
use Carbon\Carbon;
use DB;
use Exception;

/**
 * Class DashboardRepository
 */
class DashboardRepository
{

    public function stockAdjusments()
    {
        return StockAdjusment::with('product')->get();
    }

    public function getHighProduct()
    {
        $data = DB::table('products')->leftJoin('sale_items', 'products.id', '=', 'sale_items.product_id')
            ->selectRaw('products.*, COALESCE(sum(sale_items.total),0) total')
            ->groupBy('products.id')
            ->orderBy('total', 'DESC')
            ->take(5)
            ->get();
        return $data;
    }

    public function getSalesTotal()
    {
        if ($this->getShift()) {
            $sales = Sale::where('payment_method', 'cash')->where('created_at', '>=', $this->getShift()->start_shift)->where('created_at', '<=', Carbon::now())->sum('grand_total');
            return $sales ?? 0;
        } else {
            return 0;
        }
    }


    public function getCashAdd()
    {
        if ($this->getShift()) {
            $data = ShiftCashAdd::where('cashier_shift_id', $this->getShift()->id)->sum('total_add');
            return $data ?? 0;
        } else {
            return 0;
        }
    }

    public function getSpending()
    {
        if ($this->getShift()) {
            $spending = Spending::where('cashier_shift_id', $this->getShift()->id)->sum('amount');
            return $spending ?? 0;
        } else {
            return 0;
        }
    }

    public function getServicesTotal()
    {
        $general = General::where('created_at', '>=', $this->getShift() != null ? $this->getShift()->start_shift : now())->where('created_at', '<=', Carbon::now())->where('payment_method', 'cash')->sum('total_fee');
        $pregnancy = Pregnancy::where('created_at', '>=', $this->getShift() != null ? $this->getShift()->start_shift : now())->where('created_at', '<=', Carbon::now())->where('payment_method', 'cash')->sum('total_fee');
        $familyPlanning = FamilyPlanning::where('created_at', '>=', $this->getShift() != null ? $this->getShift()->start_shift : now())->where('created_at', '<=', Carbon::now())->where('payment_method', 'cash')->sum('total_fee');
        $laboratory = Laboratory::where('created_at', '>=', $this->getShift() != null ? $this->getShift()->start_shift : now())->where('created_at', '<=', Carbon::now())->where('payment_method', 'cash')->sum('total_fee');
        $parturition = Parturition::where('created_at', '>=', $this->getShift() != null ? $this->getShift()->start_shift : now())->where('created_at', '<=', Carbon::now())->where('payment_method', 'cash')->sum('total_fee');
        $immunization = Immunization::where('created_at', '>=', $this->getShift() != null ? $this->getShift()->start_shift : now())->where('created_at', '<=', Carbon::now())->where('payment_method', 'cash')->sum('total_fee');
        $inpatient = Inpatient::where('created_at', '>=', $this->getShift() != null ? $this->getShift()->start_shift : now())->where('created_at', '<=', Carbon::now())->where('payment_method', 'cash')->sum('total_fee');
        $ekg = Electrocardiogram::where('created_at', '>=', $this->getShift() != null ? $this->getShift()->start_shift : now())->where('created_at', '<=', Carbon::now())->where('payment_method', 'cash')->sum('total_fee');
        $admininistration = Administration::where('created_at', '>=', $this->getShift() != null ? $this->getShift()->start_shift : now())->where('created_at', '<=', Carbon::now())->where('payment_method', 'cash')->sum('total_fee');
        return $general  + $pregnancy  + $familyPlanning  + $laboratory
            + $parturition  + $immunization  + $ekg  + $admininistration  + $inpatient;
    }

    public function getShiftSalesTotal()
    {
        return $this->getSalesTotal() + $this->getServicesTotal();
    }



    public function getFinalCash()
    {
        if ($this->getShift()) {
            return ($this->getShiftSalesTotal() + $this->getShift()->initial_cash) - $this->getTransferCash();
        } else {
            return 0;
        }
    }

    public function previousShift()
    {
        return CashierShift::with('cashier')
            ->whereNotNull('end_shift')
            ->orderBy('created_at', 'DESC')
            ->first();
    }

    public function getShift()
    {
        return CashierShift::with('cashier')
            ->where('cashier_id', auth()->id())
            ->where('end_shift', NULL)
            ->first();
    }

    public function startShift()
    {
        $currentShift = CashierShift::whereNull('end_shift')
            ->get()
            ->count();
        if ($currentShift) {
            return [
                'status' => 'error',
                'message' => 'Masih Ada Shift Aktif',
                'data' => []
            ];
        }

        $shift = new CashierShift();
        $shift->cashier_id = auth()->id();
        $shift->start_shift = now();
        if ($previousShift = $this->previousShift()) {
            $shift->previous_shift_id = $previousShift->id;
            $shift->initial_cash = $previousShift->final_cash;
        }
        $shift->save();

        return [
            'status' => 'success',
            'message' => 'Berhasil Memulai Shift',
            'data' => $shift
        ];
    }

    public function endShift()
    {
        $shift = CashierShift::with('cashAdds')->where('cashier_id', auth()->id())->whereNull('end_shift')->first();
        $shift->shift_sales_total = $this->getSalesTotal();
        $shift->final_cash = $this->getFinalCash() + $shift->cashAdds()->sum('total_add');
        $shift->end_shift = now();
        $shift->save();
    }

    public function addInitialCash($amount)
    {
        $shift = $this->getShift() ?: $this->previousShift();

        $initial = new ShiftCashAdd();
        $initial->cashier_id = auth()->id();
        $initial->cashier_shift_id = $shift->id;
        $initial->total_add = $amount;

        return $initial->save();
    }

    public function getTransferCash()
    {
        $shift = $this->getShift();
        $transfer = ShiftCashTransfer::where('cashier_id', auth()->id())
            ->where('cashier_shift_id', $shift->id)
            ->sum('total_transfer');
        return $transfer ?? 0;
    }

    public function transferCash(array $transferData)
    {
        try {
            $transfer = new ShiftCashTransfer();
            $transfer->cashier_id = auth()->id();
            $transfer->cashier_shift_id = $this->getShift()->id;
            $transfer->total_transfer = $transferData['amount'];
            $transfer->transfer_proof_image = $transferData['transfer_proof'];
            $transfer->save();
        } catch (QueryException $qe) {
            abort(500, $qe->getMessage());
        }

        return $transfer;
    }

    public function getUserById($user_id)
    {
        return User::find($user_id);
    }

    /**
     * @param  string  $startDate
     * @param  string  $endDate
     *
     * @throws Exception
     * @return array
     */
    public function getDate($startDate, $endDate)
    {
        $dateArr = [];
        $subStartDate = '';
        $subEndDate = '';
        if (!($startDate && $endDate)) {
            $data = [
                'dateArr'   => $dateArr,
                'startDate' => $subStartDate,
                'endDate'   => $subEndDate,
            ];

            return $data;
        }
        $end = trim(substr($endDate, 0, 10));
        $start = Carbon::parse($startDate)->toDateString();
        /** @var \Illuminate\Support\Carbon $startDate */
        $startDate = Carbon::createFromFormat('Y-m-d', $start);
        /** @var \Illuminate\Support\Carbon $endDate */
        $endDate = Carbon::createFromFormat('Y-m-d', $end);

        while ($startDate <= $endDate) {
            $dateArr[] = $startDate->copy()->format('Y-m-d');
            $startDate->addDay();
        }
        $start = current($dateArr);
        $endDate = end($dateArr);
        $subStartDate = Carbon::parse($start)->startOfDay()->format('Y-m-d H:i:s');
        $subEndDate = Carbon::parse($endDate)->endOfDay()->format('Y-m-d H:i:s');

        $data = [
            'dateArr'   => $dateArr,
            'startDate' => $subStartDate,
            'endDate'   => $subEndDate,
        ];

        return $data;
    }
}
