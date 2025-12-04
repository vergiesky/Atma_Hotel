// Toggle for switching report sorting (booking vs revenue).
export default function SortToggle({ value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-slate-500">Urutkan:</span>
      <div className="rounded-lg bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 flex items-center gap-1">
        <button
          type="button"
          onClick={() => onChange("booking")}
          className={`px-2 py-1 rounded-md ${
            value === "booking"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-700 hover:text-slate-900"
          }`}
        >
          Jumlah booking
        </button>
        <button
          type="button"
          onClick={() => onChange("revenue")}
          className={`px-2 py-1 rounded-md ${
            value === "revenue"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-700 hover:text-slate-900"
          }`}
        >
          Revenue
        </button>
      </div>
    </div>
  );
}
