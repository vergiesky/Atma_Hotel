<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdminSeeder extends Seeder
{
    public function run()
    {
        $now = now();

        DB::table('admins')->insert([
            [
                'id_user' => 1,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);
    }
}
