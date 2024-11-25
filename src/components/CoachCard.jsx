import React from "react";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AlertDelete } from "./Alert";

function CoachCard({ id, name, email, phone, schedule, imgUrl, onRefresh }) {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/pembinaan/edit/${id}`); // Navigasi ke halaman edit dengan ID
  };

  const handleDeleteClick = () => {
    AlertDelete().then(async (result) => {
      if (result.isConfirmed) {
        try {
          await apiClient.delete(`/coaches/${id}`);
          console.log("Item deleted");
          onRefresh(); // Refresh data setelah penghapusan
        } catch (error) {
          console.error("Error deleting coach:", error);
        }
      }
    });
  };

  return (
    <div className="relative bg-white rounded-xl shadow-lg p-4 flex flex-col items-center space-y-4">
      <button
        className="absolute top-2 right-2 text-red-500 text-lg"
        onClick={handleDeleteClick}
      >
        <Trash2 />
      </button>

      <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gray-200 mb-4 mt-4">
        <img src={imgUrl} alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Profile Information */}
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
        <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-600 whitespace-pre-line h-16">
          {schedule}
        </div>

        <button
          onClick={handleEditClick}
          className="w-full mt-8 px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg text-sm"
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default CoachCard;
