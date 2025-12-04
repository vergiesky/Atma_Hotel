import React from "react";
import { MapPin, Star } from "lucide-react";

export default function HotelHeaderCard({
  name,
  address,
  city,
  ratingDisplay,
  totalReviewCount,
  hargaMulai,
}) {
  const fullAddress = `${address || ""}${city ? `, ${city}` : ""}`;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 mt-6 p-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
      <div className="space-y-2 pr-12">
        <h1 className="text-2xl font-semibold text-slate-900">{name}</h1>
        <div className="flex items-center text-slate-600 text-sm gap-1">
          <MapPin className="w-4 h-4" />
          <span>{fullAddress}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-700">
          <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
          <span className="font-semibold">{ratingDisplay}</span>
          <span className="text-slate-500">({totalReviewCount} ulasan)</span>
        </div>
      </div>

      <div className="text-right">
        <p className="text-xs text-slate-500">Mulai dari</p>
        <p className="text-lg font-semibold text-blue-600">
          {hargaMulai !== null
            ? `Rp ${Number(hargaMulai).toLocaleString("id-ID")}`
            : "Rp -"}
        </p>
        <p className="text-xs text-slate-500">per malam</p>
      </div>
    </div>
  );
}
