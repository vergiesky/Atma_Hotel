import React from "react";

export default function AdminLoadingState({ message = "Memuat data..." }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <p className="text-sm text-gray-600">{message}</p>
    </div>
  );
}
