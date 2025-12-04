export default function ProfileSecurityForm({
  passwordLama,
  passwordBaru,
  passwordBaruKonfirmasi,
  onPasswordLamaChange,
  onPasswordBaruChange,
  onPasswordBaruKonfirmasiChange,
  onSubmit,
  onReset,
  loading,
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="mb-6 flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-gray-900">Keamanan Akun</h3>
        <span className="text-xs text-gray-500">
          Pastikan password kuat & unik
        </span>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Password Lama
          </label>
          <input
            type="password"
            value={passwordLama}
            onChange={(e) => onPasswordLamaChange(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Masukkan password lama"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Password Baru
            </label>
            <input
              type="password"
              value={passwordBaru}
              onChange={(e) => onPasswordBaruChange(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Masukkan password baru"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Konfirmasi Password Baru
            </label>
            <input
              type="password"
              value={passwordBaruKonfirmasi}
              onChange={(e) => onPasswordBaruKonfirmasiChange(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Konfirmasi password baru"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onReset}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 rounded-lg transition-all duration-150 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-200"
          >
            Batal
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-all duration-150 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
          >
            {loading ? "Menyimpan..." : "Ubah Password"}
          </button>
        </div>
      </form>
    </div>
  );
}
