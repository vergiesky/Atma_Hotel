// ambil opsi lokasi unik dari daftar hotel, dengan "Semua Lokasi" di awal
export function getLocationOptions(hotels) {
  return [
    "Semua Lokasi", //ambil semua kota dari daftar hotel
    ...Array.from(
      new Set( // new set buat ambil yang unik (hapus duplikat)
        hotels
          .map((h) => (h.kota || "").trim()) // ambil semua kota dari tiap hotel
          .filter((val) => val && val.length > 0) // filter hanya kota yang valid (bukan string kosong)
      )
    ),
  ];
}

export default getLocationOptions;