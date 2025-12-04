import React from "react";

export default function ReviewImagePopup({ imageUrl, onClose }) {
  if (!imageUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative z-50 flex items-center justify-center">
        <div className="inline-block">
          <div className="flex justify-end mb-3">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 rounded-full bg-white/90 text-slate-700 text-sm font-semibold shadow hover:bg-white"
            >
              Tutup
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex items-center justify-center">
            <img
              src={imageUrl}
              alt="Review"
              className="max-h-[80vh] w-auto object-contain"
              onError={(e) => {
                e.currentTarget.src = "/images/hotel1_main.jpg";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
