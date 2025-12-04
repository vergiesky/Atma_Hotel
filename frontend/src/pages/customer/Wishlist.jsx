import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Star, Trash2, Search } from "lucide-react";

import {
  fetchWishlists,
  deleteWishlist as deleteWishlistApi,
} from "../../api/customer/apiWishlist";
import { fetchHotels as fetchHotelsApi } from "../../api/customer/apiHotels";
import { fetchReviews as fetchReviewsApi } from "../../api/customer/apiReviews";
import { alertError } from "../../lib/Alert";
import Navbar from "../../components/customer/Navbar";
import { toastInfo } from "../../lib/Toast";
import CustomerPagination from "../../components/customer/CustomerPagination";
import CustomerFooter from "../../components/customer/CustomerFooter";
import { getHargaMulaiHotel } from "../../lib/HotelPrice";
import { getHotelRatingStats } from "../../lib/HotelRating";
import { getPagination } from "../../lib/Pagination";
import HotelCard from "../../components/customer/HotelCard";
import SearchBar from "../../components/customer/SearchBar";
import { filterWishlistItems } from "../../lib/FilterWishlist";

export default function Wishlist() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const pageSize = 9;
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await fetchWishlists();
        const data = res?.data || [];
        console.log("Wishlist fetched:", data);
        setWishlist(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        alertError(
          "Gagal memuat wishlist",
          "Terjadi kesalahan saat mengambil data wishlist."
        );
      }
    };

    const fetchHotels = async () => {
      try {
        const res = await fetchHotelsApi();
        console.log("Hotels fetched:", res?.data);
        setHotels(Array.isArray(res?.data) ? res.data : []);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchReviews = async () => {
      try {
        const res = await fetchReviewsApi();
        console.log("Reviews fetched:", res?.data);
        setReviews(Array.isArray(res?.data) ? res.data : []);
      } catch (err) {
        console.error(err);
      }
    };

    const load = async () => {
      await Promise.all([fetchWishlist(), fetchHotels(), fetchReviews()]);
      setLoading(false);
    };

    load();
  }, []);

  const totalItems = wishlist.length;
  // clamp page tanpa setState supaya tidak memicu render berantai
  const { totalPages: calcTotalPages } = getPagination(totalItems, page, pageSize);
  const currentPage = Math.min(page, calcTotalPages);
  const { startIndex, endIndex } = getPagination(
    totalItems,
    currentPage,
    pageSize
  );

  //  search id_hotel, data hotel agar pencarian tidak error saat dipakai lebih awal
  const hotelMap = useMemo(() => {
    const map = {};
    hotels.forEach((h) => {
      if (h.id_hotel) map[h.id_hotel] = h;
    });
    return map;
  }, [hotels]);

  // buat mastiin setiap item wishlist punya objek hotel lengkap
  const getHotelFromItem = useCallback((item) => {
    // ambil relasi hotel yang sudah dikirim API
    const relHotel = item?.hotel || item?.kamar?.hotel || null;
    
    const idFromItem =
      relHotel?.id_hotel ||
      item?.id_hotel ||
      item?.kamar?.id_hotel ||
      item?.kamar?.hotel?.id_hotel;

    // kalau ada data lengkap di map, gabungkan supaya punya kamars/harga/gambar
    if (idFromItem && hotelMap[idFromItem]) {
      return { ...hotelMap[idFromItem], ...relHotel };
    }

    // kalau tidak ada di map, pakai relasi yang ada
    if (relHotel) return relHotel;

    return item;
  }, [hotelMap]);

  const filteredWishlist = useMemo(
    () => filterWishlistItems(wishlist, query, getHotelFromItem),
    [wishlist, query, getHotelFromItem]
  );

  const pagedWishlist = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredWishlist.slice(start, start + pageSize);
  }, [filteredWishlist, currentPage]);

  const handleQueryChange = (val) => {
    setQuery(val);
    setPage(1);
  };

  const handleRemove = async (item) => {
    try {
      await deleteWishlistApi(item.id_wishlist);
      setWishlist((prev) =>
        prev.filter((w) => w.id_wishlist !== item.id_wishlist)
      );
      toastInfo("Hotel dihapus dari wishlist");
    } catch (err) {
      console.error(err);
      alertError(
        "Gagal menghapus",
        "Terjadi kesalahan saat menghapus dari wishlist."
      );
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-4 pt-8 pb-12">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Hotel Favorit Saya
            </h1>
            <p className="text-slate-500 mt-2">
              {loading
                ? "Memuat wishlist..."
                : filteredWishlist.length === 0
                ? "Belum ada hotel dalam wishlist Anda."
                : `Menampilkan ${startIndex}-${endIndex} dari ${filteredWishlist.length} hotel dalam wishlist Anda`}
            </p>
          </div>

          <div className="mb-6">
            <SearchBar
              value={query}
              onChange={handleQueryChange}
              placeholder="Cari hotel berdasarkan nama atau lokasi..."
            />
          </div>

          {!loading && filteredWishlist.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {pagedWishlist.map((item) => {
                const hotel = getHotelFromItem(item) || {};
                const harga = getHargaMulaiHotel(hotel);
                const idHotel = hotel?.id_hotel || item?.id_hotel;
                const kamarIds = (hotel?.kamars || []).map((k) => k.id_kamar);
                const relatedReviews = kamarIds.length
                  ? reviews.filter((r) => kamarIds.includes(r.id_kamar))
                  : [];
                const { ratingDisplay, totalReviewCount } =
                  getHotelRatingStats(relatedReviews, hotel);
                const ratingText =
                  ratingDisplay !== undefined && ratingDisplay !== null
                    ? String(ratingDisplay).replace(/\.0$/, "")
                    : "-";

                return (
                  <HotelCard
                    key={item.id_wishlist || idHotel}
                    hotel={hotel}
                    ratingDisplay={ratingText || "-"}
                    ratingCount={totalReviewCount || 0}
                    priceValue={harga}
                    onRemove={() => handleRemove(item)}
                    onViewDetail={() => navigate(`/hotel/${idHotel}`)}
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
                      navigate(`/reservation/${idHotel}`);
                    }}
                  />
                );
              })}
            </div>
          )}

          {filteredWishlist.length > 0 && (
            <CustomerPagination
              page={currentPage}
              totalItems={filteredWishlist.length}
              pageSize={pageSize}
              onChange={(p) => setPage(p)}
            />
          )}
        </section>
      </main>
      <CustomerFooter />
    </div>
  );
}
