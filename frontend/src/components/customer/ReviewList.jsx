import React from "react";
import { Star } from "lucide-react";
import { BASE_URL } from "../../api";

export default function ReviewList({
  reviews = [],
  visibleReviews = [],
  totalReviewCount = 0,
  ratingDisplay = "-",
  showAll = false,
  onToggleShowAll,
  onSelectImage,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 mt-6 p-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-slate-900">Review Tamu</h3>
        <p className="text-sm text-slate-500">
          {totalReviewCount} review
          {totalReviewCount === 1 ? "" : "s"}
          {ratingDisplay && ratingDisplay !== "-" ? ` - Rata-rata ${ratingDisplay}/5` : ""}
        </p>
      </div>

      {reviews.length === 0 ? (
        <p className="text-sm text-slate-500">Belum ada review untuk hotel ini.</p>
      ) : (
        <>
          <div className="space-y-3">
            {visibleReviews.map((rev) => (
              <div
                key={rev.id_review}
                className="rounded-xl border border-slate-200 p-4 flex flex-col gap-2"
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-900">
                    {rev.user?.nama || "Tamu"}
                  </div>
                  <div className="inline-flex items-center gap-1 text-sm text-amber-500 font-semibold">
                    <Star className="w-4 h-4 fill-amber-500" />
                    {Number(rev.rating || 0).toFixed(1)}
                  </div>
                </div>
                <div className="text-xs text-slate-500">
                  {rev.kamar?.nama_kamar ? `Kamar: ${rev.kamar.nama_kamar}` : ""}
                </div>
                {rev.file_path_review && (
                  <button
                    type="button"
                    onClick={() =>
                      onSelectImage &&
                      onSelectImage(
                        rev.file_path_review.startsWith("http")
                          ? rev.file_path_review
                          : `${BASE_URL}/storage/${rev.file_path_review}`
                      )
                    }
                    className="w-full max-w-xs rounded-lg border border-slate-200 overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  >
                    <img
                      src={
                        rev.file_path_review.startsWith("http")
                          ? rev.file_path_review
                          : `${BASE_URL}/storage/${rev.file_path_review}`
                      }
                      alt="Review"
                      className="w-full h-full object-cover"
                    />
                  </button>
                )}
                <p className="text-sm text-slate-700">{rev.komentar || "Tanpa komentar."}</p>
              </div>
            ))}
          </div>
          {reviews.length > 3 && (
            <div className="mt-3">
              <button
                type="button"
                onClick={onToggleShowAll}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                {showAll ? "Lihat lebih sedikit" : "Lihat lebih"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
