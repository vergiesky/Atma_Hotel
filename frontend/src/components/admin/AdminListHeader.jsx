import React from "react";
import { Search } from "lucide-react";

export default function AdminListHeader({
  title,
  subtitle,
  query,
  onQueryChange,
  onAdd,
  addLabel = "Tambah",
  searchPlaceholder = "Cari...",
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
        {subtitle && <p className="text-slate-500">{subtitle}</p>}
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange?.(e.target.value)}
            placeholder={searchPlaceholder}
            className="pl-9 pr-3 py-2 w-full sm:w-64 rounded-lg border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
          />
        </div>
        <button
          onClick={onAdd}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
        >
          <span className="text-lg leading-none">+</span> {addLabel}
        </button>
      </div>
    </div>
  );
}
