// CoachCard.js
import React from "react";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function SettingCard({ name, email, phone, imgUrl }) {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("");
  };

  return (
    <div className="relative bg-white rounded-xl shadow-lg p-5 flex flex-col items-center space-y-4 px-10">
      <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gray-200 mb-3 mt-3">
        <img
          src={imgUrl}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Informasi Profil */}
      <div className="text-center space-y-4">
        <div className="bg-blue-500 rounded-lg px-3 py-2 text-sm font-semibold text-white border-2 shadow-lg">
          Admin
        </div>
        <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-600 font-semibold border-2 shadow-lg">
          {name}
        </div>
        <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-600 font-semibold border-2 shadow-lg">
          {email}
        </div>
        <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-600 whitespace-pre-line font-semibold border-2 shadow-lg">
          {phone}
        </div>
      </div>
    </div>
  );
}

export default SettingCard;
