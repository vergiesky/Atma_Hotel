import React from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

export default function HotelGallery({
  images = [],
  currentIndex = 0,
  onPrev,
  onNext,
  onSelect,
  onOpenLightbox,
  isInWishlist = false,
  onToggleWishlist,
  alt = "Hotel image",
}) {
  const hasImages = images.length > 0;
  const currentImage = hasImages ? images[currentIndex] : "/images/hotel1_main.jpg";

  return (
    <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200 relative">
      <button type="button" className="block w-full" onClick={onOpenLightbox}>
        <img
          src={currentImage}
          alt={alt}
          className="w-full h-[360px] object-cover transition-all duration-300"
          onError={(e) => {
            e.currentTarget.src = "/images/hotel1_main.jpg";
          }}
        />
      </button>

      <button
        type="button"
        onClick={onToggleWishlist}
        className={`absolute top-4 right-4 w-11 h-11 rounded-full bg-white/90 backdrop-blur shadow-md flex items-center justify-center hover:scale-105 transition ${
          isInWishlist ? "text-blue-600" : "text-slate-500"
        }`}
        aria-label={isInWishlist ? "Hapus dari wishlist" : "Tambahkan ke wishlist"}
      >
        <Heart className={`w-6 h-6 ${isInWishlist ? "fill-blue-600" : "fill-transparent"}`} />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow hover:scale-105 transition"
            onClick={onPrev}
          >
            <ChevronLeft className="w-5 h-5 text-slate-700" />
          </button>
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow hover:scale-105 transition"
            onClick={onNext}
          >
            <ChevronRight className="w-5 h-5 text-slate-700" />
          </button>

          <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onSelect && onSelect(idx)}
                className={`w-2.5 h-2.5 rounded-full ${
                  idx === currentIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
