<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Arr;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $now = now();

        // ambil semua file di disk public folder profile_pictures
        $files = Storage::disk('public')->files('profile_pictures');

        // pilih acak jika ada, jika tidak kosongkan
        $randomProfile = !empty($files) ? Arr::random($files) : null;

        DB::table('users')->insert([
            [
                'nama' => 'Admin',
                'no_telp' => '081247662275',
                'email' => 'admin@gmail.com',
                'password' => Hash::make('admin123'),
                'tanggal_lahir' => '1990-01-01',
                'user_profile' => $randomProfile,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nama' => 'Pauline',
                'no_telp' => '089876543210',
                'email' => 'pauline@gmail.com',
                'password' => Hash::make('pauline123'),
                'tanggal_lahir' => '1995-05-05',
                'user_profile' => $randomProfile,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nama' => 'Tino',
                'no_telp' => '084297513684',
                'email' => 'tino@gmail.com',
                'password' => Hash::make('valen123'),
                'tanggal_lahir' => '1996-04-04',
                'user_profile' => $randomProfile,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nama' => 'Vergie',
                'no_telp' => '087539264187',
                'email' => 'vergie@gmail.com',
                'password' => Hash::make('vergie123'),
                'tanggal_lahir' => '1997-05-05',
                'user_profile' => $randomProfile,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);
    }
}
