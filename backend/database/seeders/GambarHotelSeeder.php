<?php

namespace Database\Seeders;

use Illuminate\Support\Arr;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class GambarHotelSeeder extends Seeder
{
    public function run(): void
    {
        $now = now();

        // ambil semua file di disk public folder gambar_hotels
        $files = Storage::disk('public')->files('gambar_hotels');

        // jika kosong, pakai null sebagai fallback
        $filePool = !empty($files) ? $files : [null];

        DB::table('gambar_hotels')->insert([
            // id_hotel = 1 - Atma Grand Hotel
            [
                'id_hotel' => 1,
                'nama_gambar_hotel' => 'Lobby Atma Grand',
                'keterangan_gambar_hotel' => 'Lobby modern dengan area lounge yang luas.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 1,
                'nama_gambar_hotel' => 'Kamar Deluxe Atma Grand',
                'keterangan_gambar_hotel' => 'Kamar deluxe dengan tempat tidur king dan area kerja.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // id_hotel = 2 - Atma Beach Resort
            [
                'id_hotel' => 2,
                'nama_gambar_hotel' => 'Kolam Renang Atma Beach',
                'keterangan_gambar_hotel' => 'Kolam renang outdoor dengan pemandangan laut.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 2,
                'nama_gambar_hotel' => 'Pantai Privat Atma Beach',
                'keterangan_gambar_hotel' => 'Akses langsung ke pantai dengan pasir putih.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // id_hotel = 3 - Atma Mountain Lodge
            [
                'id_hotel' => 3,
                'nama_gambar_hotel' => 'Eksterior Atma Mountain Lodge',
                'keterangan_gambar_hotel' => 'Bangunan lodge bernuansa kayu di area pegunungan.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 3,
                'nama_gambar_hotel' => 'Kamar Atma Mountain Lodge',
                'keterangan_gambar_hotel' => 'Kamar dengan jendela besar menghadap pegunungan.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // id_hotel = 4 - Atma City Hotel
            [
                'id_hotel' => 4,
                'nama_gambar_hotel' => 'Lobby Atma City Hotel',
                'keterangan_gambar_hotel' => 'Lobby bergaya bisnis dengan area resepsionis modern.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 4,
                'nama_gambar_hotel' => 'Ruang Meeting Atma City',
                'keterangan_gambar_hotel' => 'Ruang meeting lengkap dengan proyektor dan sound system.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // id_hotel = 5 - Atma Riverside Inn
            [
                'id_hotel' => 5,
                'nama_gambar_hotel' => 'Terang Riverside Atma Inn',
                'keterangan_gambar_hotel' => 'Area duduk di tepi sungai dengan pemandangan yang tenang.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 5,
                'nama_gambar_hotel' => 'Kamar Riverside',
                'keterangan_gambar_hotel' => 'Kamar dengan balkon menghadap aliran sungai.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // id_hotel = 6 - Atma Heritage Hotel
            [
                'id_hotel' => 6,
                'nama_gambar_hotel' => 'Fasad Atma Heritage',
                'keterangan_gambar_hotel' => 'Fasad hotel dengan arsitektur klasik Jawa.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 6,
                'nama_gambar_hotel' => 'Lobi Heritage',
                'keterangan_gambar_hotel' => 'Lobi dengan dekorasi tradisional dan ornamen kayu.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // id_hotel = 7 - Atma Sky Suites
            [
                'id_hotel' => 7,
                'nama_gambar_hotel' => 'Rooftop Atma Sky Suites',
                'keterangan_gambar_hotel' => 'Rooftop lounge dengan pemandangan kota dari ketinggian.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 7,
                'nama_gambar_hotel' => 'Sky Suite Room',
                'keterangan_gambar_hotel' => 'Kamar suite dengan jendela kaca dari lantai ke plafon.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // id_hotel = 8 - Atma Garden Resort
            [
                'id_hotel' => 8,
                'nama_gambar_hotel' => 'Taman Atma Garden',
                'keterangan_gambar_hotel' => 'Taman hijau dengan jalur pejalan kaki dan gazebo.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 8,
                'nama_gambar_hotel' => 'Kolam Keluarga Atma Garden',
                'keterangan_gambar_hotel' => 'Kolam renang keluarga dengan area bermain anak.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // id_hotel = 9 - Atma Hills Hotel
            [
                'id_hotel' => 9,
                'nama_gambar_hotel' => 'Eksterior Atma Hills',
                'keterangan_gambar_hotel' => 'Bangunan hotel di dataran tinggi dengan pemandangan kota malam hari.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 9,
                'nama_gambar_hotel' => 'Restoran Atma Hills',
                'keterangan_gambar_hotel' => 'Restoran dengan jendela besar dan pemandangan perbukitan.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // id_hotel = 10 - Atma Convention Hotel
            [
                'id_hotel' => 10,
                'nama_gambar_hotel' => 'Ballroom Atma Convention',
                'keterangan_gambar_hotel' => 'Ballroom luas untuk acara pernikahan dan konferensi.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 10,
                'nama_gambar_hotel' => 'Lobi Atma Convention',
                'keterangan_gambar_hotel' => 'Lobi dengan area tunggu yang nyaman bagi tamu acara.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // id_hotel = 11 - Atma Boutique Hotel
            [
                'id_hotel' => 11,
                'nama_gambar_hotel' => 'Eksterior Atma Boutique',
                'keterangan_gambar_hotel' => 'Eksterior hotel butik dengan desain modern minimalis.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 11,
                'nama_gambar_hotel' => 'Kamar Atma Boutique',
                'keterangan_gambar_hotel' => 'Kamar dengan dekorasi unik dan pencahayaan hangat.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // id_hotel = 12 - Atma Lakeview Resort
            [
                'id_hotel' => 12,
                'nama_gambar_hotel' => 'Danau Atma Lakeview',
                'keterangan_gambar_hotel' => 'Pemandangan danau dari area outdoor resort.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 12,
                'nama_gambar_hotel' => 'Kamar Lakeview',
                'keterangan_gambar_hotel' => 'Kamar dengan balkon langsung menghadap danau.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // id_hotel = 13 - Atma Airport Hotel
            [
                'id_hotel' => 13,
                'nama_gambar_hotel' => 'Fasad Atma Airport',
                'keterangan_gambar_hotel' => 'Fasad hotel dekat bandara dengan area drop-off luas.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 13,
                'nama_gambar_hotel' => 'Kamar Transit Atma Airport',
                'keterangan_gambar_hotel' => 'Kamar nyaman untuk transit singkat dengan fasilitas dasar lengkap.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],

            // id_hotel = 14 - Atma Eco Lodge
            [
                'id_hotel' => 14,
                'nama_gambar_hotel' => 'Kabin Atma Eco Lodge',
                'keterangan_gambar_hotel' => 'Kabin kayu ramah lingkungan di tengah area hijau.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_hotel' => 14,
                'nama_gambar_hotel' => 'Area Taman Atma Eco',
                'keterangan_gambar_hotel' => 'Area taman dengan pepohonan dan jalur walking trail.',
                'file_path_gambar_hotel' => Arr::random($filePool),
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);
    }
}
