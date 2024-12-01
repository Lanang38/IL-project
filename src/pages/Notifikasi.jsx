import React, { useState, useEffect } from "react";
import axios from "axios";
import { AlertKirim } from "../components/Alert";

function NotificationCard({ title, color }) {
  const [formData, setFormData] = useState({
    judul: "",
    tanggal: "",
    kategori: "",
    namaPembina: "",
    jamMulai: "",
    jamSelesai: "",
  });

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3000/api/v1/notifikasi/kategori/mentor");
        setCategories(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Gagal memuat kategori", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    if (id === "kategori") {
      // Autocomplete mentor information when category is selected
      const selectedCategory = categories.find((cat) => cat.kategori_id === parseInt(value));
      if (selectedCategory) {
        setFormData((prevData) => ({
          ...prevData,
          namaPembina: selectedCategory.nama_mentor || "",
          jamMulai: selectedCategory.waktu_mulai || "",
          jamSelesai: selectedCategory.waktu_selesai || "",
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/v1/notifikasi", {
        judul_notifikasi: formData.judul,
        kategori_id: formData.kategori,
        tanggal: formData.tanggal,
      });
      AlertKirim("Notifikasi Terkirim", "Pemberitahuan telah berhasil dikirim.");
      setFormData({
        judul: "",
        tanggal: "",
        kategori: "",
        namaPembina: "",
        jamMulai: "",
        jamSelesai: "",
      });
    } catch (error) {
      console.error("Gagal mengirim notifikasi", error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl mx-auto">
      <div className={`text-white text-center py-4 rounded-t-lg bg-${color}-500`}>
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <div className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700" htmlFor="judul">
              Judul Notifikasi
            </label>
            <input
              type="text"
              id="judul"
              placeholder="Masukkan judul"
              value={formData.judul}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700" htmlFor="tanggal">
              Tanggal
            </label>
            <input
              type="date"
              id="tanggal"
              value={formData.tanggal}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700" htmlFor="kategori">
              Kategori
            </label>
            <select
              id="kategori"
              value={formData.kategori}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent"
            >
              <option value="" disabled hidden>
                Pilih Kategori
              </option>
              {loading ? (
                <option disabled>Memuat kategori...</option>
              ) : categories.length > 0 ? (
                categories.map((category) => (
                  <option key={category.kategori_id} value={category.kategori_id}>
                    {category.nama_kategori}
                  </option>
                ))
              ) : (
                <option disabled>Data kategori tidak tersedia</option>
              )}
            </select>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-semibold text-gray-700" htmlFor="namaPembina">
              Nama Pembina
            </label>
            <input
              type="text"
              id="namaPembina"
              value={formData.namaPembina}
              readOnly
              className="w-full mt-1 p-3 border rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700" htmlFor="jamMulai">
                Jam Mulai
              </label>
              <input
                type="text"
                id="jamMulai"
                value={formData.jamMulai}
                readOnly
                className="w-full mt-1 p-3 border rounded-lg bg-gray-100 cursor-not-allowed"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700" htmlFor="jamSelesai">
                Jam Selesai
              </label>
              <input
                type="text"
                id="jamSelesai"
                value={formData.jamSelesai}
                readOnly
                className="w-full mt-1 p-3 border rounded-lg bg-gray-100 cursor-not-allowed"
              />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className={`bg-${color}-500 text-white font-semibold px-20 py-3 rounded-lg text-sm transition duration-200 hover:bg-${color}-600`}
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function NotificationPage() {
  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <NotificationCard title="Notifikasi" color="green" />
    </div>
  );
}
