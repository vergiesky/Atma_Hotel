// format angka ke Rupiah, default 0 jika tidak valid
export function formatRupiah(value) {
  const num = Number(value) || 0;
  return `Rp ${num.toLocaleString("id-ID")}`;
}

export default formatRupiah;