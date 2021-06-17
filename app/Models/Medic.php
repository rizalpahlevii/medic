<?php

namespace App\Models;

use App\Models\Services\FamilyPlanning;
use App\Models\Services\General;
use App\Models\Services\Immunization;
use App\Models\Services\Laboratory;
use App\Models\Services\Parturition;
use App\Models\Services\Pregnancy;
use App\Models\Services\Administration;
use App\Models\Services\Electrocardiogram;
use App\Models\Services\Inpatient;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Webpatser\Uuid\Uuid;

class Medic extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'specialization',
        'birth_date',
        'phone',
        'gender',
        'blood_group',
        'address',
        'city'
    ];

    public static $rules = [
        'specialization' => 'required',
        'name_form' => 'required|min:2',
        'birth_date' => 'required',
        'phone_form' => 'required',
        'gender_form' => 'nullable',
        'blood_group' => 'required',
        'address_form' => 'required|min:4',
        'city' => 'required:min:2'
    ];

    protected $keyType = 'string';

    public $incrementing = false;

    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->id = (string) Uuid::generate(4);
        });
    }



    public function generalServices()
    {
        return $this->hasMany(General::class, 'medic_id', 'id');
    }

    public function familyPlanningServices()
    {
        return $this->hasMany(FamilyPlanning::class, 'medic_id', 'id');
    }

    public function laboratoryServices()
    {
        return $this->hasMany(Laboratory::class, 'medic_id', 'id');
    }

    public function pregnancyServices()
    {
        return $this->hasMany(Pregnancy::class, 'medic_id', 'id');
    }
    public function immunizationServices()
    {
        return $this->hasMany(Immunization::class, 'medic_id', 'id');
    }

    public function parturitionServices()
    {
        return $this->hasMany(Parturition::class, 'medic_id', 'id');
    }
    public function inpatientServices()
    {
        return $this->hasMany(Inpatient::class, 'medic_id', 'id');
    }
    public function electrocardiogramServices()
    {
        return $this->hasMany(Electrocardiogram::class, 'medic_id', 'id');
    }
    public function administrationServices()
    {
        return $this->hasMany(Administration::class, 'medic_id', 'id');
    }
}
