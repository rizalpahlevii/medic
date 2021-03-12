<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Validation\Rule;

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
        'name' => 'required|min:2',
        'birth_date' => 'required',
        'phone' => 'required',
        'gender' => 'required',
        'blood_group' => 'required',
        'address' => 'required|min:4',
        'city' => 'required:min:2'
    ];
}
