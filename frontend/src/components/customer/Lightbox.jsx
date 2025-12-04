import React, { useState } from "react";

// Generic lightbox popup for image arrays
export default function Lightbox({ images, startIndex = 0, onClose }) {
  const [idx, setIdx] = useState(startIndex);
  if (!images?.length) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
      <button
        className="absolute inset-0"
        aria-label="Tutup"
        onClick={onClose}
      />
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center gap-4">
        <img
          src={images[idx]}
          alt="Hotel"
          className="max-h-[80vh] w-auto rounded-xl shadow-2xl object-contain bg-black"
          onError={(e) => {
            e.currentTarget.src = "/images/hotel1_main.jpg";
          }}
        />
        {images.length > 1 && (
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIdx(idx === 0 ? images.length - 1 : idx - 1)}
              className="w-10 h-10 rounded-full bg-white/80 text-slate-700 flex items-center justify-center hover:scale-105 transition"
            >
              ‹
            </button>
            <div className="flex items-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIdx(i)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    i === idx ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIdx(idx === images.length - 1 ? 0 : idx + 1)}
              className="w-10 h-10 rounded-full bg-white/80 text-slate-700 flex items-center justify-center hover:scale-105 transition"
            >
              ›
            </button>
          </div>
        )}
        <button
          type="button"
          onClick={onClose}
          className="text-white/80 hover:text-white text-sm"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}
