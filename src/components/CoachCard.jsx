// src/components/CoachCard.js

import { Trash2 } from "lucide-react";
import React from "react";

function CoachCard({ name, email, phone, schedule, imgUrl }) {
  return (
    <div className="relative bg-white rounded-xl shadow-lg p-4 flex flex-col items-center space-y-4">
      {/* Icon Hapus */}
      <button className="absolute top-2 right-2 text-red-500 text-lg">
        <Trash2 />
      </button>

      {/* Foto Profil */}
      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 mb-4">
        <img
          src={imgUrl}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Informasi Profil */}
      <div className="text-center space-y-4">
        <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm font-semibold text-gray-700">
          {name}
        </div>
        <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-600">
          {email}
        </div>
        <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-600">
          {phone}
        </div>
        <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-600 whitespace-pre-line">
          {schedule}
        </div>
      </div>

      {/* Tombol Edit */}
      <button className="w-full mt-8 px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg text-sm">
        Edit
      </button>
    </div>
  );
}

export default CoachCard;
