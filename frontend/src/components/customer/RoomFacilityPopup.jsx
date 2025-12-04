import React from "react";
import { CheckCircle2 } from "lucide-react";
import { getFasilitasKamarIcon } from "../../lib/FasilitasIcon";

export default function RoomFacilityPopup({ facility, onClose }) {
  if (!facility) return null;
  const iconUrl = getFasilitasKamarIcon(facility);
  const label =
    facility?.nama_fasilitas_kamar ||
    facility?.keterangan_fasilitas_kamar ||
    "Fasilitas";

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-50 bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-md w-full p-6">
        <div className="flex items-start gap-3">
          {iconUrl ? (
            <img
              src={iconUrl}
              alt={label}
              className="w-10 h-10 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1" />
          )}
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-slate-900">{label}</h4>
            <p className="text-sm text-slate-600 mt-1">
              {facility?.keterangan_fasilitas_kamar || "Tidak ada keterangan fasilitas."}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600"
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
}
