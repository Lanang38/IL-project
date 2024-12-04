import React, { useEffect, useState } from "react";
import axios from "axios";
import { Trash2, ArrowRight, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AlertDelete } from "./Alert";

function ModulCard() {
  const navigate = useNavigate();
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fungsi untuk memuat data kategori
  const fetchModules = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/kategori");
      if (response.data.success) {
        setModules(response.data.data);
      } else {
        console.error("Tidak ada kategori ditemukan.");
      }
    } catch (error) {
      console.error("Error saat mengambil kategori:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchModules();
  }, []);

  // Fungsi untuk menghapus kategori
  const handleDelete = async (kategoriId) => {
    AlertDelete(async () => {
      try {
        // Panggil API DELETE dengan kategori_id
        const response = await axios.delete(
          `http://localhost:3000/api/v1/kategori/${kategoriId}`
        );

        if (response.data.success) {
          console.log(`Kategori dengan ID ${kategoriId} berhasil dihapus.`);

          // Hapus kategori yang dihapus dari state modules
          setModules((prevModules) =>
            prevModules.filter((module) => module.kategori_id !== kategoriId)
          );
        } else {
          console.error("Penghapusan kategori gagal:", response.data.message);
        }
      } catch (error) {
        console.error("Error saat menghapus kategori:", error);
      }
    });
  };
  console.log(modules);

  return (
    <div className="p-5">
      <h2 className="text-3xl font-semibold mb-6">Daftar Kategori</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div
            className="bg-green-100 rounded-lg flex items-center justify-center text-4xl text-green-500 min-h-[300px] cursor-pointer"
            onClick={() => navigate("/materi/tambah")}
          >
            <Plus size={36} />
          </div>
          {/* Tampilkan data kategori jika ada */}
          {modules.map((module) => (
            <div
              key={module.kategori_id}
              className="relative bg-white rounded-lg shadow-lg p-4 flex flex-col"
            >
              {/* Gambar kategori */}
              <div className="w-full h-32 rounded-lg overflow-hidden mb-4">
                <img
                  src={module.gambar}
                  alt={module.nama_kategori}
                  className="w-full h-full object-cover"
                
                />
              </div>
              {/* Detail nama dan penjelasan */}
              <div className="mb-4 pl-2">
                <h3 className="text-lg font-semibold text-left">
                  {module.nama_kategori}
                </h3>
                <p className="text-sm text-gray-500 text-left">
                  {module.penjelasan.split(" ").slice(0, 6).join(" ")}
                  {module.penjelasan.split(" ").length > 6 && "..."}
                </p>
              </div>
              {/* Tombol Aksi */}
              <div className="flex w-full mt-10">
                <div className="flex items-center space-x-2 ml-auto">
                  {/* Tombol hapus */}
                  <button
                    className="text-red-500"
                    onClick={() => handleDelete(module.kategori_id)}
                  >
                    <Trash2 size={20} />
                  </button>
                  {/* Tombol menuju halaman materi */}
                  <button
                    className="text-green-500"
                    onClick={() =>
                      navigate("/materi/data", {
                        state: { selectedCategory: module },
                      })
                    }
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ModulCard;
