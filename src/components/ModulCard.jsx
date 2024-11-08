import React from "react";
import {
  Trash,
  ArrowRight,
  Plus,
  Trash2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function ModulCard() {
  const navigate = useNavigate();
  const modules = [
    { title: "Kacang Tanah", moduleCount: 6, imgUrl: "https://via.placeholder.com/150" },
    { title: "Kacang Hijau", moduleCount: 6, imgUrl: "https://via.placeholder.com/150" },
    { title: "Kacang Almond", moduleCount: 6, imgUrl: "https://via.placeholder.com/150" },
    { title: "Kacang Merah", moduleCount: 6, imgUrl: "https://via.placeholder.com/150" },
    { title: "Kacang Polong", moduleCount: 6, imgUrl: "https://via.placeholder.com/150" },
    { title: "Kacang Kedelai", moduleCount: 6, imgUrl: "https://via.placeholder.com/150" },
    { title: "Kacang Mete", moduleCount: 6, imgUrl: "https://via.placeholder.com/150" },
    { title: "Kacang Kenari", moduleCount: 6, imgUrl: "https://via.placeholder.com/150" },
    { title: "Kacang Pistachio", moduleCount: 6, imgUrl: "https://via.placeholder.com/150" },
    { title: "Kacang Macadamia", moduleCount: 6, imgUrl: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Daftar Kategori</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg p-4 flex flex-col"
          >

            <div className="w-full h-32 rounded-lg overflow-hidden mb-4">
              <img
                src={module.imgUrl}
                alt={module.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mb-4 pl-2">
              <h3 className="text-lg font-semibold text-left">{module.title}</h3>
              <p className="text-sm text-gray-500 text-left">
                {module.moduleCount} Materi
              </p>
            </div>

            <div className="flex w-full mt-10">
              <div className="flex items-center space-x-2 ml-auto">
                <button className="text-red-500">
                  <Trash2 size={20} />
                </button>
                <button className="text-green-500" onClick={() => navigate("/materi/data")}>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}

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
