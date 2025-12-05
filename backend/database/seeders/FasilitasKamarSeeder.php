<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FasilitasKamarSeeder extends Seeder
{
    public function run(): void
    {
        $now = now();

        // ambil semua kamar
        $kamars = DB::table('kamars')->select('id_kamar', 'nama_kamar')->get();

        $baseFacilities = [
            [
                'id_icon' => 1,
                'nama_fasilitas_kamar' => 'Wi-Fi',
                'keterangan_fasilitas_kamar' => 'Internet kencang di dalam kamar.',
            ],
            [
                'id_icon' => 4,
                'nama_fasilitas_kamar' => 'AC',
                'keterangan_fasilitas_kamar' => 'AC dingin dengan pengaturan suhu.',
            ],
            [
                'id_icon' => 5,
                'nama_fasilitas_kamar' => 'TV',
                'keterangan_fasilitas_kamar' => 'TV layar datar dengan saluran lokal dan internasional.',
            ],
        ];

        $data = [];

        foreach ($kamars as $kamar) {
            foreach ($baseFacilities as $facility) {
                $data[] = [
                    'id_kamar' => $kamar->id_kamar,
                    'id_icon' => $facility['id_icon'],
                    'nama_fasilitas_kamar' => $facility['nama_fasilitas_kamar'],
                    'keterangan_fasilitas_kamar' => $facility['keterangan_fasilitas_kamar'],
                    'created_at' => $now,
                    'updated_at' => $now,
                ];
            }
        }

        DB::table('fasilitas_kamars')->insert($data);
    }
}
