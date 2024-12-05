import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AlertSimpan } from "./Alert";

const TambahKategori = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSubmit = async () => {
    // Validasi input
    if (!file || !title || !description) {
      alert("Semua data wajib diisi!");
      return;
    }

    // Buat FormData
    const formData = new FormData();
    formData.append("gambar", file); // file input

    formData.append("nama_kategori", title); // title input
    formData.append("penjelasan", description); // description input

    try {
      // Panggil API POST dengan Axios
      const response = await axios.post(
        "http://localhost:3000/api/v1/kategori",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Periksa respons API
      if (response.data.success) {
        AlertSimpan(); // Tampilkan alert sukses
        setTimeout(() => {
          navigate(-1); // Kembali ke halaman sebelumnya
        }, 1200);
      } else {
        alert("Gagal menyimpan data: " + response.data.message);
      }
    } catch (error) {
      console.error("Error saat menyimpan kategori:", error);
      alert("Terjadi kesalahan saat menyimpan kategori.");
    }
  };

  return (
    <div className="max-w-43 w-full mx-auto p-5 rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Tambah Kategori</h2>
      <div className="text-left p-4 border border-gray-300 rounded-lg bg-white">
        <p className="text-lg font-medium mb-2">Menambahkan Kategori</p>

        <label className="flex items-center justify-center w-full h-80 border-4 border-dashed border-gray-300 rounded-xl bg-gray-100 text-gray-500 cursor-pointer p-12 shadow-xl">
          <input type="file" onChange={handleFileChange} className="hidden" />
          <div className="text-center">
            {file ? (
              <p className="text-gray-700">{file.name}</p>
            ) : (
              <p className="flex flex-col items-center text-gray-500">
                <span className="text-3xl mb-2">📂</span>
                <span className="text-sm">Anda dapat seret dan lepas berkas di sini untuk menambahkan</span>
              </p>
            )}
          </div>
        </label>

        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Tambahkan Judul"
          className="w-full mt-8 p-2 text-gray-700 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 bg-gray-100 shadow-xl"
        />

        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Deskripsi Singkat"
          className="w-full mt-8 p-8 text-gray-700 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 bg-gray-100 shadow-xl"
        />

        <div className="flex gap-3 mt-8 mb-3">
          <button
            className="flex-1 py-3 px-4 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            onClick={handleCancel}
          >
            Batalkan
          </button>
          <button
            className="flex-1 py-3 px-4 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            onClick={handleSubmit}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default TambahKategori;