// filter wishlist berdasarkan query (nama/kota)
export function filterWishlistItems(wishlist = [], query = "", resolveHotel) {
  const q = (query || "").trim().toLowerCase();
  if (!q) return wishlist;

  return wishlist.filter((item) => {
    const hotel = (resolveHotel && resolveHotel(item)) || item || {};
    const nama = hotel.nama_hotel || "";
    const kota = hotel.kota || "";

    return nama.toLowerCase().includes(q) || kota.toLowerCase().includes(q);
  });
}

export default filterWishlistItems;