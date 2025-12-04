import { parseHarga } from "./ParseHarga";

export function getHargaMulaiHotel(hotel) {
  // mengambil array kamars dari hotel.kamars
  // hotel? adalah operator chaining  yang memungkinkan kita mengakses objek tanpa menyebabkan error jika properti tersebut null atau undefined
  const hargaList = (hotel?.kamars || [])
    // untuk setiap kamar (k), ambil harga dari beberapa properti kamar
    .map(
      (k) => parseHarga(k.harga) // kemudian masing-masing harga di parse
    )
    .filter((n) => n !== null && !Number.isNaN(n)); // filter yang bukan null/NaN kemudian jadilah hargaList

  // kalau ada isi di hargaList, ambil harga paling renda (Math.min)
  if (hargaList.length > 0) {
    // maksud ... tuh adalah spread operator, yang mana gunanya buat membuka/menyebarkan elemen-elemen array menjadi elemen individual
    // jadi contohnya kalau ada const hargaList = [500000, 750000, 600000, 450000];
    // Math.min(hargaList); salah NaN (karena menerima array)
    // Math.min(...hargaList); benar 450000
    // Sama dengan: Math.min(500000, 750000, 600000, 450000)
    return Math.min(...hargaList);
  }

  // kalau tidak ada data kamar/harga, kembalikan null (kolom harga tidak ada di tabel hotels)
  return null;
}

export default getHargaMulaiHotel;