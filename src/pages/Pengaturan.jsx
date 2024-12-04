import React, { useState, useEffect } from "react";
import Navbar from "../components/NavbarSetting";
import Membership from "../components/MembershipCard";
import { AlertEdit } from "../components/Alert";
import axios from "axios";

export default function Pengaturan() {
  const [activePage, setActivePage] = useState("Profile");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // Untuk menampilkan preview gambar
  const [adminData, setAdminData] = useState({
    nama_admin: "",
    nama_panggilan_admin: "",
    email_admin: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    telepon_admin: "",
    alamat: "",
  });

  // Fungsi untuk mengambil data admin dari backend
  useEffect(() => {
  const fetchAdminData = async () => {
    try {
      // Pastikan adminData.email_admin sudah terisi sebelum mengirim permintaan
      const email = adminData.email_admin || "cek@gmail.com"; 
      const response = await axios.get(`http://localhost:3000/api/v1/admin/${email }`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });
      setAdminData(response.data.data);
    } catch (error) {
      console.error("Gagal mengambil data admin:", error);
    }
  };

  fetchAdminData();
}, [adminData.email_admin]); // Menambahkan email_admin sebagai dependensi


  // Fungsi untuk menangani penambahan foto
  const handleAddPhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set preview gambar
      };
      reader.readAsDataURL(file);
      console.log("Foto ditambahkan:", file.name);
    }
  };

  // Fungsi untuk menghapus foto
  const handleRemovePhoto = () => {
    setSelectedFile(null);
    setImagePreview(null);
    console.log("Foto dihapus");
  };

  // Fungsi untuk menyimpan data ke backend
  const handleSave = async () => {
    try {
      const formData = new FormData();
      Object.keys(adminData).forEach((key) => {
        formData.append(key, adminData[key]);
      });
      if (selectedFile) formData.append("foto_pr", selectedFile);

      const response = await axios.put(
        `http://localhost:3000/api/v1/admin/${adminData.email_admin}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        }
      );

      AlertEdit("Berhasil!", response.data.msg);
    } catch (error) {
      console.error("Gagal menyimpan data:", error);
      AlertEdit("Gagal!", "Terjadi kesalahan saat menyimpan data.");
    }
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6">Pengaturan</h2>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex justify-center p-4 sm:p-2">
        {activePage === "Profile" ? (
          <div className="w-full max-w-4xl px-0">
            {/* Profile Section */}
            <div className="p-6 bg-white rounded-lg mt-4 shadow-lg text-black">
              <div className="flex flex-col sm:flex-row items-center space-x-4 px-6 mb-6">
              <img
                  src={imagePreview || "https://via.placeholder.com/80"} // Menampilkan preview foto atau placeholder
                  alt="Profile"
                  className="w-20 h-20 rounded-full border-4 border-gray-300"
                />
                <div className="px-2 text-center sm:text-left">
                  <h3 className="text-lg font-semibold">{adminData.nama_admin}</h3>
                  <p>{adminData.email_admin}</p>
                </div>
                <div className="flex w-full sm:w-96 space-x-2 mt-2 sm:mt-0">
                  <label className="w-1/2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAddPhoto}
                      className="hidden"
                    />
                    <button
                      type="button"
                      className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
                      onClick={() =>
                        document.querySelector('input[type="file"]').click()
                      }
                    >
                      Tambah Foto
                    </button>
                  </label>
                  <button
                    type="button"
                    className="w-1/2 px-4 py-2 font-semibold text-white bg-red-500 rounded hover:bg-red-600"
                    onClick={handleRemovePhoto} // Memanggil fungsi untuk menghapus foto
                  >
                    Hapus Foto
                  </button>
                </div>
              </div>

              {/* Form Fields */}
              <form className="space-y-4 p-6 mb-4">
                {/* Nama Lengkap */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <label className="w-full sm:w-1/3 font-medium text-black">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    value={adminData.nama_admin}
                    onChange={(e) =>
                      setAdminData((prev) => ({
                        ...prev,
                        nama_admin: e.target.value,
                      }))
                    }
                    className="w-full sm:w-2/3 px-4 py-2 bg-white rounded text-gray-800 focus:outline-none border border-gray-300"
                  />
                </div>
                {/* Nama Panggilan */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <label className="w-full sm:w-1/3 font-medium text-black">
                    Nama Panggilan
                  </label>
                  <input
                    type="text"
                    value={adminData.nama_panggilan_admin}
                    onChange={(e) =>
                      setAdminData((prev) => ({
                        ...prev,
                        nama_panggilan_admin: e.target.value,
                      }))
                    }
                    className="w-full sm:w-2/3 px-4 py-2 bg-white rounded text-gray-800 focus:outline-none border border-gray-300"
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <label className="w-full sm:w-1/3 font-medium text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    value={adminData.email_admin}
                    onChange={(e) =>
                      setAdminData((prev) => ({
                        ...prev,
                        email_admin: e.target.value, // Perbarui email di state
                      }))
                    }
                    className="w-full sm:w-2/3 px-4 py-2 bg-white rounded text-gray-400 focus:outline-none border border-gray-300"
                  />
                </div>
                {/* Tempat Lahir */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <label className="w-full sm:w-1/3 font-medium text-black">
                    Tempat Lahir
                  </label>
                  <input
                    type="text"
                    value={adminData.tempat_lahir}
                    onChange={(e) =>
                      setAdminData((prev) => ({
                        ...prev,
                        tempat_lahir: e.target.value,
                      }))
                    }
                    className="w-full sm:w-2/3 px-4 py-2 bg-white rounded text-gray-800 focus:outline-none border border-gray-300"
                  />
                </div>
                {/* Tanggal Lahir */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <label className="w-full sm:w-1/3 font-medium text-black">
                    Tanggal Lahir
                  </label>
                  <input
                    type="date"
                    value={adminData.tanggal_lahir}
                    onChange={(e) =>
                      setAdminData((prev) => ({
                        ...prev,
                        tanggal_lahir: e.target.value,
                      }))
                    }
                    className="w-full sm:w-2/3 px-4 py-2 bg-white rounded text-gray-800 focus:outline-none border border-gray-300"
                  />
                </div>
                {/* No. Telp */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <label className="w-full sm:w-1/3 font-medium text-black">
                    No. Telp
                  </label>
                  <input
                    type="tel"
                    value={adminData.telepon_admin}
                    onChange={(e) =>
                      setAdminData((prev) => ({
                        ...prev,
                        telepon_admin: e.target.value,
                      }))
                    }
                    className="w-full sm:w-2/3 px-4 py-2 bg-white rounded text-gray-800 focus:outline-none border border-gray-300"
                  />
                </div>
                {/* Alamat */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <label className="w-full sm:w-1/3 font-medium text-black">
                    Alamat
                  </label>
                  <textarea
                    value={adminData.alamat}
                    onChange={(e) =>
                      setAdminData((prev) => ({
                        ...prev,
                        alamat: e.target.value,
                      }))
                    }
                    className="w-full sm:w-2/3 px-4 py-2 bg-white rounded text-gray-800 focus:outline-none border border-gray-300"
                  />
                </div>
                {/* Tombol Simpan */}
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                  >
                    Simpan Perubahan
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <Membership />
        )}
      </div>
    </div>
  );
}
