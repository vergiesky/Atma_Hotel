<?php

namespace Database\Seeders;

use Illuminate\Support\Arr;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class GambarKamarSeeder extends Seeder
{
    public function run(): void
    {
        $now = now();

        // ambil semua file di disk public folder gambar_kamars
        $files = Storage::disk('public')->files('gambar_kamars');

        // jika kosong, pakai null sebagai fallback
        $filePool = !empty($files) ? $files : [null];

        // ambil semua kamar
        $kamars = DB::table('kamars')->get();

        $data = [];

        foreach ($kamars as $kamar) {
            // minimal 2 gambar per kamar
            for ($i = 1; $i <= 2; $i++) {
                $data[] = [
                    'id_kamar' => $kamar->id_kamar,
                    'nama_gambar_kamar' => $kamar->nama_kamar . ' ' . $i,
                    'keterangan_gambar_kamar' => 'Foto ' . $i . ' untuk kamar ' . $kamar->nama_kamar . '.',
                    'file_path_gambar_kamar' => Arr::random($filePool),
                    'created_at' => $now,
                    'updated_at' => $now,
                ];
            }
        }

        DB::table('gambar_kamars')->insert($data);
    }
}
