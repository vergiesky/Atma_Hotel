// hitung selisih malam antara check-in dan check-out
export function diffNights(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 0;
  const inDate = new Date(checkIn);
  const outDate = new Date(checkOut);
  if (Number.isNaN(inDate.getTime()) || Number.isNaN(outDate.getTime())) {
    return 0;
  }
  const diffMs = outDate.getTime() - inDate.getTime();
  const nights = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  return nights > 0 ? nights : 0;
}

export default diffNights;
