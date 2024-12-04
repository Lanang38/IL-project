import React, { useState, useEffect } from "react";
import axios from "axios";
import CoachCard from "../components/CoachCard";
import Pagination from "../components/Pagination";
import { AlertSimpan } from "../components/Alert";

export default function Pembinaan() {
  const [photo, setPhoto] = useState(null); // URL preview foto
  const [photoFile, setPhotoFile] = useState(null); // File foto untuk dikirim ke server
  const [currentPage, setCurrentPage] = useState(1);
  const [coaches, setCoaches] = useState([]); // Data mentor
  const [categories, setCategories] = useState([]); // Data kategori
  const [selectedCategoryId, setSelectedCategoryId] = useState(""); // ID kategori yang dipilih

  const [form, setForm] = useState({
    nama_mentor: "",
    email_mentor: "",
    telepon_mentor: "",
    link_zoom: "",
    waktu_mulai: "",
    waktu_selesai: "",
  });

  const itemsPerPage = 4;
  const totalPages = Math.ceil(coaches.length / itemsPerPage);
  const currentItems = coaches.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Fetch data mentor dan kategori
  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/mentor");
        setCoaches(response.data.data);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/kategori"
        );
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchMentors();
    fetchCategories();
  }, []);

  // Handle perubahan form input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  // Handle perubahan kategori
  const handleCategoryChange = (event) => {
    setSelectedCategoryId(event.target.value);
  };

  // Handle upload foto
  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file)); // Preview gambar
      setPhotoFile(file); // Simpan file untuk dikirim ke server
    }
  };

  // Handle submit form
  const handleFormSubmit = async () => {
    try {
      const formData = new FormData(); // Gunakan FormData untuk menangani file
      formData.append("nama_mentor", form.nama_mentor);
      formData.append("email_mentor", form.email_mentor);
      formData.append("telepon_mentor", form.telepon_mentor);
      formData.append("link_zoom", form.link_zoom);
      formData.append("waktu_mulai", form.waktu_mulai);
      formData.append("waktu_selesai", form.waktu_selesai);
      formData.append("kategori_id", selectedCategoryId);
      if (photoFile) {
        formData.append("foto_mentor", photoFile); // Tambahkan file foto
      }

      await axios.post("http://localhost:3000/api/v1/mentor", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      AlertSimpan();
      setForm({
        nama_mentor: "",
        email_mentor: "",
        telepon_mentor: "",
        link_zoom: "",
        waktu_mulai: "",
        waktu_selesai: "",
      });
      setSelectedCategoryId("");
      setPhoto(null);
      setPhotoFile(null);

      // Refresh data mentor
      const response = await axios.get("http://localhost:3000/api/v1/mentor");
      setCoaches(response.data.data);
    } catch (error) {
      console.error("Error saving mentor:", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  console.log(coaches)

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-4">Pembina</h1>

      {/* Form Profil Mentor */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 space-y-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold text-center mb-2">Profil</h2>
            <label htmlFor="photo-upload" className="cursor-pointer">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                {photo ? (
                  <img
                    src={photo}
                    alt="Uploaded"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500 text-sm">Tambah Foto</span>
                )}
              </div>
            </label>
            <input
              type="file"
              id="photo-upload"
              className="hidden"
              accept="image/*"
              onChange={handlePhotoUpload}
            />
          </div>

          {/* Form Fields */}
          <div className="flex-grow grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-medium text-gray-600">
                Nama
              </label>
              <input
                type="text"
                name="nama_mentor"
                value={form.nama_mentor}
                onChange={handleInputChange}
                placeholder="Masukkan Nama"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-500"
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-medium text-gray-600">
                Link ZOOM
              </label>
              <input
                type="text"
                name="link_zoom"
                value={form.link_zoom}
                onChange={handleInputChange}
                placeholder="Masukan Link ZOOM"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-500"
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-medium text-gray-600">
                E-mail
              </label>
              <input
                type="email"
                name="email_mentor"
                value={form.email_mentor}
                onChange={handleInputChange}
                placeholder="Masukkan E-mail"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-500"
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-medium text-gray-600">
                Nomor Telepon
              </label>
              <input
                type="text"
                name="telepon_mentor"
                value={form.telepon_mentor}
                onChange={handleInputChange}
                placeholder="Masukan Nomor Telepon"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-500"
              />
            </div>

            <div className="col-span-2 md:col-span-1 grid grid-cols-2 gap-2">
              <input
                type="time"
                name="waktu_mulai"
                value={form.waktu_mulai}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-500 placeholder-gray-500"
              />
              <input
                type="time"
                name="waktu_selesai"
                value={form.waktu_selesai}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-500 placeholder-gray-500"
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-medium text-gray-600">
                Kategori Materi
              </label>
              <select
                value={selectedCategoryId}
                onChange={handleCategoryChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg text-sm text-gray-500 focus:outline-none focus:border-gray-500"
              >
                <option value="" disabled hidden>
                  Pilih Kategori
                </option>
                {categories.map((category) => (
                  <option
                    key={category.kategori_id}
                    value={category.kategori_id}
                  >
                    {category.nama_kategori}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="col-span-2 flex justify-center lg:justify-end">
          <button
            className="py-3 px-6 bg-green-500 text-white font-medium rounded-2xl hover:bg-green-600"
            onClick={handleFormSubmit}
          >
            Tambah Pembina
          </button>
        </div>
      </div>

      {/* Daftar Mentor */}
      <h2 className="text-2xl font-medium mb-4">Daftar Mentor</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentItems.map((coach) => (
          <CoachCard
            key={coach.email_mentor}
            coach={coach}
            refreshData={() => {
              const fetchMentors = async () => {
                try {
                  const response = await axios.get(
                    "http://localhost:3000/api/v1/mentor"
                  );
                  setCoaches(response.data.data);
                } catch (error) {
                  console.error("Error refreshing mentors:", error);
                }
              };
              fetchMentors();
            }}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
