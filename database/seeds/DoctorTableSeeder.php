<?php

use App\Repositories\DoctorRepository;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class DoctorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $input = [
            [
                'first_name'           => 'Monika',
                'last_name'            => 'Vagasiya',
                'email'                => 'monika@gmail.com',
                'username'             => 'monika',
                'password'             => '123456',
                'designation'          => 'Doctor',
                'gender'               => 0,
                'qualification'        => 'MBBS',
                'status'               => 1,
                'doctor_department_id' => 1,
                'specialist'           => 'Heart',
                'email_verified_at'    => Carbon::now(),
            ],
            [
                'first_name'           => 'Vatsal',
                'last_name'            => 'Sakariya',
                'email'                => 'vatsal@gmail.com',
                'username'             => 'vatsal',
                'password'             => '123456',
                'designation'          => 'Doctor',
                'gender'               => 0,
                'qualification'        => 'MBBS',
                'status'               => 1,
                'doctor_department_id' => 2,
                'specialist'           => 'Liver',
                'email_verified_at'    => Carbon::now(),
            ],
            [
                'first_name'           => 'Vikas',
                'last_name'            => 'Patil',
                'email'                => 'vikas@gmail.com',
                'username'             => 'patil',
                'password'             => '123456',
                'designation'          => 'Doctor',
                'gender'               => 0,
                'qualification'        => 'MBBS',
                'status'               => 1,
                'doctor_department_id' => 3,
                'specialist'           => 'Lungs',
                'email_verified_at'    => Carbon::now(),
            ],
            [
                'first_name'           => 'Urvisha',
                'last_name'            => 'Desai',
                'email'                => 'urvisha@gmail.com',
                'username'             => 'urvisha',
                'password'             => '123456',
                'designation'          => 'Doctor',
                'gender'               => 0,
                'qualification'        => 'MBBS',
                'status'               => 1,
                'doctor_department_id' => 4,
                'specialist'           => 'Brain',
                'email_verified_at'    => Carbon::now(),
            ],
            [
                'first_name'           => 'Parth',
                'last_name'            => 'Patel',
                'email'                => 'parth@gmail.com',
                'username'             => 'patel',
                'password'             => '123456',
                'designation'          => 'Doctor',
                'gender'               => 0,
                'qualification'        => 'MBBS',
                'status'               => 1,
                'doctor_department_id' => 5,
                'specialist'           => 'Kidney',
                'email_verified_at'    => Carbon::now(),
            ],
            [
                'first_name'           => 'Dhaval',
                'last_name'            => 'Naik',
                'email'                => 'dhaval@gmail.com',
                'username'             => 'username',
                'password'             => '123456',
                'designation'          => 'Doctor',
                'gender'               => 0,
                'qualification'        => 'MBBS',
                'status'               => 1,
                'doctor_department_id' => 6,
                'specialist'           => 'Bones',
                'email_verified_at'    => Carbon::now(),
            ],
        ];

        foreach ($input as $key => $value) {
            /** @var DoctorRepository $doctor */
            $doctor = App::make(DoctorRepository::class);
            $doctor->store($input[$key], false);
        }
    }
}
