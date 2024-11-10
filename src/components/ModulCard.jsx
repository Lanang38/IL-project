import React from "react";
import {
  Trash,
  ArrowRight,
  Plus,
  Trash2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AlertDelete } from "./Alert"; // Import the AlertDelete function

// Komponen untuk kartu kategori modul
function ModulCard() {
  const navigate = useNavigate();
  const modules = [
    { title: "Kacang Tanah", moduleCount: 6, imgUrl: "src/assets/kacang tanah.jpg" },
    { title: "Kacang Hijau", moduleCount: 6, imgUrl: "src/assets/kacang hijau.jpg" },
    { title: "Kacang Almond", moduleCount: 6, imgUrl: "src/assets/kacang almond.jpg" },
    { title: "Kacang Merah", moduleCount: 6, imgUrl: "src/assets/kacang merah.jpg" },
    { title: "Kacang Polong", moduleCount: 6, imgUrl: "src/assets/kacang polong.jpg" },
    { title: "Kacang Kedelai", moduleCount: 6, imgUrl: "src/assets/Kacang kedelai.jpg" },
    { title: "Kacang Mete", moduleCount: 6, imgUrl: "src/assets/kacang mete.jpg" },
    { title: "Kacang Kenari", moduleCount: 6, imgUrl: "src/assets/kacang kenari.jpg" },
    { title: "Kacang Pistachio", moduleCount: 6, imgUrl: "src/assets/kacang pistachio.jpg" },
    { title: "Kacang Macadamia", moduleCount: 6, imgUrl: "src/assets/kacang macadamia.jpg" },
  ];

  // Function to handle module deletion
  const handleDelete = (moduleTitle) => {
    AlertDelete(() => {
      // Callback after confirming deletion
      console.log(`${moduleTitle} has been deleted.`);
      // You can remove the module from the state here or perform any other logic
    });
  };

  return (
    <div className="p-5">
      <h2 className="text-3xl font-semibold mb-6">Daftar Kategori</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg p-4 flex flex-col"
          >
            {/* Gambar modul */}
            <div className="w-full h-32 rounded-lg overflow-hidden mb-4">
              <img
                src={module.imgUrl}
                alt={module.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Detail judul dan jumlah materi */}
            <div className="mb-4 pl-2">
              <h3 className="text-lg font-semibold text-left">{module.title}</h3>
              <p className="text-sm text-gray-500 text-left">
                {module.moduleCount} Materi
              </p>
            </div>
            {/* Tombol Aksi */}
            <div className="flex w-full mt-10">
              <div className="flex items-center space-x-2 ml-auto">
                {/* Tombol hapus */}
                <button className="text-red-500" onClick={() => handleDelete(module.title)}>
                  <Trash2 size={20} />
                </button>
                {/* Tombol menuju materi */}
                <button className="text-green-500" onClick={() => navigate("/materi/data")}>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* Tombol tambah kategori */}
        <div className="bg-green-100 rounded-lg flex items-center justify-center text-4xl text-green-500">
          <button onClick={() => navigate("/materi/tambah")}>
            <Plus size={36} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModulCard;
