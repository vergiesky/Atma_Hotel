  // buat tambah/hapus hotel wishlist
export async function toggleWishlistCommon({
  hotelId,
  existingWishlistId,
  createWishlistFn,
  deleteWishlistFn,
  onAdd,
  onRemove,
  alertError,
  toastSuccess,
  toastInfo,
  navigate,
}) {
  const token = localStorage.getItem("token");
  // kalau belum login arahin ke login dulu
  if (!token) {
    alertError("Harus login", "Masuk dulu untuk menyimpan wishlist.");
    navigate("/login");
    return;
  }

  // cek hotel sudah ada di wishlist atau belum
  // kalau ada di wishlist, maka hapus
  if (existingWishlistId) {
    try {
      await deleteWishlistFn(existingWishlistId); 
      if (onRemove) onRemove();
      toastInfo("Hotel dihapus dari wishlist");
    } catch (err) {
      console.error(err);
      alertError("Gagal", "Tidak bisa menghapus wishlist.");
    }
  } 
   // kalau tidak ada di wishlist, tambah
  else {
    try {
      const res = await createWishlistFn(hotelId);  // ambil id wishlist
      const newId = res?.data?.id_wishlist;
      if (onAdd) onAdd(newId || true);
      toastSuccess("Hotel ditambahkan ke wishlist");
    } catch (err) {
      console.error(err);
      alertError("Gagal", "Tidak bisa menambahkan wishlist.");
    }
  }
}