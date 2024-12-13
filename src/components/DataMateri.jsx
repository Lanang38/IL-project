import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Trash2, Edit3 } from "lucide-react";
import { AlertDelete } from "./Alert";

export default function DataMateri() {
  const navigate = useNavigate();
  const location = useLocation();

  // Data kategori yang dikirim dari ModulCard
  const selectedCategory = location.state?.selectedCategory;

  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);

  // Redirect jika kategori tidak ditemukan
  useEffect(() => {
    if (!selectedCategory) {
      navigate("/materi");
    }
  }, [selectedCategory, navigate]);

  // Fetch data modul dari API
  const fetchModules = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/api/v1/modul");
      if (response.data.success) {
        // Filter modul berdasarkan kategori ID
        setModules(
          response.data.data.filter(
            (module) => module.kategori_id === selectedCategory?.kategori_id
          )
        );
      } else {
        console.error("Tidak ada modul ditemukan.");
      }
    } catch (error) {
      console.error("Error saat mengambil data modul:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch ulang data setiap kali lokasi atau kategori berubah
    fetchModules();
  }, [selectedCategory, location]);

  const handleDelete = async (modulId) => {
    AlertDelete(async () => {
      try {
        const response = await axios.delete(
          `http://localhost:3000/api/v1/modul/${modulId}`
        );

        if (response.data.success) {
          console.log(`Modul dengan ID ${modulId} berhasil dihapus.`);
          setModules((prevModules) =>
            prevModules.filter((module) => module.modul_id !== modulId)
          );
        } else {
          console.error("Penghapusan modul gagal:", response.data.message);
        }
      } catch (error) {
        console.error("Error saat menghapus modul:", error);
      }
    });
  };

  const handleAddMateri = () => {
    navigate("/materi/tambahmateri", {
      state: { kategoriId: selectedCategory?.kategori_id },
    });
  };

  const handleEditMateri = (module) => {
    navigate("/materi/editmateri", {
      state: { modul: module }, 
    });
  };

  const handleBack = () => {
    navigate("/materi");
  };

  return (
    <div className="max-w-screen-lg w-full mx-auto p-8 rounded-lg">
      <h1 className="text-3xl font-semibold mb-6">Daftar Materi</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl mx-auto overflow-hidden break-words">
        <div className="flex flex-col items-center lg:flex-row lg:items-start justify-center lg:space-x-12 mb-4">
          <img
            src={selectedCategory?.gambar}
            alt={selectedCategory?.nama_kategori}
            className="w-62 h-40 rounded-lg pl-3 object-cover pt-3 mb-4 lg:mb-0"
          />
          <div className="flex-1 text-center pt-3 lg:text-left lg:pl-2">
            <h2 className="text-2xl font-semibold mb-2">
              {selectedCategory?.nama_kategori}
            </h2>
            <div className="w-full p-4 border rounded-lg resize-none break-words whitespace-normal max-w-full mx-auto">
              {selectedCategory?.penjelasan}
            </div>
          </div>
        </div>

        <div className="mt-3 mb-1">
          <div className="flex gap-2 flex-col lg:flex-row justify-center lg:justify-end">
            <button
              className="py-2 px-4 bg-green-500 text-white text-sm font-medium rounded-2xl hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              onClick={handleAddMateri}
            >
              Tambah Materi
            </button>
            <button
              className="py-2 px-4 bg-red-500 text-white text-sm font-medium rounded-2xl hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
              onClick={handleBack}
            >
              Kembali
            </button>
          </div>
        </div>

        {loading ? (
          <p className="text-center text-gray-500 mt-6">Loading...</p>
        ) : modules.length > 0 ? (
          <div className="bg-white rounded-lg shadow overflow-hidden overflow-x-auto mt-6">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="py-3 px-4 text-center font-semibold">Modul</th>
                  <th className="py-3 px-4 text-center font-semibold">Tanggal</th>
                  <th className="py-3 px-4 text-center font-semibold">Hapus</th>
                  <th className="py-3 px-4 text-center font-semibold">Edit</th>
                </tr>
              </thead>
              <tbody>
                {modules.map((module) => (
                  <tr key={module.modul_id} className="border-t">
                    <td className="py-3 px-4 text-center">{module.nama_modul}</td>
                    <td className="py-3 px-4 text-center">
                      {module.tanggal_modul
                        ? new Date(module.tanggal_modul).toLocaleDateString(
                            "id-ID"
                          )
                        : "Tanggal tidak tersedia"}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        className="text-red-500"
                        onClick={() => handleDelete(module.modul_id)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        className="text-blue-500"
                        onClick={() => handleEditMateri(module)}
                      >
                        <Edit3 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-6">Tidak ada modul.</p>
        )}
      </div>
    </div>
  );
}
