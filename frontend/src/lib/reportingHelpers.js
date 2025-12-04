// helper untuk admin lihat laporan booking/Total pendapatan 
export function buildMonthlyRevenue(payments) {
  const now = new Date();
  const months = [];
  const map = {};

  for (let i = 5; i >= 0; i -= 1) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const key = `${d.getFullYear()}-${d.getMonth()}`;
    const label = d.toLocaleString("id-ID", { month: "short" });
    months.push({ key, label });
    map[key] = 0;
  }

  payments.forEach((item) => {
    if ((item.status_pembayaran || "").toLowerCase() !== "paid") return;
    const payDate = item.tanggal_pembayaran
      ? new Date(item.tanggal_pembayaran)
      : null;
    if (!payDate || Number.isNaN(payDate)) return;
    const key = `${payDate.getFullYear()}-${payDate.getMonth()}`;
    if (map[key] === undefined) return;
    map[key] += Number(item.jumlah_bayar) || 0;
  });

  const data = months.map((m) => ({
    month: m.label,
    revenue: map[m.key] || 0,
  }));
  const max = data.length ? Math.max(...data.map((d) => d.revenue)) : 0;
  const rangeLabel = `${months[0]?.label} - ${
    months[months.length - 1]?.label
  } ${now.getFullYear()}`;

  return { data, max, rangeLabel };
}

// buat detail hotel (kamar dan booking count) dari list
export function buildHotelDetail(hotelRow, payments) {
  const relatedPayments = payments.filter((p) => {
    const rincian = p.reservasi?.rincian_reservasis || [];
    const hotelData = rincian[0]?.kamar?.hotel;
    const idMatch =
      hotelRow.id && hotelData?.id_hotel
        ? Number(hotelData.id_hotel) === Number(hotelRow.id)
        : false;
    const nameMatch = (hotelData?.nama_hotel || "") === hotelRow.name;
    return idMatch || nameMatch;
  });

  const roomMap = {};
  relatedPayments.forEach((p) => {
    const rincian = p.reservasi?.rincian_reservasis || [];
    rincian.forEach((r) => {
      const roomName = r.kamar?.nama_kamar || "Kamar";
      if (!roomMap[roomName]) {
        roomMap[roomName] = { name: roomName, booking: 0 };
      }
      roomMap[roomName].booking += 1;
    });
  });

  const rooms = Object.values(roomMap).sort((a, b) => b.booking - a.booking);

  return {
    ...hotelRow,
    totalBooking: hotelRow.count,
    revenue: hotelRow.revenue,
    rooms,
  };
}

export default {
  buildMonthlyRevenue,
  buildHotelDetail,
};