import React from "react";
import { CheckCircle2 } from "lucide-react";
import { BASE_URL } from "../../api";

export default function FacilityDetailPopup({ facility, onClose }) {
  if (!facility) return null;
  const iconPath = facility?.icon?.file_path_icon;
  const iconUrl =
    iconPath && (iconPath.startsWith("http://") || iconPath.startsWith("https://"))
      ? iconPath
      : iconPath
      ? `${BASE_URL}/storage/${iconPath}`
      : null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-50 bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-md w-full p-6">
        <div className="flex items-start gap-3">
          {iconUrl ? (
            <img
              src={iconUrl}
              alt={facility.nama_fasilitas || "Icon"}
              className="w-10 h-10 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1" />
          )}
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-slate-900">
              {facility?.nama_fasilitas || "Fasilitas"}
            </h4>
            <p className="text-sm text-slate-600 mt-1">
              {facility?.keterangan_fasilitas_hotel || "Tidak ada keterangan fasilitas."}
            </p>
          </div>
          <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-600">
            x
          </button>
        </div>
      </div>
    </div>
  );
}
