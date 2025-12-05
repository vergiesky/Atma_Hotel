<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class IconSeeder extends Seeder
{
    public function run(): void
    {
        $now = now();

        DB::table('icons')->insert([
            [
                'nama_icon' => 'Wi-Fi',
                'file_path_icon' => 'icons/wifi.png',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nama_icon' => 'Breakfast',
                'file_path_icon' => 'icons/breakfast.png',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nama_icon' => 'Kolam Renang',
                'file_path_icon' => 'icons/pool.png',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nama_icon' => 'AC',
                'file_path_icon' => 'icons/ac.png',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nama_icon' => 'TV',
                'file_path_icon' => 'icons/tv.png',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nama_icon' => 'Gym',
                'file_path_icon' => 'icons/gym.png',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nama_icon' => 'Spa',
                'file_path_icon' => 'icons/spa.png',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nama_icon' => 'Restoran',
                'file_path_icon' => 'icons/restaurant.png',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nama_icon' => 'Parkir',
                'file_path_icon' => 'icons/parking.png',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nama_icon' => 'Layanan Kamar',
                'file_path_icon' => 'icons/room-service.png',
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);
    }
}
