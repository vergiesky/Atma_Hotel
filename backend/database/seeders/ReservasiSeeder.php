<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class ReservasiSeeder extends Seeder
{
    public function run(): void
    {
        // bersihkan data supaya tidak dobel ketika seeding ulang
        DB::table('pembayarans')->delete();
        DB::table('rincian_reservasis')->delete();
        DB::table('reservasis')->delete();

        $customerIds = DB::table('users')->pluck('id_user');
        $roomPrices = DB::table('kamars')->pluck('harga', 'id_kamar');

        if ($customerIds->isEmpty() || $roomPrices->isEmpty()) {
            return;
        }

        $year = now()->year;
        $start = Carbon::create($year, 6, 1)->startOfDay();
        $latestCheckIn = Carbon::create($year, 12, 31)->subDays(5)->startOfDay();

        $statusOptions = ['Paid', 'Menunggu_Pembayaran'];
        $metodePembayaran = ['Transfer Bank', 'Kartu Kredit', 'E-Wallet'];
        $now = Carbon::now();

        for ($i = 0; $i < 10; $i++) {
            // tanggal acak antara Juni - Desember
            $checkIn = Carbon::createFromTimestamp(
                rand($start->timestamp, $latestCheckIn->timestamp)
            )->startOfDay();
            $lamaInap = rand(1, 4);
            $checkOut = $checkIn->copy()->addDays($lamaInap);

            $idKamar = $roomPrices->keys()->random();
            $hargaMalam = (int) ($roomPrices[$idKamar] ?? 500000);
            $jumlahKamar = rand(1, 3);
            $jumlahTamu = max(1, $jumlahKamar * rand(1, 2));
            $total = $hargaMalam * $lamaInap * $jumlahKamar;
            $statusReservasi = $statusOptions[array_rand($statusOptions)];

            // buat reservasi utama
            $reservasiId = DB::table('reservasis')->insertGetId([
                'id_user' => $customerIds->random(),
                'check_in' => $checkIn,
                'check_out' => $checkOut,
                'jumlah_tamu' => $jumlahTamu,
                'total_biaya' => $total,
                'status_reservasi' => $statusReservasi,
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            // rincian reservasi (1 kamar per reservasi)
            DB::table('rincian_reservasis')->insert([
                'id_reservasi' => $reservasiId,
                'id_kamar' => $idKamar,
                'jumlah_kamar' => $jumlahKamar,
                'sub_total' => $total,
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            // pembayaran mengikuti status reservasi
            $statusPembayaran = $statusReservasi === 'Paid' ? 'paid' : 'pending';
            $tanggalPembayaran = $statusPembayaran === 'paid'
                ? $checkOut->copy()->subDays(rand(0, $lamaInap))->toDateString()
                : $checkIn->copy()->addDays(rand(0, $lamaInap))->toDateString();

            DB::table('pembayarans')->insert([
                'id_reservasi' => $reservasiId,
                'tanggal_pembayaran' => $tanggalPembayaran,
                'metode_pembayaran' => $metodePembayaran[array_rand($metodePembayaran)],
                'jumlah_bayar' => $total,
                'status_pembayaran' => $statusPembayaran,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }
    }
}
