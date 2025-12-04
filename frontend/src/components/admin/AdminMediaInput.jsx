import React from "react";

export default function AdminMediaInput({
  label = "File",
  required = false,
  accept = "image/*",
  onChange,
  currentFileName,
  previewUrl,
  previewAlt,
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-blue-600">*</span>}
      </label>
      <input
        type="file"
        accept={accept}
        onChange={onChange}
        className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
      />
      {currentFileName && (
        <p className="text-xs text-gray-500">Saat ini: {currentFileName}</p>
      )}
      {previewUrl && (
        <div className="mt-3">
          <p className="text-xs text-gray-600 mb-1">Preview:</p>
          <img
            src={previewUrl}
            alt={previewAlt || "Preview"}
            className="w-40 h-40 rounded-lg object-cover border border-slate-200"
          />
        </div>
      )}
    </div>
  );
}
