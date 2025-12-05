<?php

namespace Database\Seeders;

use Illuminate\Support\Arr;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class HotelSeeder extends Seeder
{
    public function run(): void
    {
        $now = now();

        DB::table('hotels')->insert([
            [ 
                'nama_hotel' => 'Atma Grand Hotel', 
                'kota' => 'Yogyakarta', 'alamat' => 'Jl. Malioboro No. 10, Yogyakarta', 
                'deskripsi' => 'Hotel pusat kota dengan akses mudah ke destinasi wisata.', 
                'rating_hotel' => 4.6, 
                'created_at' => $now, 
                'updated_at' => $now, 
            ],
            [ 
                'nama_hotel' => 'Atma Beach Resort', 
                'kota' => 'Bali', 
                'alamat' => 'Jl. Pantai Kuta No. 88, Badung', 
                'deskripsi' => 'Resor tepi pantai dengan pemandangan laut.', 
                'rating_hotel' => 4.8, 
                'created_at' => $now, 
                'updated_at' => $now, 
            ],
            [
                'nama_hotel' => 'Atma Mountain Lodge',
                'kota' => 'Bandung',
                'alamat' => 'Jl. Dago Atas No. 21, Bandung',
                'deskripsi' => 'Penginapan bernuansa pegunungan dengan udara sejuk dan pemandangan hijau.',
                'rating_hotel' => 4.5,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nama_hotel' => 'Atma City Hotel',
                'kota' => 'Jakarta',
                'alamat' => 'Jl. Sudirman No. 120, Jakarta Pusat',
                'deskripsi' => 'Hotel bisnis modern di pusat kota dengan akses mudah ke perkantoran.',
                'rating_hotel' => 4.3,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nama_hotel' => 'Atma Riverside Inn',
                'kota' => 'Yogyakarta',
                'alamat' => 'Jl. Kali Code No. 7, Yogyakarta',
                'deskripsi' => 'Hotel kecil yang nyaman di tepi sungai dengan suasana tenang.',
                'rating_hotel' => 4.2,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nama_hotel' => 'Atma Heritage Hotel',
                'kota' => 'Solo',
                'alamat' => 'Jl. Slamet Riyadi No. 55, Surakarta',
                'deskripsi' => 'Hotel bergaya klasik Jawa dekat dengan kawasan budaya dan keraton.',
                'rating_hotel' => 4.4,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nama_hotel' => 'Atma Sky Suites',
                'kota' => 'Jakarta',
                'alamat' => 'Jl. Gatot Subroto No. 15, Jakarta Selatan',
                'deskripsi' => 'Hotel dengan kamar suite dan pemandangan gedung pencakar langit.',
                'rating_hotel' => 4.7,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nama_hotel' => 'Atma Garden Resort',
                'kota' => 'Bogor',
                'alamat' => 'Jl. Puncak Raya No. 99, Bogor',
                'deskripsi' => 'Resor keluarga dengan taman luas dan fasilitas rekreasi alam.',
                'rating_hotel' => 4.6,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nama_hotel' => 'Atma Hills Hotel',
                'kota' => 'Malang',
                'alamat' => 'Jl. Ijen Nirwana No. 18, Malang',
                'deskripsi' => 'Hotel di kawasan dataran tinggi dengan udara sejuk dan pemandangan kota.',
                'rating_hotel' => 4.5,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nama_hotel' => 'Atma Convention Hotel',
                'kota' => 'Surabaya',
                'alamat' => 'Jl. Ahmad Yani No. 200, Surabaya',
                'deskripsi' => 'Hotel dengan ballroom besar dan fasilitas lengkap untuk acara dan konferensi.',
                'rating_hotel' => 4.4,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nama_hotel' => 'Atma Boutique Hotel',
                'kota' => 'Semarang',
                'alamat' => 'Jl. Pandanaran No. 35, Semarang',
                'deskripsi' => 'Hotel butik dengan desain modern dan suasana yang hangat.',
                'rating_hotel' => 4.3,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nama_hotel' => 'Atma Lakeview Resort',
                'kota' => 'Lombok',
                'alamat' => 'Jl. Danau Segara Anak No. 5, Lombok',
                'deskripsi' => 'Resor dengan pemandangan danau dan pegunungan yang memukau.',
                'rating_hotel' => 4.7,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nama_hotel' => 'Atma Airport Hotel',
                'kota' => 'Makassar',
                'alamat' => 'Jl. Bandara Sultan Hasanuddin No. 3, Maros',
                'deskripsi' => 'Hotel dekat bandara dengan layanan shuttle dan check-in cepat.',
                'rating_hotel' => 4.1,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nama_hotel' => 'Atma Eco Lodge',
                'kota' => 'Bali',
                'alamat' => 'Jl. Ubud Raya No. 27, Gianyar',
                'deskripsi' => 'Penginapan ramah lingkungan dikelilingi persawahan dan pepohonan.',
                'rating_hotel' => 4.6,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);
    }
}
