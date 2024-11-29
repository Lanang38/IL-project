import React from "react";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function CoachCard({ coach, refreshData }) {
  const navigate = useNavigate();

  // Navigasi ke halaman edit mentor
  const handleEditClick = () => {
    navigate(`/pembinaan/edit`, { state: { coach } }); // Mengirim data mentor sebagai state
  };

  // Fungsi untuk menampilkan alert konfirmasi penghapusan
  const handleDeleteClick = async () => {
    const result = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Data yang dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Tidak, batalkan!",
      reverseButtons: true,
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
    });

    if (result.isConfirmed) {
      try {
        // Memanggil API untuk menghapus mentor
        await axios.delete(
          `http://localhost:3000/api/v1/mentor/${coach.email_mentor}`
        );

        // Tampilkan pesan sukses
        Swal.fire("Dihapus!", "Data mentor telah berhasil dihapus.", "success");

        // Panggil fungsi refreshData untuk memperbarui UI
        if (refreshData) refreshData();
      } catch (error) {
        console.error(
          "Error deleting mentor:",
          error.response?.data || error.message
        );

        // Tampilkan pesan error
        Swal.fire(
          "Gagal",
          "Terjadi kesalahan saat menghapus data mentor.",
          "error"
        );
      }
    } else {
      Swal.fire("Dibatalkan", "Data mentor tetap aman.", "info");
    }
  };

  return (
    <div className="relative bg-white rounded-xl shadow-lg p-4 flex flex-col items-center space-y-4">
      {/* Tombol Hapus */}
      <button
        className="absolute top-2 right-2 text-red-500 text-lg"
        onClick={handleDeleteClick}
        aria-label="Hapus mentor"
      >
        <Trash2 />
      </button>

      {/* Foto Profil */}
      <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gray-200 mb-4 mt-4">
        <img
          src={coach.foto_mentor || "https://via.placeholder.com/150"}
          alt="Foto Mentor"
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
