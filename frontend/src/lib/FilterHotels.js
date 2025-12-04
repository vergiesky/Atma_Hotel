// filter hotel berdasarkan nama dan lokasi
export function filterHotels(hotels, searchCity, selectedLocation) {
  return hotels.filter((hotel) => {
    // q adalah kata kunci dari input search (cari nama hotel saja)
    const q = searchCity.trim().toLowerCase();
    // serach by nama hotel
    const matchesSearch =
      !q || (hotel.nama_hotel || "").toLowerCase().includes(q);

    // kalau dropdown "Semua Lokasi", maka semua match
    // kalau bukan, hanya hotel yang kotanya sama persis dengan selectedLocation yang ditampilkan
    const matchesLocation =
      selectedLocation === "Semua Lokasi" ||
      (hotel.kota || "").toLowerCase() === selectedLocation.toLowerCase(); // || "" buat arahin ke string kosong kalau hotel.kota tidak ada untuk menghindari error

    return matchesSearch && matchesLocation;
  });
}

export default filterHotels;