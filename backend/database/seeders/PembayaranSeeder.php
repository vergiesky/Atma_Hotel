<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class PembayaranSeeder extends Seeder
{
    public function run(): void
    {
        // data pembayaran sudah diisi saat ReservasiSeeder berjalan
        if (DB::table('pembayarans')->count() >= 10) {
            return;
        }

        $reservasis = DB::table('reservasis')->get();
        if ($reservasis->isEmpty()) {
            return;
        }

        $now = Carbon::now();
        $metodePembayaran = ['Transfer Bank', 'Kartu Kredit', 'E-Wallet'];
        $payload = [];

        foreach ($reservasis as $reservasi) {
            $statusPembayaran = $reservasi->status_reservasi === 'Paid' ? 'paid' : 'pending';
            $lamaInap = max(1, Carbon::parse($reservasi->check_in)->diffInDays($reservasi->check_out));
            $tanggalPembayaran = $statusPembayaran === 'paid'
                ? Carbon::parse($reservasi->check_out)->subDays(rand(0, $lamaInap))->toDateString()
                : Carbon::parse($reservasi->check_in)->addDays(rand(0, $lamaInap))->toDateString();

            $payload[] = [
                'id_reservasi' => $reservasi->id_reservasi,
                'tanggal_pembayaran' => $tanggalPembayaran,
                'metode_pembayaran' => $metodePembayaran[array_rand($metodePembayaran)],
                'jumlah_bayar' => $reservasi->total_biaya,
                'status_pembayaran' => $statusPembayaran,
                'created_at' => $now,
                'updated_at' => $now,
            ];
        }

        DB::table('pembayarans')->insert($payload);
    }
}
