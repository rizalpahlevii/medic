<?php

namespace App\Models;

use App\Models\Services\FamilyPlanning;
use App\Models\Services\General;
use App\Models\Services\Laboratory;
use App\Models\Services\Pregnancy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Validation\Rule;
use Webpatser\Uuid\Uuid;

class Patient extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'name',
        'birth_date',
        'phone',
        'gender',
        'blood_group',
        'address',
        'city'
    ];
    public static $rules = [
        'name_form' => 'required|min:2',
        'birth_date' => 'required',
        'phone_form' => 'required',
        'gender_form' => 'required',
        'blood_group' => 'nullable',
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
        return $this->hasMany(General::class, 'patient_id', 'id');
    }

    public function familyPlanningServices()
    {
        return $this->hasMany(FamilyPlanning::class, 'patient_id', 'id');
    }

    public function laboratoryServices()
    {
        return $this->hasMany(Laboratory::class, 'patient_id', 'id');
    }

    public function pregnancyServices()
    {
        return $this->hasMany(Pregnancy::class, 'patient_id', 'id');
    }
}
