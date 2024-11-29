import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { AlertEdit } from "../components/Alert";

function EditPage() {
  const { state } = useLocation(); // Mendapatkan data mentor dari navigasi
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nama_mentor: "",
    email_mentor: "",
    telepon_mentor: "",
    kategori: "",
    waktu_mulai: "",
    waktu_selesai: "",
    link_zoom: "",
  });

  const [categories, setCategories] = useState([]); // State untuk kategori
  const [selectedCategoryId, setSelectedCategoryId] = useState(""); // State untuk kategori yang dipilih
  const [selectedFile, setSelectedFile] = useState(null); // State untuk foto yang dipilih

  // Mengambil data kategori dari server
  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/kategori");
      setCategories(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Mengatur data mentor pada form saat halaman dimuat
  useEffect(() => {
    if (state?.coach) {
      setForm({
        nama_mentor: state.coach.nama_mentor || "",
        email_mentor: state.coach.email_mentor || "",
        telepon_mentor: state.coach.telepon_mentor || "",
        kategori: state.coach.kategori || "",
        waktu_mulai: state.coach.waktu_mulai || "",
        waktu_selesai: state.coach.waktu_selesai || "",
        link_zoom: state.coach.link_zoom || "",
      });
      setSelectedCategoryId(state.coach.kategori || ""); // Set kategori yang dipilih
    }
  }, [state]);

  // Mengambil data kategori saat halaman dimuat
  useEffect(() => {
    fetchCategories();
  }, []);

  // Menangani perubahan input form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  // Menangani perubahan kategori
  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setSelectedCategoryId(value);
    setForm({ ...form, kategori: value });
  };

  // Menangani perubahan foto
  const handleAddPhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  // Menghapus foto yang sudah dipilih
  const handleDeletePhoto = () => {
    setSelectedFile(null);
  };

  // Menyimpan perubahan data mentor
  const handleSave = async () => {
    try {
      const updatedData = {
        ...form,
        kategori: selectedCategoryId, // Mengirimkan kategori yang dipilih
        foto_mentor: selectedFile ? selectedFile.name : state.coach.foto_mentor, // Mengirimkan nama file foto
      };

      await axios.put(`http://localhost:3000/api/v1/mentor/${form.email_mentor}`, updatedData);

      AlertEdit("Data telah disimpan", "Perubahan berhasil disimpan.");
      navigate(-1); // Kembali ke halaman sebelumnya
    } catch (error) {
      console.error("Error updating data:", error.response?.data || error.message);
    }
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-6 self-start">Edit Pembina</h2>
      <div className="w-full max-w-4xl px-0 flex flex-col items-center">
        <div className="p-6 bg-white rounded-lg mt-4 shadow-lg text-black w-full">
          <div className="flex flex-col sm:flex-row items-center space-x-4 px-6 mb-6">
            <img
              src={
                selectedFile
                  ? URL.createObjectURL(selectedFile)
                  : "https://via.placeholder.com/80"
              }
              alt="Profile"
              className="w-20 h-20 rounded-full border-4 border-gray-300"
            />
            <div className="px-2 text-center sm:text-left">
              <h3 className="text-lg font-semibold">{form.nama_mentor}</h3>
              <p>{form.email_mentor}</p>
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
                  onClick={() => document.querySelector('input[type="file"]').click()}
                >
                  Tambah Foto
                </button>
              </label>
              <button
                type="button"
                className="w-1/2 px-4 py-2 font-semibold text-white bg-red-500 rounded hover:bg-red-600"
                onClick={handleDeletePhoto}
              >
                Hapus Foto
              </button>
            </div>
          </div>

          <form className="space-y-4 p-6 mb-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <label className="w-full sm:w-1/3 font-medium">Nama Lengkap</label>
              <input
                type="text"
                name="nama_mentor"
                value={form.nama_mentor}
                onChange={handleInputChange}
                className="w-full sm:w-2/3 px-4 py-2 bg-white rounded text-gray-800 focus:outline-none border border-gray-300"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <label className="w-full sm:w-1/3 font-medium">Email</label>
              <input
                type="email"
                name="email_mentor"
                value={form.email_mentor}
                readOnly
                className="w-full sm:w-2/3 px-4 py-2 bg-gray-100 rounded text-gray-400 focus:outline-none border border-gray-300"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <label className="w-full sm:w-1/3 font-medium">Nomor Telepon</label>
              <input
                type="tel"
                name="telepon_mentor"
                value={form.telepon_mentor}
                onChange={handleInputChange}
                className="w-full sm:w-2/3 px-4 py-2 bg-white rounded text-gray-800 focus:outline-none border border-gray-300"
              />
            </div>

            {/* Input Jam Mulai dan Jam Selesai Sebelah */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
              <label className="w-full sm:w-1/3 font-medium">Jadwal</label>
              <div className="flex w-full sm:w-2/3 space-x-4">
                <input
                  type="time"
                  name="waktu_mulai"
                  value={form.waktu_mulai}
                  onChange={handleInputChange}
                  className="w-1/2 px-4 py-2 bg-white rounded text-gray-800 focus:outline-none border border-gray-300"
                />
                <input
                  type="time"
                  name="waktu_selesai"
                  value={form.waktu_selesai}
                  onChange={handleInputChange}
                  className="w-1/2 px-4 py-2 bg-white rounded text-gray-800 focus:outline-none border border-gray-300"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <label className="w-full sm:w-1/3 font-medium">Kategori</label>
              <select
                name="kategori"
                value={selectedCategoryId}
                onChange={handleCategoryChange}
                className="w-full sm:w-2/3 px-4 py-2 mt-1 border border-gray-300 rounded-lg text-sm text-gray-500 focus:outline-none focus:border-gray-500"
              >
                <option value="" disabled hidden>
                  Pilih Kategori
                </option>
                {categories.map((category) => (
                  <option key={category.kategori_id} value={category.kategori_id}>
                    {category.nama_kategori}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <label className="w-full sm:w-1/3 font-medium">Jadwal Zoom</label>
              <textarea
                name="link_zoom"
                value={form.link_zoom}
                onChange={handleInputChange}
                className="w-full sm:w-2/3 px-4 py-2 bg-white rounded text-gray-800 focus:outline-none border border-gray-300 resize-none"
                rows="3"
              />
            </div>
          </form>
        </div>

        <div className="w-full flex justify-center sm:justify-start space-x-4 mt-7">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-full sm:w-36 px-4 py-2 font-semibold text-white bg-red-500 rounded hover:bg-red-600"
          >
            Kembali
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="w-full sm:w-36 px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditPage;
