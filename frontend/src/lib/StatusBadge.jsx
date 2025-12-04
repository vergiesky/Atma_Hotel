import React from "react";

export default function StatusBadge({ status }) {
  const normalized = (status || "").toLowerCase();
  const map = {
    paid: "bg-green-50 text-green-700 border border-green-100",
    menunggu_pembayaran: "bg-amber-50 text-amber-700 border border-amber-100",
    pending: "bg-amber-50 text-amber-700 border border-amber-100",
    failed: "bg-red-50 text-red-700 border border-red-100",
    cancelled: "bg-red-50 text-red-700 border border-red-100",
  };
  const cls =
    map[normalized] || "bg-slate-50 text-slate-700 border border-slate-200";
  const label = status
    ? status.charAt(0).toUpperCase() + status.slice(1)
    : "-";

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold inline-block ${cls}`}
    >
      {label}
    </span>
  );
}