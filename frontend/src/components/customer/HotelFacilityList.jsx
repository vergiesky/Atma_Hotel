import React from "react";
import { CheckCircle2 } from "lucide-react";
import { BASE_URL } from "../../api";

export default function HotelFacilityList({ facilities = [], onSelect }) {
  if (!facilities.length) return null;

  const getIconUrl = (iconPath) => {
    if (!iconPath) return null;
    const isAbsolute = iconPath.startsWith("http://") || iconPath.startsWith("https://");
    return isAbsolute ? iconPath : `${BASE_URL}/storage/${iconPath}`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 mt-6 p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-3">Fasilitas</h3>
      <div className="flex flex-wrap gap-2">
        {facilities.map((f) => {
          const iconUrl = getIconUrl(f?.icon?.file_path_icon);
          return (
            <button
              type="button"
              key={f.id_fasilitas_hotel || f.nama_fasilitas}
              onClick={() => onSelect && onSelect(f)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-medium hover:bg-blue-100 transition"
            >
              {iconUrl ? (
                <img
                  src={iconUrl}
                  alt={f.nama_fasilitas || "icon"}
                  className="w-4 h-4 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : (
                <CheckCircle2 className="w-4 h-4" />
              )}
              {f.nama_fasilitas || f.keterangan_fasilitas_hotel || "Fasilitas"}
            </button>
          );
        })}
      </div>
    </div>
  );
}
