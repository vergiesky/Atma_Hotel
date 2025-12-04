import React from "react";

const baseInputClass =
  "w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition";

const Label = ({ text, required }) => (
  <label className="block text-sm font-medium text-gray-700">
    {text} {required && <span className="text-blue-600">*</span>}
  </label>
);

export function AdminInput({
  label,
  required,
  hint,
  className = "",
  ...props
}) {
  return (
    <div className="space-y-2">
      <Label text={label} required={required} />
      <input className={`${baseInputClass} ${className}`.trim()} {...props} />
      {hint && <p className="text-xs text-gray-500">{hint}</p>}
    </div>
  );
}

export function AdminSelect({
  label,
  required,
  hint,
  className = "",
  children,
  ...props
}) {
  return (
    <div className="space-y-2">
      <Label text={label} required={required} />
      <select className={`${baseInputClass} ${className}`.trim()} {...props}>
        {children}
      </select>
      {hint && <p className="text-xs text-gray-500">{hint}</p>}
    </div>
  );
}

export function AdminTextarea({
  label,
  required,
  hint,
  rows = 3,
  className = "",
  ...props
}) {
  return (
    <div className="space-y-2">
      <Label text={label} required={required} />
      <textarea
        rows={rows}
        className={`${baseInputClass} ${className}`.trim()}
        {...props}
      />
      {hint && <p className="text-xs text-gray-500">{hint}</p>}
    </div>
  );
}
