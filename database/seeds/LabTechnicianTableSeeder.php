<?php

use App\Repositories\LabTechnicianRepository;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class LabTechnicianTableSeeder extends Seeder
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
                'first_name'        => 'Hiren',
                'last_name'         => 'Prajapati',
                'email'             => 'hiren@gmail.com',
                'username'             => 'hiren',
                'password'          => '123456',
                'designation'       => 'Lab Technician',
                'gender'            => 0,
                'qualification'     => 'BSc',
                'status'            => 1,
                'email_verified_at' => Carbon::now(),
            ],
            [
                'first_name'        => 'Vivek',
                'last_name'         => 'Beladia',
                'email'             => 'vivek@gmail.com',
                'username'          => 'vivek',
                'password'          => '123456',
                'designation'       => 'Lab Technician',
                'gender'            => 0,
                'qualification'     => 'BSc',
                'status'            => 1,
                'email_verified_at' => Carbon::now(),
            ],
        ];

        foreach ($input as $key => $value) {
            /** @var LabTechnicianRepository $labTechnician */
            $labTechnician = App::make(LabTechnicianRepository::class);
            $labTechnician->store($input[$key], false);
        }
    }
}
