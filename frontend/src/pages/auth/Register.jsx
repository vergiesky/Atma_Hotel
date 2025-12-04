import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SignUpCustomer } from "../../api/apiAuth";
import { alertError, alertSuccess } from "../../lib/Alert";
import { passwordStrengthScore } from "../../lib/Password";
import { toastError } from "../../lib/Toast";
import { User } from "lucide-react";
import { Camera } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();

  //formData buat nyimpen data-data register yang awalnya kosong
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
    password_confirmation: "",
    no_telp: "",
    tanggal_lahir: "",
    user_profile: null,
  });

  // false yang berarti lagi ga proses apa-apa, set true saat lagi proses login agar tombol di disable dan text tombol berubah ke "memproses"
  const [loading, setLoading] = useState(false);

  // buat ngukur kekuatan password
  const [passwordScore, setPasswordScore] = useState(0);

  // preview foto profil
  const [avatarPreview, setAvatarPreview] = useState(null);

  // buat mencegah pop up bawaan html ga muncul
  const handleInvalid = (e) => {
    e.preventDefault();
  };

  // ambil name dan value dari input yang berubah
  const handleChange = (e) => {
    const { name, value } = e.target;
    // update formData, copy semua isi lama prev dan timpa yang field name dengan value baru
    setFormData((prev) => ({ ...prev, [name]: value }));
    // kalau yang diubah password, hitung kekuatan password dengan passwordStrengthScore(value), simpan ke passwordScore buat nanti dipakai untuk bar warna
    if (name === "password") {
      setPasswordScore(passwordStrengthScore(value));
    }
  };

  // handler buat upload foto profil
  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null; // ambil file pertama yang dipilih user
    setFormData((prev) => ({ ...prev, user_profile: file })); // simpen filenya ke formData.user_profile yang nanti dikirim ke backend
    // kalau ada file, buat URL sementara blob, lalu simpan di avatar preview buat dipakai di <img src={avatarPreview} />
    // Kalau tidak ada file, hapus preview
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setAvatarPreview(previewUrl);
    } else {
      setAvatarPreview(null);
    }
  };

  // bersihin URL preview saat komponen berubah/ganti foto profile
  useEffect(() => {
    return () => {
      if (avatarPreview) URL.revokeObjectURL(avatarPreview);
    };
  }, [avatarPreview]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // mencegah form reload halaman

    if (!formData.nama?.trim()) return toastError("Nama lengkap wajib diisi.");

    if (!formData.email?.trim()) return toastError("Email wajib diisi.");

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(formData.email))
      return toastError(
        "Format email tidak valid. Gunakan contoh: email@gmail.com."
      );

    if (!formData.no_telp?.trim())
      return toastError("No. telepon wajib diisi.");

    const phoneDigits = formData.no_telp.replace(/\D/g, ""); // replace(/\D/g, "") artinya buang semua karakter yang bukan angka
    if (phoneDigits.length < 12)
      return toastError("No. telepon minimal 12 digit.");

    if (!formData.tanggal_lahir?.trim())
      return toastError("Tanggal lahir wajib diisi.");

    if (!formData.password) return toastError("Password wajib diisi.");

    if (formData.password.length < 8)
      return toastError("Password minimal 8 karakter.");

    if (!formData.password_confirmation)
      return toastError("Konfirmasi password wajib diisi.");

    if (formData.password !== formData.password_confirmation) {
      toastError("Password dan konfirmasi tidak sama.");
      return;
    }

    setLoading(true);

    try {
      const payload = new FormData(); // buat ngirim data + file (user_profile) ke backend
      // ambil semua pasangan (key, value) dari formData.
      Object.entries(formData).forEach(([k, v]) => {
        if (v !== null && v !== undefined) payload.append(k, v); // payload.append(k, v) artinya tambah field satu per satu ke FormData (kecuali null / undefined).
      });

      // panggil API
      const res = await SignUpCustomer(payload); // res = JSON backend
      console.log(res);

      await alertSuccess("Registrasi berhasil", "Akun berhasil dibuat.");

      navigate("/login");
    } catch (err) {
      // ambil pesan error dari backend, sama seperti login
      const data = err?.response?.data;
      let backendMsg = data?.message;
      // kalau error validasi laravel (422), ada field "errors"
      if (!backendMsg && data?.errors) {
        backendMsg = Object.values(data.errors).flat().join("\n");
      }
      alertError("Registrasi gagal", backendMsg || "Terjadi kesalahan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // wrapper utama
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100 flex items-center justify-center px-4 py-12">
      {/* dekorasi elements buat gradasi biru gitu backgroundnya */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(96,165,250,0.06),transparent_50%)]" />
      <button
        type="button"
        onClick={() => navigate("/dashboard")}
        className="group absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-medium text-slate-700 shadow-md backdrop-blur border border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
      >
        {/* icon kembali ke dashboard */}
        <span className="inline-flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-white group-hover:text-blue-600">
          <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
        </span>
        <span className="hidden sm:inline">Kembali ke Dashboard</span>
      </button>
      {/* card utama */}
      <div className="relative w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8 space-y-4">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl">
              <img src="images/logo.png"></img>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Daftar ke Hotello
          </h1>
          <p className="text-sm text-gray-600">
            Buat akun baru untuk memulai perjalanan Anda
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* mirip kek login */}
          <form
            onSubmit={handleSubmit}
            onInvalid={handleInvalid}
            noValidate
            className="space-y-4"
          >
            <div className="flex flex-col items-center gap-2">
              {/* label jadi lingkaran profil */}
              <label className="group relative w-28 h-28 rounded-full bg-gray-100/90 border-2 border-gray-200 flex items-center justify-center cursor-pointer shadow-inner transition duration-200 hover:border-blue-500 hover:ring-2 hover:ring-blue-500 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
                {/* kalau avatarPreview ada, maka tampilkan foto. kalau tidak ada, maka tampilkan icon user yang diimport make react-lucide*/}
                {avatarPreview ? (
                  <img
                    src={avatarPreview}
                    alt="Preview foto profil"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-10 h-10 text-gray-400" />
                )}

                <input
                  type="file"
                  name="user_profile"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />

                {/* icon camera bulat di kanan bawah */}
                <div className="absolute bottom-1 right-1 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg border-2 border-white z-10 transition duration-200">
                  <Camera className="w-4 h-4" />
                </div>
              </label>
              <p className="text-xs text-gray-500">
                Upload foto profil (opsional)
              </p>
            </div>

            {/* nama */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Nama Lengkap <span className="text-blue-600">*</span>
              </label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Masukkan nama lengkap"
              />
            </div>

            {/* email */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-blue-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="email@gmail.com"
              />
            </div>

            {/* nomor telepon */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  No. Telepon <span className="text-blue-600">*</span>
                </label>
                <input
                  type="tel"
                  name="no_telp"
                  value={formData.no_telp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="08123456789"
                />
              </div>

              {/* tanggal lahir */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Tanggal Lahir <span className="text-blue-600">*</span>
                </label>
                <input
                  type="date"
                  name="tanggal_lahir"
                  value={formData.tanggal_lahir}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
            </div>

            {/* password */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Password <span className="text-blue-600">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Minimal 8 karakter"
              />
              <div className="space-y-1">
                <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
                  {/* buat warna bar */}
                  <div
                    className={`h-full rounded-full transition-all duration-200 ${
                      [
                        "bg-red-500",
                        "bg-orange-500",
                        "bg-yellow-500",
                        "bg-blue-500",
                        "bg-green-600",
                      ][Math.min(passwordScore, 4)] // index maksima 4 (sesuai panjang array)
                    }`}
                    style={{
                      width: `${(Math.min(passwordScore, 5) / 5) * 100}%`, // Lebar bar: (score/5) * 100%
                    }}
                  />
                </div>
                <p className="text-xs text-gray-600">
                  Kekuatan password:{" "}
                  <span className="font-semibold text-gray-800">
                    {
                      ["Sangat lemah", "Lemah", "Cukup", "Kuat", "Sangat kuat"][
                        Math.min(passwordScore, 4)
                      ]
                    }
                  </span>
                </p>
              </div>
            </div>

            {/* konfirmasi password */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Konfirmasi Password <span className="text-blue-600">*</span>
              </label>
              <input
                type="password"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Ulangi password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed mt-6"
            >
              {loading ? "Mendaftar..." : "Daftar"}
            </button>
          </form>

          {/* link ke page login */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Sudah punya akun?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:text-blue-700 transition"
            >
              Masuk di sini
            </Link>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Dengan mendaftar, Anda menyetujui{" "}
          <Link
            to="/terms"
            className="text-blue-600 underline hover:text-blue-700 transition"
          >
            Syarat & Ketentuan
          </Link>{" "}
          kami
        </p>
      </div>
    </div>
  );
}
