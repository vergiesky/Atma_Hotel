import { Trash2 } from "lucide-react";

export default function ProfileDangerZone({ onDelete, loading }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-red-200 p-6">
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onDelete}
          disabled={loading}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-red-300 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-150 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-200 disabled:opacity-50"
        >
          <Trash2 className="w-4 h-4" />
          {loading ? "Menghapus..." : "Hapus Akun"}
        </button>
      </div>
    </div>
  );
}
