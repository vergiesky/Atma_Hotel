import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Star, Heart } from "lucide-react";

import {
  fetchWishlists,
  createWishlist,
  deleteWishlist,
} from "../../api/customer/apiWishlist";
import { fetchHotels as fetchHotelsApi } from "../../api/customer/apiHotels";
import { fetchReviews as fetchReviewsApi } from "../../api/customer/apiReviews";
import { alertError } from "../../lib/Alert";
import Navbar from "../../components/customer/Navbar";
import { toastSuccess, toastInfo } from "../../lib/Toast";
import CustomerPagination from "../../components/customer/CustomerPagination";
import CustomerFooter from "../../components/customer/CustomerFooter";
import CustomerInputSearch from "../../components/customer/CustomerInputSearch";
import HotelCard from "../../components/customer/HotelCard";
import { getHargaMulaiHotel } from "../../lib/HotelPrice";
import { getHotelRatingStats } from "../../lib/HotelRating";
import { getPagination } from "../../lib/Pagination";
import { filterHotels } from "../../lib/FilterHotels";
import { getLocationOptions } from "../../lib/LocationOptions";
import { toggleWishlistCommon } from "../../lib/WishlistToggle";

export default function CustomerDashboard() {
  const navigate = useNavigate(); // buat pindah halaman
  // hotels: variabel state (Re-render kalau statenya berubah) yang awlanya kosong
  // setHotels adalah fungsi untuk mengupdate state hotels
  // useState([]) adalah inisialisasi state dengan array kosong
  const [hotels, setHotels] = useState([]); // buat simpan data hotel yang diambil dair backend API
  const [loading, setLoading] = useState(true); // buat nampilin loading, akan diubah jadi false kalau datanya dah selesai diambil
  const [reviews, setReviews] = useState([]); // buat simpan data reviews

  // state search
  const [searchCity, setSearchCity] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Semua Lokasi");

  // wishlist buat nandai hotel mana yang ada di wislist user
  // make mapping gegara ada 2 id yang berbeda yang perlu disimpen { [id_hotel]: id_wishlist }
  const [wishlistMap, setWishlistMap] = useState({});
  const [page, setPage] = useState(1); // page sekarang
  const pageSize = 9; // banyak halaman per page

  // buat cek apakah hotel tertentu ada si wishlist user
  // buat icon hati
  const isInWishlist = (hotelId) => !!wishlistMap[hotelId];

  // buat ambil data wishlist user
  // async tuh buat handle operasi yang butuh waktu (API call)
  const fetchWishlist = async () => {
    // cek token
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const res = await fetchWishlists(); // API
      console.log("wishlist response", res);
      const data = res?.data || []; // ambil properti data dari res, kalau tidak ada, defaultnya array kosong []
      // transformasi data ke object map
      const map = {}; //inisialisasi
      data.forEach((item) => {
        // loop setiap item wishlist
        const hid = item.id_hotel; // ambil hotel id dari item
        if (hid) map[hid] = item.id_wishlist; // jika hotel id ada, tambahkan ke map { hotelId: wishlistId }
      });
      setWishlistMap(map); // update state dengan map baru, biar re-render component
    } catch (err) {
      console.error(err);
    }
  };

  // buat tambah/hapus hotel wishlist
  const toggleWishlist = async (hotelId) => {
    const existingId = wishlistMap[hotelId];
    await toggleWishlistCommon({
      hotelId,
      existingWishlistId: existingId,
      createWishlistFn: createWishlist,
      deleteWishlistFn: deleteWishlist,
      onAdd: (newId) => // buat fungsi updatenya
        setWishlistMap((prev) => ({ ...prev, [hotelId]: newId || true })),  // ...prev: simpan data lama, [hotelId]: newId || true: ambil data baru
      onRemove: () =>
        setWishlistMap((prev) => {
          const next = { ...prev }; // // copy state lama
          delete next[hotelId]; // // hapus dari copy
          return next; // return copy baru
        }),
      alertError,
      toastSuccess,
      toastInfo,
      navigate,
    });
  };

  // ambil data hotel
  // useEffect hook yang berjalan saat komponen pertama kali render
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await fetchHotelsApi(); // API
        const data = res?.data || []; // ambil res data
        // Array.isArray(data) adalah validasi bahwa data adalah array
        // kalau array, pakai data, kalau bukan, maka pakai array kosong
        setHotels(Array.isArray(data) ? data : []);
        console.log(res);
      } catch (err) {
        console.error(err);
        alertError(
          "Gagal memuat hotel",
          "Terjadi kesalahan saat mengambil data hotel."
        );
      } finally {
        setLoading(false);
      }
    };
    fetchHotels(); // ambil data hotel
    fetchWishlist(); // ambil data wishlist
  }, []);

  // ambil data reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetchReviewsApi(); // API
        setReviews(res?.data || []);
        console.log("reviews response", res);
      } catch (err) {
        console.error("Gagal memuat review", err);
      }
    };
    fetchReviews();
  }, []);

  // filter search
  const filteredHotels = filterHotels(hotels, searchCity, selectedLocation);

  // pagination hitungan
  const { totalPages, startIndex, endIndex } = getPagination(
    filteredHotels.length,
    page,
    pageSize
  );

  // kalau searchCity berubah, kembali ke halaman 1
  useEffect(() => {
    setPage(1);
  }, [searchCity]);

  // kalau totalPages berubah dan page sekarang terlalu besar, sesuaikan agar tidak di luar range
  useEffect(() => {
    setPage((prev) => Math.min(prev, totalPages));
  }, [totalPages]);

  // data untuk di tampilkan di page tertentu
  const start = (page - 1) * pageSize;
  // hanya hotel di halaman itu (misalnya page 2, index 9-17)
  const displayedHotels = filteredHotels.slice(start, start + pageSize);

  // lokasi untuk dropdown
  const locationOptions = getLocationOptions(hotels);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <CustomerInputSearch
        searchCity={searchCity}
        setSearchCity={setSearchCity}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        locationOptions={locationOptions}
      />

      {/* list hotel */}
      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-4 pt-10 pb-12">
          <p className="text-gray-600 mb-4">
            {loading
              ? "Memuat data hotel..."
              : `Menampilkan ${startIndex}-${endIndex} dari ${
                  filteredHotels.length
                } hotel${
                  searchCity ? ` berdasarkan pencarian "${searchCity}"` : ""
                }`}
          </p>

          {!loading && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedHotels.map((hotel) => {
                  const inWishlist = isInWishlist(hotel.id_hotel);

                  const harga = getHargaMulaiHotel(hotel);
                  const kamarIds = (hotel?.kamars || []).map((k) => k.id_kamar);
                  const filteredReviews = reviews.filter((r) =>
                    kamarIds.includes(r.id_kamar)
                  );
                  const { totalReviewCount, ratingDisplay } =
                    getHotelRatingStats(filteredReviews, hotel);

                  return (
                    <HotelCard
                      key={hotel.id_hotel}
                      hotel={hotel}
                      ratingDisplay={ratingDisplay}
                      ratingCount={totalReviewCount}
                      priceValue={harga}
                      inWishlist={inWishlist}
                      onToggleWishlist={toggleWishlist}
                      onViewDetail={() => navigate(`/hotel/${hotel.id_hotel}`)}
                      onReserve={() => {
                        const token = localStorage.getItem("token");
                        if (!token) {
                          alertError(
                            "Harus login",
                            "Masuk dulu untuk membuat reservasi."
                          );
                          navigate("/login");
                          return;
                        }
                        navigate(`/reservation/${hotel.id_hotel}`);
                      }}
                    />
                  );
                })}
              </div>

              {totalPages > 1 && (
                <CustomerPagination
                  page={page}
                  totalItems={filteredHotels.length}
                  pageSize={pageSize}
                  onChange={(p) => setPage(p)}
                />
              )}
            </>
          )}
        </section>
      </main>

      <CustomerFooter />
    </div>
  );
}
