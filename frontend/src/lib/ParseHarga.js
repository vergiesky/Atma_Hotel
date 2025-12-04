// buat parse harga dari berbagai format
export function parseHarga(value) {
  if (value === 0) return 0; // kalau value 0, langsung return 0
  if (!value && value !== 0) return null; // Kalau kosong (null, undefined, string kosong), return null.
  
  // kalau value number, cek lagi kalau NaN (not a number), langssung return null, kalau tidak return value
  if (typeof value === "number") {
    return Number.isNaN(value) ? null : value;
  }

  // kalau string, cek beberapa pola regex
  if (typeof value === "string") {
    const str = value.trim();

    // format seperti 500000.00 (decimal dot)
    if (/^\d+(\.\d+)?$/.test(str)) {
      const num = parseFloat(str);
      return Number.isNaN(num) ? null : num;
    }

    // format Indonesia: 500.000 atau 1.200.000,50
    if (/^\d{1,3}(\.\d{3})+(,\d+)?$/.test(str)) {
      const normalized = str.replace(/\./g, "").replace(",", ".");
      const num = parseFloat(normalized);
      return Number.isNaN(num) ? null : num;
    }

    // format dengan koma decimal: 500000,00
    if (/^\d+(,\d+)$/.test(str)) {
      const normalized = str.replace(",", ".");
      const num = parseFloat(normalized);
      return Number.isNaN(num) ? null : num;
    }

    // kalau tidak cocok pola, maka ambil semua digit (misal "Rp 500.000" -> "500000")
    const digits = str.replace(/\D+/g, "");
    if (!digits) return null;
    return Number(digits);
  }
  return null;
}

export default parseHarga;