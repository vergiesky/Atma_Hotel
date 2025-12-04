import React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

export default function CustomerPagination({
  page,
  totalItems,
  pageSize = 9,
  onChange,
  className = "",
}) {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  if (totalPages <= 1) return null;

  const goTo = (target) => {
    if (target < 1 || target > totalPages) return;
    onChange(target);
  };

  const renderPageButton = (p) => (
    <button
      key={p}
      onClick={() => goTo(p)}
      className={`w-11 h-11 flex items-center justify-center rounded-2xl border text-sm font-semibold transition-all hover:-translate-y-[1px] hover:shadow-sm ${
        p === page
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
      }`}
    >
      {p}
    </button>
  );

  const renderDots = (key) => (
    <span
      key={key}
      className="w-11 h-11 flex items-center justify-center rounded-2xl text-slate-500 text-sm select-none border border-slate-200"
    >
      <MoreHorizontal className="w-5 h-5" />
    </span>
  );

  const renderPageItems = () => {
    const items = [];

    if (totalPages <= 5) {
      for (let p = 1; p <= totalPages; p += 1) {
        items.push(renderPageButton(p));
      }
      return items;
    }

    if (page <= 2) {
      items.push(renderPageButton(1));
      items.push(renderPageButton(2));
      items.push(renderPageButton(3));
      items.push(renderDots("dots-right"));
      items.push(renderPageButton(totalPages));
      return items;
    }

    if (page >= totalPages - 1) {
      items.push(renderPageButton(1));
      items.push(renderDots("dots-left"));
      items.push(renderPageButton(totalPages - 2));
      items.push(renderPageButton(totalPages - 1));
      items.push(renderPageButton(totalPages));
      return items;
    }

    items.push(renderPageButton(page - 1));
    items.push(renderPageButton(page));
    items.push(renderPageButton(page + 1));
    items.push(renderDots("dots-mid"));
    items.push(renderPageButton(totalPages));
    return items;
  };

  return (
    <div className={`flex items-center justify-center mt-10 ${className}`}>
      <nav className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-sm border border-slate-200">
        <button
          type="button"
          onClick={() => goTo(page - 1)}
          disabled={page === 1}
          className="w-11 h-11 flex items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500 disabled:text-slate-300 disabled:cursor-not-allowed hover:bg-slate-50 hover:-translate-y-[1px] hover:shadow-sm transition"
          aria-label="Sebelumnya"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {renderPageItems()}

        <button
          type="button"
          onClick={() => goTo(page + 1)}
          disabled={page === totalPages}
          className="w-11 h-11 flex items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500 disabled:text-slate-300 disabled:cursor-not-allowed hover:bg-slate-50 hover:-translate-y-[1px] hover:shadow-sm transition"
          aria-label="Berikutnya"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </nav>
    </div>
  );
}
