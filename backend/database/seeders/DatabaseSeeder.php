<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            AdminSeeder::class,
            CustomerSeeder::class,
            IconSeeder::class,
            HotelSeeder::class,
            KamarSeeder::class,
            GambarHotelSeeder::class,
            GambarKamarSeeder::class,
            FasilitasHotelSeeder::class,
            FasilitasKamarSeeder::class,
            WishlistSeeder::class,
            ReservasiSeeder::class,
            RincianReservasiSeeder::class,
            PembayaranSeeder::class,
            ReviewSeeder::class,
        ]);
    }
}
