<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ReviewSeeder extends Seeder
{
    public function run(): void
    {
        // reset data review agar seeding ulang tidak menumpuk
        DB::table('reviews')->delete();

        // mapping kamar -> hotel
        $kamarHotelMap = DB::table('kamars')->pluck('id_hotel', 'id_kamar');
        if ($kamarHotelMap->isEmpty()) {
            return;
        }

        // ambil pembayaran paid + reservasi + kamar
        $paidPayments = DB::table('pembayarans as p')
            ->join('reservasis as r', 'p.id_reservasi', '=', 'r.id_reservasi')
            ->leftJoin('rincian_reservasis as rr', 'rr.id_reservasi', '=', 'r.id_reservasi')
            ->select(
                'p.id_pembayaran',
                'p.tanggal_pembayaran',
                'r.id_user',
                'r.check_out',
                'rr.id_kamar'
            )
            ->where('p.status_pembayaran', 'paid')
            ->get()
            ->filter(function ($row) {
                return $row->id_pembayaran && $row->id_user && $row->id_kamar;
            })
            ->values();

        if ($paidPayments->isEmpty()) {
            return;
        }

        // tambahkan info hotel
        $paidWithHotel = $paidPayments->map(function ($row) use ($kamarHotelMap) {
            $row->id_hotel = $kamarHotelMap[$row->id_kamar] ?? null;
            return $row;
        })->filter(fn($row) => $row->id_hotel)->values();

        if ($paidWithHotel->isEmpty()) {
            return;
        }

        $comments = [
            'Pelayanan ramah, kamar bersih, lokasi strategis.',
            'Sarapannya enak, tapi parkir agak sempit.',
            'View bagus, cocok untuk liburan keluarga.',
            'WiFi kencang, kamar nyaman untuk kerja.',
            'AC dingin, kamar mandi bersih, overall puas.',
            'Harga sesuai fasilitas, staf sangat helpful.',
            'Check-in cepat, kasur empuk, recommended.',
        ];

        // kumpulkan gambar review yang tersedia
        $reviewImages = Storage::disk('public')->files('review_images');

        $reviews = [];
        $now = Carbon::now();

        // pastikan setiap hotel punya minimal 5 review
        $groupedByHotel = $paidWithHotel->groupBy('id_hotel');
        foreach ($groupedByHotel as $hotelId => $rows) {
            $targetCount = max(5, $rows->count());
            for ($i = 0; $i < $targetCount; $i++) {
                $row = $rows[$i % $rows->count()];
                $img = $this->pickRandomImage($reviewImages);
                $reviews[] = $this->buildReviewRow($row, $comments, $now, $img);
            }
        }

        DB::table('reviews')->insert($reviews);
    }

    private function buildReviewRow($row, array $comments, Carbon $now, ?string $imagePath = null): array
    {
        $rating = rand(35, 50) / 10; 
        // Review dikirim setelah checkout (minimal H+1, maksimal H+7)
        $baseDate = Carbon::parse($row->check_out ?? $row->tanggal_pembayaran ?? $now);
        $tanggalReview = $baseDate->copy()->addDays(rand(1, 7))->toDateString();

        return [
            'id_pembayaran' => $row->id_pembayaran,
            'id_user' => $row->id_user,
            'id_kamar' => $row->id_kamar,
            'komentar' => $comments[array_rand($comments)],
            'rating' => $rating,
            'file_path_review' => $imagePath,
            'tanggal_review' => $tanggalReview,
            'created_at' => $now,
            'updated_at' => $now,
        ];
    }

    private function pickRandomImage(array $files): ?string
    {
        if (empty($files)) {
            return null;
        }

        // hanya sebagian review yang punya foto
        $useImage = rand(0, 1) === 1;
        if (!$useImage) {
            return null;
        }

        return $files[array_rand($files)];
    }
}
