<?php

use App\Repositories\PharmacistRepository;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class PharmacistTableSeeder extends Seeder
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
                'first_name'        => 'Akash',
                'last_name'         => 'Dhimmar',
                'email'             => 'akash@gmail.com',
                'username'          => 'akash',
                'password'          => '123456',
                'gender'            => 0,
                'status'            => 1,
                'email_verified_at' => Carbon::now(),
            ],
            [
                'first_name'        => 'Shaliesh',
                'last_name'         => 'Ladhumar',
                'email'             => 'shaliesh@gmail.com',
                'username'          => 'shaliesh',
                'password'          => '123456',
                'gender'            => 0,
                'status'            => 1,
                'email_verified_at' => Carbon::now(),
            ],
        ];

        foreach ($input as $key => $value) {
            /** @var PharmacistRepository $pharmacist */
            $pharmacist = App::make(PharmacistRepository::class);
            $pharmacist->store($input[$key], false);
        }
    }
}
