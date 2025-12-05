<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FasilitasHotelSeeder extends Seeder
{
    public function run(): void
    {
        $now = now();

        DB::table('fasilitas_hotels')->insert([
            // Hotel 1 - Atma Grand Hotel
            [
                'id_hotel' => 1,
                'id_icon' => 1,
                'nama_fasilitas' => 'Wi-Fi',
                'keterangan_fasilitas_hotel' => 'Akses internet cepat di seluruh area hotel.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 1,
                'id_icon' => 2,
                'nama_fasilitas' => 'Breakfast',
                'keterangan_fasilitas_hotel' => 'Sarapan pagi prasmanan untuk tamu.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 1,
                'id_icon' => 9,
                'nama_fasilitas' => 'Parkir',
                'keterangan_fasilitas_hotel' => 'Area parkir luas dan aman untuk tamu.',
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // Hotel 2 - Atma Beach Resort
            [
                'id_hotel' => 2,
                'id_icon' => 1,
                'nama_fasilitas' => 'Wi-Fi',
                'keterangan_fasilitas_hotel' => 'Akses internet cepat di seluruh area hotel.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 2,
                'id_icon' => 2,
                'nama_fasilitas' => 'Breakfast',
                'keterangan_fasilitas_hotel' => 'Sarapan pagi dengan pilihan menu lokal dan internasional.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 2,
                'id_icon' => 3,
                'nama_fasilitas' => 'Kolam Renang',
                'keterangan_fasilitas_hotel' => 'Kolam renang outdoor dengan pemandangan laut.',
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // Hotel 3 - Atma Mountain Lodge
            [
                'id_hotel' => 3,
                'id_icon' => 1,
                'nama_fasilitas' => 'Wi-Fi',
                'keterangan_fasilitas_hotel' => 'Akses internet di area lobby dan kamar.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 3,
                'id_icon' => 3,
                'nama_fasilitas' => 'Kolam Renang',
                'keterangan_fasilitas_hotel' => 'Kolam renang dengan udara sejuk pegunungan.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 3,
                'id_icon' => 6,
                'nama_fasilitas' => 'Gym',
                'keterangan_fasilitas_hotel' => 'Pusat kebugaran dengan peralatan lengkap.',
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // Hotel 4 - Atma City Hotel
            [
                'id_hotel' => 4,
                'id_icon' => 1,
                'nama_fasilitas' => 'Wi-Fi',
                'keterangan_fasilitas_hotel' => 'Wi-Fi gratis di seluruh area hotel.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 4,
                'id_icon' => 2,
                'nama_fasilitas' => 'Breakfast',
                'keterangan_fasilitas_hotel' => 'Sarapan prasmanan dengan menu kontinental.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 4,
                'id_icon' => 10,
                'nama_fasilitas' => 'Layanan Kamar',
                'keterangan_fasilitas_hotel' => 'Layanan kamar tersedia 24 jam untuk tamu.',
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // Hotel 5 - Atma Riverside Inn
            [
                'id_hotel' => 5,
                'id_icon' => 1,
                'nama_fasilitas' => 'Wi-Fi',
                'keterangan_fasilitas_hotel' => 'Wi-Fi gratis di area kamar dan lobby.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 5,
                'id_icon' => 8,
                'nama_fasilitas' => 'Restoran',
                'keterangan_fasilitas_hotel' => 'Restoran dengan pemandangan sungai yang tenang.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 5,
                'id_icon' => 9,
                'nama_fasilitas' => 'Parkir',
                'keterangan_fasilitas_hotel' => 'Parkir gratis untuk tamu yang menginap.',
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // Hotel 6 - Atma Heritage Hotel
            [
                'id_hotel' => 6,
                'id_icon' => 1,
                'nama_fasilitas' => 'Wi-Fi',
                'keterangan_fasilitas_hotel' => 'Akses internet di seluruh area hotel.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 6,
                'id_icon' => 7,
                'nama_fasilitas' => 'Spa',
                'keterangan_fasilitas_hotel' => 'Layanan spa dan pijat dengan nuansa tradisional.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 6,
                'id_icon' => 8,
                'nama_fasilitas' => 'Restoran',
                'keterangan_fasilitas_hotel' => 'Restoran dengan menu khas lokal dan internasional.',
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // Hotel 7 - Atma Sky Suites
            [
                'id_hotel' => 7,
                'id_icon' => 1,
                'nama_fasilitas' => 'Wi-Fi',
                'keterangan_fasilitas_hotel' => 'Wi-Fi berkecepatan tinggi di setiap kamar.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 7,
                'id_icon' => 4,
                'nama_fasilitas' => 'AC',
                'keterangan_fasilitas_hotel' => 'Setiap kamar dilengkapi AC yang dingin dan nyaman.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 7,
                'id_icon' => 5,
                'nama_fasilitas' => 'TV',
                'keterangan_fasilitas_hotel' => 'TV layar datar dengan saluran lokal dan internasional.',
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // Hotel 8 - Atma Garden Resort
            [
                'id_hotel' => 8,
                'id_icon' => 1,
                'nama_fasilitas' => 'Wi-Fi',
                'keterangan_fasilitas_hotel' => 'Akses Wi-Fi di area kamar dan fasilitas umum.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 8,
                'id_icon' => 3,
                'nama_fasilitas' => 'Kolam Renang',
                'keterangan_fasilitas_hotel' => 'Kolam renang dengan area taman yang hijau.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 8,
                'id_icon' => 6,
                'nama_fasilitas' => 'Gym',
                'keterangan_fasilitas_hotel' => 'Fasilitas gym untuk menjaga kebugaran tamu.',
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // Hotel 9 - Atma Hills Hotel
            [
                'id_hotel' => 9,
                'id_icon' => 1,
                'nama_fasilitas' => 'Wi-Fi',
                'keterangan_fasilitas_hotel' => 'Wi-Fi gratis di seluruh area hotel.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 9,
                'id_icon' => 4,
                'nama_fasilitas' => 'AC',
                'keterangan_fasilitas_hotel' => 'Setiap kamar dilengkapi AC yang nyaman.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 9,
                'id_icon' => 8,
                'nama_fasilitas' => 'Restoran',
                'keterangan_fasilitas_hotel' => 'Restoran dengan pemandangan kota dari ketinggian.',
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // Hotel 10 - Atma Convention Hotel
            [
                'id_hotel' => 10,
                'id_icon' => 1,
                'nama_fasilitas' => 'Wi-Fi',
                'keterangan_fasilitas_hotel' => 'Wi-Fi cepat untuk kebutuhan bisnis dan acara.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 10,
                'id_icon' => 3,
                'nama_fasilitas' => 'Kolam Renang',
                'keterangan_fasilitas_hotel' => 'Kolam renang untuk relaksasi setelah acara.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 10,
                'id_icon' => 9,
                'nama_fasilitas' => 'Parkir',
                'keterangan_fasilitas_hotel' => 'Area parkir luas untuk tamu dan peserta acara.',
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // Hotel 11 - Atma Boutique Hotel
            [
                'id_hotel' => 11,
                'id_icon' => 1,
                'nama_fasilitas' => 'Wi-Fi',
                'keterangan_fasilitas_hotel' => 'Wi-Fi gratis di seluruh area hotel.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 11,
                'id_icon' => 2,
                'nama_fasilitas' => 'Breakfast',
                'keterangan_fasilitas_hotel' => 'Sarapan dengan pilihan menu yang elegan.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 11,
                'id_icon' => 10,
                'nama_fasilitas' => 'Layanan Kamar',
                'keterangan_fasilitas_hotel' => 'Layanan kamar untuk kenyamanan tamu sepanjang hari.',
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // Hotel 12 - Atma Lakeview Resort
            [
                'id_hotel' => 12,
                'id_icon' => 1,
                'nama_fasilitas' => 'Wi-Fi',
                'keterangan_fasilitas_hotel' => 'Akses internet di area resort dan kamar.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 12,
                'id_icon' => 3,
                'nama_fasilitas' => 'Kolam Renang',
                'keterangan_fasilitas_hotel' => 'Kolam renang dengan pemandangan danau.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 12,
                'id_icon' => 8,
                'nama_fasilitas' => 'Restoran',
                'keterangan_fasilitas_hotel' => 'Restoran tepi danau dengan suasana romantis.',
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // Hotel 13 - Atma Airport Hotel
            [
                'id_hotel' => 13,
                'id_icon' => 1,
                'nama_fasilitas' => 'Wi-Fi',
                'keterangan_fasilitas_hotel' => 'Wi-Fi gratis untuk tamu transit dan menginap.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 13,
                'id_icon' => 2,
                'nama_fasilitas' => 'Breakfast',
                'keterangan_fasilitas_hotel' => 'Sarapan cepat untuk tamu dengan jadwal penerbangan pagi.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 13,
                'id_icon' => 9,
                'nama_fasilitas' => 'Parkir',
                'keterangan_fasilitas_hotel' => 'Parkir dekat bandara dengan keamanan 24 jam.',
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // Hotel 14 - Atma Eco Lodge
            [
                'id_hotel' => 14,
                'id_icon' => 1,
                'nama_fasilitas' => 'Wi-Fi',
                'keterangan_fasilitas_hotel' => 'Wi-Fi tersedia di area umum lodge.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 14,
                'id_icon' => 7,
                'nama_fasilitas' => 'Spa',
                'keterangan_fasilitas_hotel' => 'Spa dengan bahan-bahan alami dan organik.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 14,
                'id_icon' => 8,
                'nama_fasilitas' => 'Restoran',
                'keterangan_fasilitas_hotel' => 'Restoran dengan menu sehat dan ramah lingkungan.',
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);
    }
}
