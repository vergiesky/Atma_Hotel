import React from "react";

export default function ReviewForm({
  eligiblePayments = [],
  reviewForm,
  setReviewForm,
  reviewImage,
  setReviewImage,
  onSubmit,
  formatDate,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 mt-6 p-6">
      <h4 className="text-sm font-semibold text-slate-900 mb-3">Tulis Review</h4>
      <form className="space-y-3" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <label className="text-sm text-slate-700 space-y-1">
            Pilih Pembayaran
            <select
              value={reviewForm.paymentId}
              onChange={(e) =>
                setReviewForm((prev) => ({
                  ...prev,
                  paymentId: e.target.value,
                  roomId: "",
                }))
              }
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            >
              <option value="">Pilih pembayaran</option>
              {eligiblePayments.map((p) => (
                <option key={p.id_pembayaran} value={p.id_pembayaran}>
                  #{p.id_pembayaran} · Checkout {formatDate(p.reservasi?.check_out)}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm text-slate-700 space-y-1">
            Pilih Kamar
            <select
              value={reviewForm.roomId}
              onChange={(e) =>
                setReviewForm((prev) => ({
                  ...prev,
                  roomId: e.target.value,
                }))
              }
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              disabled={!reviewForm.paymentId}
            >
              <option value="">Pilih kamar</option>
              {eligiblePayments
                .find((p) => `${p.id_pembayaran}` === `${reviewForm.paymentId}`)
                ?.reservasi?.rincian_reservasis?.map((r) => (
                  <option key={r.id_rincian_reservasi} value={r.id_kamar}>
                    {r.kamar?.nama_kamar || `Kamar ${r.id_kamar}`}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <label className="text-sm text-slate-700 space-y-1">
            Upload Foto (opsional)
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setReviewImage(e.target.files?.[0] || null)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 bg-white"
            />
          </label>
          <label className="text-sm text-slate-700 space-y-1">
            Rating (0-5)
            <input
              type="number"
              min="0"
              max="5"
              step="0.1"
              value={reviewForm.rating}
              onChange={(e) =>
                setReviewForm((prev) => ({
                  ...prev,
                  rating: e.target.value,
                }))
              }
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
          </label>
        </div>
        <div className="grid grid-cols-1">
          <label className="text-sm text-slate-700 space-y-1">
            Komentar
            <textarea
              value={reviewForm.komentar}
              onChange={(e) =>
                setReviewForm((prev) => ({
                  ...prev,
                  komentar: e.target.value,
                }))
              }
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              placeholder="Opsional"
              rows={4}
            />
          </label>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
          >
            Kirim Review
          </button>
        </div>
      </form>
    </div>
  );
}
