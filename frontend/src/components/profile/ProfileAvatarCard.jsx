import { Camera } from "lucide-react";

export default function ProfileAvatarCard({
  name,
  email,
  avatarUrl,
  hasPendingAvatar,
  loading,
  onAvatarChange,
  onRemoveSelected,
  onSaveAvatar,
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 flex flex-col items-center text-center max-w-4xl w-full mx-auto">
      <div className="relative group mb-4">
        <div className="w-28 h-28 rounded-full overflow-hidden bg-blue-600 flex items-center justify-center text-white text-4xl font-semibold ring-4 ring-blue-50 shadow-md">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          ) : (
            (name || "U")?.charAt(0).toUpperCase()
          )}
        </div>

        <label className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer rounded-full">
          <Camera className="w-6 h-6 text-white" />
          <input
            type="file"
            accept="image/*"
            onChange={onAvatarChange}
            className="hidden"
          />
        </label>
      </div>

      <h2 className="text-xl font-semibold text-gray-900 mb-1">{name}</h2>
      <p className="text-sm text-gray-500">{email}</p>

      <label className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer">
        Ganti foto profil
        <input
          type="file"
          accept="image/*"
          onChange={onAvatarChange}
          className="hidden"
        />
      </label>

      {hasPendingAvatar && (
        <div className="flex flex-col items-center gap-2 mt-3">
          <button
            type="button"
            onClick={onRemoveSelected}
            className="text-xs text-red-600 hover:text-red-700 flex items-center gap-1 transition-all duration-150 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-200 rounded-md cursor-pointer"
          >
            Hapus foto yang dipilih
          </button>
          <button
            type="button"
            onClick={onSaveAvatar}
            disabled={loading}
            className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg disabled:opacity-60 shadow-sm transition-all duration-150 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
          >
            <Camera className="w-4 h-4" />
            {loading ? "Menyimpan..." : "Simpan Foto"}
          </button>
        </div>
      )}
    </div>
  );
}
