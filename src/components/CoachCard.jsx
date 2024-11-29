import React from "react";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AlertDelete } from "./Alert"; // Pastikan AlertDelete sudah benar
import axios from "axios";

function CoachCard({ coach, refreshData }) {
  const navigate = useNavigate();

  // Navigasi ke halaman edit dengan data mentor
  const handleEditClick = () => {
    navigate(`/pembinaan/edit`, { state: { coach } }); // Mengirim data mentor sebagai state
  };

  // Fungsi untuk menghapus mentor
  const handleDeleteClick = async () => {
    try {
        // Memastikan email mentor tersedia
        if (!coach.email_mentor) {
            console.error("Email mentor tidak tersedia.");
            return;
        }

        console.log("Memulai proses konfirmasi...");
        const confirmed = await AlertDelete();

        if (confirmed) {
            console.log("Konfirmasi diterima, memulai penghapusan...");
            const response = await axios.delete(`http://localhost:3000/api/v1/mentor/${coach.email_mentor}`);

            // Log response dari API untuk debugging
            console.log("Data berhasil dihapus:", response.data);

            // Panggil fungsi refresh data jika tersedia
            if (refreshData) {
                console.log("Memanggil fungsi refreshData...");
                refreshData();
            }
        } else {
            console.log("Penghapusan dibatalkan oleh pengguna.");
        }
    } catch (error) {
        // Log error jika ada masalah
        console.error("Error saat menghapus data:", error.response?.data || error.message);
    }
};

  return (
    <div className="relative bg-white rounded-xl shadow-lg p-4 flex flex-col items-center space-y-4">
      {/* Tombol Hapus */}
      <button
        className="absolute top-2 right-2 text-red-500 text-lg"
        onClick={handleDeleteClick} // Pastikan fungsi ini dipanggil
      >
        <Trash2 />
      </button>

      {/* Foto Profil */}
      <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gray-200 mb-4 mt-4">
        <img
          src={coach.foto_mentor || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Informasi Profil */}
      <div className="text-center space-y-4">
        <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm font-semibold text-gray-700">
          {coach.nama_mentor || "Nama Tidak Tersedia"}
        </div>
        <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-600">
          {coach.email_mentor || "Email Tidak Tersedia"}
        </div>
        <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-600">
          {coach.telepon_mentor || "Telepon Tidak Tersedia"}
        </div>
        <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-600">
          {coach.link_zoom || "Link Zoom Tidak Tersedia"}
        </div>

        {/* Tombol Edit */}
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
