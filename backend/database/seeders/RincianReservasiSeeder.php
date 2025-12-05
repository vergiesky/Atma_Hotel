<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class RincianReservasiSeeder extends Seeder
{
    public function run(): void
    {
        // sudah diisi oleh ReservasiSeeder terbaru
        if (DB::table('rincian_reservasis')->count() >= 10) {
            return;
        }

        $reservasis = DB::table('reservasis')->get();
        $kamarPrices = DB::table('kamars')->pluck('harga_per_malam', 'id_kamar');

        if ($reservasis->isEmpty() || $kamarPrices->isEmpty()) {
            return;
        }

        $now = Carbon::now();
        $payload = [];

        foreach ($reservasis as $reservasi) {
            $roomId = $kamarPrices->keys()->random();
            $harga = (int) ($kamarPrices[$roomId] ?? 500000);
            $jumlahKamar = rand(1, 3);
            $lamaInap = max(1, Carbon::parse($reservasi->check_in)->diffInDays($reservasi->check_out));
            $subTotal = $harga * $jumlahKamar * $lamaInap;

            $payload[] = [
                'id_reservasi' => $reservasi->id_reservasi,
                'id_kamar' => $roomId,
                'jumlah_kamar' => $jumlahKamar,
                'sub_total' => $subTotal,
                'created_at' => $now,
                'updated_at' => $now,
            ];
        }

        if (!empty($payload)) {
            DB::table('rincian_reservasis')->insert($payload);
        }
    }
}
