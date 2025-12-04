import React from "react";
import { MapPin, Star, Heart, Trash2 } from "lucide-react";
import { getHotelImageUrl } from "../../lib/HotelImage";

export default function HotelCard({
  hotel,
  ratingDisplay = "-",
  ratingCount = 0,
  priceValue = null,
  onViewDetail,
  onReserve,
  inWishlist = false,
  onToggleWishlist,
  onRemove,
}) {
  const imageUrl = getHotelImageUrl(hotel);
  const alamatLengkap =
    (hotel?.alamat || "").trim() + (hotel?.kota ? `, ${hotel.kota}` : "");
  const hargaFormatted =
    priceValue !== null && priceValue !== undefined
      ? `Rp ${Number(priceValue).toLocaleString("id-ID")}`
      : "Rp -";

  return (
    <div className="bg-white rounded-3xl shadow-[0_12px_35px_rgba(15,23,42,0.08)] border border-slate-100 overflow-hidden hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition h-full flex flex-col">
      <div className="relative h-48 bg-gray-100">
        <img
          src={imageUrl}
          alt={hotel?.nama_hotel}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "/images/hotel1_main.jpg";
          }}
        />

        {onToggleWishlist && (
          <button
            type="button"
            onClick={() => onToggleWishlist(hotel?.id_hotel)}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:scale-105 transition"
            aria-label={inWishlist ? "Hapus dari wishlist" : "Tambah ke wishlist"}
          >
            <Heart
              className={`w-5 h-5 ${
                inWishlist ? "text-blue-600 fill-blue-600" : "text-slate-500"
              }`}
            />
          </button>
        )}

        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-red-50 transition"
            aria-label="Hapus dari wishlist"
          >
            <Trash2 className="w-5 h-5 text-red-500" />
          </button>
        )}
      </div>

      <div className="p-6 flex flex-col h-full">
        <h3 className="font-semibold text-[17px] text-slate-900 mb-1">
          {hotel?.nama_hotel || "Nama hotel"}
        </h3>

        <div className="flex items-center text-slate-600 text-sm mb-2">
          <MapPin className="w-4 h-4 mr-1 text-slate-500" />
          <span>{alamatLengkap || "Alamat tidak tersedia"}</span>
        </div>

        <div className="flex items-center gap-1 mb-2">
          <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
          <span className="text-sm font-medium text-slate-900">
            {ratingDisplay}
          </span>
          <span className="text-xs text-slate-500 ml-1">
            ({ratingCount} ulasan)
          </span>
        </div>

        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {hotel?.deskripsi ||
            "Hotel nyaman dengan fasilitas lengkap untuk perjalanan Anda."}
        </p>

        <div className="mb-4">
          <p className="text-xs text-slate-500 mb-1">Mulai dari</p>
          <p className="text-sm font-semibold text-blue-600">{hargaFormatted}</p>
        </div>

        <div className="mt-auto flex gap-3 pt-2">
          <button
            onClick={onViewDetail}
            className="flex-1 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-sm font-medium hover:bg-slate-200 transition"
          >
            Lihat Detail
          </button>

          <button
            className="flex-1 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition"
            onClick={onReserve}
          >
            Pesan
          </button>
        </div>
      </div>
    </div>
  );
}
