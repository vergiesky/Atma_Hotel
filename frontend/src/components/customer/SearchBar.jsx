import React from "react";
import { Search } from "lucide-react";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Cari...",
  className = "",
}) {
  return (
    <div
      className={`flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-sm ${className}`}
    >
      <Search className="w-4 h-4 text-slate-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="w-full text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
      />
    </div>
  );
}
