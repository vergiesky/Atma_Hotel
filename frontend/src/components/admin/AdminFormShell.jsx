import React from "react";

export default function AdminFormShell({
  title,
  subtitle,
  badge = "Admin Panel",
  maxWidthClass = "max-w-4xl",
  cardClassName = "",
  children,
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-900 py-10 px-4">
      <div className={`${maxWidthClass} mx-auto`}>
        <div className="mb-8 text-center md:text-left">
          {badge && (
            <p className="text-sm uppercase tracking-[0.25em] text-blue-500 mb-2 font-semibold">
              {badge}
            </p>
          )}
          {title && <h1 className="text-3xl font-bold text-gray-900">{title}</h1>}
          {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
        </div>

        <div
          className={`bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 ${cardClassName}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
