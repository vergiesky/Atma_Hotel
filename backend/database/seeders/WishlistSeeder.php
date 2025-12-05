<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class WishlistSeeder extends Seeder
{
    public function run(): void
    {
        $userId = DB::table('users')->where('email', 'customer@example.com')->value('id_user');
        $hotelId = DB::table('hotels')->where('nama_hotel', 'Atma Grand Hotel')->value('id_hotel');

        if (!$userId || !$hotelId) {
            return;
        }

        DB::table('wishlists')->insert([
            'id_user' => $userId,
            'id_hotel' => $hotelId,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
