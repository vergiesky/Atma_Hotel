import React from "react";

export default function AdminActionBar({
  onSubmitLabel = "Simpan",
  savingLabel = "Menyimpan...",
  saving = false,
  onReset,
  onBack,
  submitClassName = "",
  resetClassName = "",
  backClassName = "",
}) {
  return (
    <div className="flex flex-wrap gap-3 pt-2">
      <button
        type="submit"
        disabled={saving}
        className={`inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-blue-600 transition disabled:opacity-60 ${submitClassName}`}
      >
        {saving ? savingLabel : onSubmitLabel}
      </button>
      <button
        type="button"
        onClick={onReset}
        className={`inline-flex items-center justify-center px-5 py-3 rounded-xl border-2 border-gray-200 text-gray-700 hover:bg-gray-50 transition ${resetClassName}`}
      >
        Reset
      </button>
      <button
        type="button"
        onClick={onBack}
        className={`inline-flex items-center justify-center px-5 py-3 rounded-xl border-2 border-gray-200 text-gray-700 hover:bg-gray-50 transition ${backClassName}`}
      >
        Kembali
      </button>
    </div>
  );
}
