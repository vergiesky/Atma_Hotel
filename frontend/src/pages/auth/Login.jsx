import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { SignIn } from "../../api/apiAuth";
import { alertError, alertSuccess } from "../../lib/Alert";
import { toastError } from "../../lib/Toast";
import { ArrowLeft } from "lucide-react";

// make export default biar bisa import tanpa make { }
export default function Login() {
  const navigate = useNavigate(); // buat mindahin user ke route lain
  const [formData, setFormData] = useState({ email: "", password: "" }); // formData objek buat nyimpen email sama password yang awalnya kosong
  const [loading, setLoading] = useState(false); // false yang berarti lagi ga proses apa-apa, set true saat lagi proses login agar tombol di disable dan text tombol berubah ke "memproses"

  // buat mencegah pop up bawaan html ga muncul
  const handleInvalid = (e) => {
    e.preventDefault();
  };

  // ini dipanggil tiap kali user ngetik di input
  const handleChange = (e) => {
    const { name, value } = e.target; // e.target tuh inputan yang diubah (eamail atau password)
    setFormData((prev) => ({ ...prev, [name]: value })); // name nilainya nanti email atau password tergantung inputan
  };

  // validasi submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // biar form ga melakukan submit bawaan browser (reload halamanan)

    // kalau email kosong, tampilkan error handling make toast (trim buat hapus spasi di awal dan akhir)
    if (!formData.email?.trim()) return toastError("Email wajib diisi.");

    // buat cek format email
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(formData.email))
      return toastError(
        "Format email tidak valid. Gunakan contoh: email@gmail.com."
      );

    // cek password ga boleh kosong
    if (!formData.password) return toastError("Password wajib diisi.");

    // cek password minimal 8 karakter
    if (formData.password.length < 8)
      return toastError("Password minimal 8 karakter.");

    setLoading(true); // disable tombol dan ubah teks jadi "memproses"

    try {
      // manggil API login ke backend dengan email dan password
      const res = await SignIn({
        email: formData.email,
        password: formData.password,
      });
      console.log(res);

      // simpan token dan user di local storage
      if (res.token) localStorage.setItem("token", res.token);
      if (res.detail) localStorage.setItem("user", JSON.stringify(res.detail)); // make stringify karena local storage hanya nyimpen teks maka harus ubah ke string dulu

      // simpan abilities dan role
      // abilities buat permission
      // role buat roting cepat , misal navigate(role === "admin" ? "/admin/dashboard" : "/dashboard");
      // bisa juga buat ngerouting make abilites, tapi lebih ribet
      if (res.abilities) {
        localStorage.setItem("abilities", JSON.stringify(res.abilities));
        const role = res.abilities.includes("admin") ? "admin" : "customer";
        localStorage.setItem("role", role);
      }

      // alert sukses
      await alertSuccess("Login berhasil", "Selamat datang kembali");

      // redirect berdasarkan role
      const role = localStorage.getItem("role");
      navigate(role === "admin" ? "/admin/dashboard" : "/dashboard");

      // error handling (handleSubmit), kalau API gagal throw error
    } catch (err) {
      // pesan error dari backend
      const backendMsg = err?.response?.data?.message;
      alertError("Login gagal", backendMsg || "Terjadi kesalahan");
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
          <h1 className="text-3xl font-bold text-gray-900">Masuk ke Hotello</h1>
          <p className="text-sm text-gray-600">
            Selamat datang kembali! Silakan masuk untuk melanjutkan.
          </p>
        </div>

        {/* card Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* onSubmit={handleSubmit} saat user klik tombol submit atau enter */}
          {/* onInvalid={handleInvalid} kalau ada input invalid (HTML5), block error handling bawaan*/}
          {/* noValidate mematikan validasi bawaan browser */}
          {/* email */}
          <form
            onSubmit={handleSubmit}
            onInvalid={handleInvalid}
            noValidate
            className="space-y-5"
          >
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-blue-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email} // nampilin nilai email dari state sebagai nilai input
                onChange={handleChange} // setiap user mengetik, nilai formData di update
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="email@gmail.com"
                autoComplete="email"
              />
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
                placeholder="Masukkan password"
                autoComplete="current-password"
              />
            </div>

            {/* tombol submit */}
            <button
              type="submit"
              disabled={loading} // kalau loading === true, tombol tidak bisa diklik
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {/* true memproses, false masuk */}
              {loading ? "Memproses..." : "Masuk"}
            </button>
          </form>

          {/* link ke halaman register */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Belum punya akun?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:text-blue-700 transition"
            >
              Daftar di sini
            </Link>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Dengan masuk, Anda menyetujui{" "}
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
