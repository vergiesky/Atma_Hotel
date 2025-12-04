import { BASE_URL } from "../api";

export function getHotelImageUrl(hotel) {
  const firstImage = hotel?.gambar_hotels?.[0];
  const fallback = "/images/hotel1_main.jpg";

  // kalau tidak ada path gambar di DB , maka ambil dari lokal
  if (!firstImage || !firstImage.file_path_gambar_hotel) return fallback;

  // kalau path sudah URL lengkap (http:// atau https://), maka bisa langsung dipakai
  const path = (firstImage.file_path_gambar_hotel || "").trim();
  const isAbsolute = path.startsWith("http://") || path.startsWith("https://");

  return isAbsolute ? path : `${BASE_URL}/storage/${path}`;
}

// ambil semua URL gambar hotel
export function getHotelImageUrls(hotel) {
  const imgs = hotel?.gambar_hotels || [];
  if (!imgs.length) return ["/images/hotel1_main.jpg"];

  return imgs.map((img) => {
    const path = (img?.file_path_gambar_hotel || "").trim();
    if (!path) return "/images/hotel1_main.jpg";
    const isAbsolute =
      path.startsWith("http://") || path.startsWith("https://");
    return isAbsolute ? path : `${BASE_URL}/storage/${path}`;
  });
}

export default getHotelImageUrl;