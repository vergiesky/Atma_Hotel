<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class CustomerSeeder extends Seeder
{
    public function run()
    {
        $now = now();

        DB::table('customers')->insert([
            [
                'id_user' => 2,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_user' => 3,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_user' => 4,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);
    }
}
