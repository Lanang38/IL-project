import React from "react";
<<<<<<< HEAD
import { Edit, Trash, ArrowRight, Plus, Pencil, Trash2, CircleChevronRight, CircleArrowLeft, CircleArrowRight } from "lucide-react";
=======

import { Edit, Trash, ArrowRight, Plus, Pencil, Trash2, CircleChevronRight, CircleArrowLeft, CircleArrowRight } from "lucide-react";

import { Edit, Trash, ArrowRight, Plus } from "lucide-react";
>>>>>>> 16f22286e06dc831ffe2a4a912f87c387faec638

function ModulCard() {
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
<<<<<<< HEAD
=======

>>>>>>> 16f22286e06dc831ffe2a4a912f87c387faec638
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {modules.map((module, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg p-4 flex flex-col"
            >
<<<<<<< HEAD
=======
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <div key={index} className="relative bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
            {/* Icon Hapus */}
            <button className="absolute top-2 right-2 text-red-500 text-lg">
              <Trash size={18} />
            </button>


>>>>>>> 16f22286e06dc831ffe2a4a912f87c387faec638
            {/* Gambar Modul */}
            <div className="w-full h-32 rounded-lg overflow-hidden mb-4">
              <img
                src={module.imgUrl}
                alt={module.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Informasi Modul */}
            <div className="mb-4 pl-2"> {/* Adjust 'pl-2' as needed */}
              <h3 className="text-lg font-semibold text-left">{module.title}</h3>
              <p className="text-sm text-gray-500 text-left">
                {module.moduleCount} Materi
              </p>
<<<<<<< HEAD
            </div>

            {/* Tombol Edit dan Lihat */}
            <div className="flex w-full mt-10">
              {/* Right-aligned buttons */}
              <div className="flex items-center space-x-2 ml-auto">
                <button className="text-green-500">
                  <Pencil size={20} />
                </button>
                <button className="text-red-500">
                  <Trash2 size={20} />
                </button>
                <button className="text-green-500">
                  <ArrowRight size={30} />
                </button>
              </div>
=======
            </div>

            {/* Tombol Edit dan Lihat */}
            <div className="flex w-full mt-8">
              {/* Right-aligned buttons */}
              <div className="flex items-center space-x-2 ml-auto">
                <button className="text-green-500">
                  <Pencil size={20} />
                </button>
                <button className="text-red-500">
                  <Trash2 size={20} />
                </button>
                <button className="text-green-500">
                  <ArrowRight size={30} />
                </button>
              </div>

            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold">{module.title}</h3>
              <p className="text-sm text-gray-500">{module.moduleCount} Modul</p>
            </div>

            {/* Tombol Edit dan Lihat */}
            <div className="flex justify-between w-full mt-auto">
              <button className="text-green-500">
                <Edit size={18} />
              </button>
              <button className="text-green-500">
                <ArrowRight size={18} />
              </button>

>>>>>>> 16f22286e06dc831ffe2a4a912f87c387faec638
            </div>
          </div>
        ))}
        
        {/* Tombol Tambah Modul Baru */}
        <div className="bg-green-100 rounded-lg flex items-center justify-center text-4xl text-green-500">
          <button>
            <Plus size={36} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModulCard;
