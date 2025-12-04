import { BASE_URL } from "../api";

// Ambil URL gambar kamar (fallback jika tidak ada)
export function getKamarImageUrl(kamar) {
  const firstImage = kamar?.gambar_kamars?.[0];
  const fallback = "/images/hotel1_main.jpg";
  if (!firstImage || !firstImage.file_path_gambar_kamar) return fallback;

  const path = (firstImage.file_path_gambar_kamar || "").trim();
  const isAbsolute = path.startsWith("http://") || path.startsWith("https://");
  return isAbsolute ? path : `${BASE_URL}/storage/${path}`;
}

export default getKamarImageUrl;