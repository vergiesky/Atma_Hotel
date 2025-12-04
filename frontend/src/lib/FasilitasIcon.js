import { BASE_URL } from "../api";

// ambil URL icon fasilitas kamar
export function getFasilitasKamarIcon(fasilitas) {
  const path = fasilitas?.icon?.file_path_icon || "";
  if (!path) return null;
  const isAbsolute = path.startsWith("http://") || path.startsWith("https://");
  return isAbsolute ? path : `${BASE_URL}/storage/${path}`;
}

export default getFasilitasKamarIcon;