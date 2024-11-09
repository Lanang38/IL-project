import React from "react";
import { Trash2, Edit3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AlertDelete } from "./Alert";

// Komponen DataMateri untuk menampilkan daftar materi
export default function DataMateri() {
  const navigate = useNavigate();
  const data = [
    { modul: "Menanam", tanggal: "28/10/2024" },
    { modul: "Benih", tanggal: "28/10/2024" },
    { modul: "Hama", tanggal: "28/10/2024" },
    { modul: "Memanen", tanggal: "28/10/2024" },
    { modul: "Tengkulak", tanggal: "28/10/2024" },
    { modul: "Menanam", tanggal: "28/10/2024" },
    { modul: "Benih", tanggal: "28/10/2024" },
    { modul: "Hama", tanggal: "28/10/2024" },
    { modul: "Memanen", tanggal: "28/10/2024" },
    { modul: "Tengkulak", tanggal: "28/10/2024" },
  ];

  const handleDelete = (modul) => {
    AlertDelete(modul); // Call AlertDelete function when delete is clicked
  };

  return (
    <div className="max-w-screen-lg w-full mx-auto p-8 rounded-lg">
      <h1 className="text-3xl font-semibold mb-6 text-center">Daftar Materi</h1>

      {/* Main Content Container */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl mx-auto overflow-hidden break-words">
  {/* Header Gambar dan Deskripsi */}
  <div className="flex flex-col items-center lg:flex-row lg:items-start justify-center lg:space-x-12 mb-4">
    <img
      src="/path-to-your-image.jpg"
      alt="Kacang Tanah"
      className="w-32 h-32 rounded-lg object-cover mb-4 lg:mb-0"
    />
    <div className="flex-1 text-center pt-6 lg:text-left lg:pl-24">
      <h2 className="text-2xl font-semibold mb-2">Kacang Tanah</h2>
      <div className="w-full p-4 border rounded-lg resize-none break-words whitespace-normal max-w-full mx-auto">
        Katergori Kacang Tanah adalah kategor yang berisi tentang materi penanaman kacang tanah dari proses paling awal 
      </div>
    </div>
  </div>

        {/* Tombol Kembali dan Tambah Materi */}
        <div className="mt-3 mb-1">
          <div className="flex gap-2 flex-col lg:flex-row justify-center lg:justify-end">
            <button
              className="py-2 px-4 bg-green-500 text-white text-sm font-medium rounded-2xl hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              onClick={() => navigate("/materi/tambahmateri")}
            >
              Tambah Materi
            </button>
            <button
              className="py-2 px-4 bg-red-500 text-white text-sm font-medium rounded-2xl hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
              onClick={() => navigate("/materi")}
            >
              Kembali
            </button>
          </div>
        </div>

        {/* Tabel Data Materi */}
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
              {data.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="py-3 px-4 text-center">{item.modul}</td>
                  <td className="py-3 px-4 text-center">{item.tanggal}</td>
                  <td className="py-3 px-4 text-center">
                    <button
                      className="text-red-500"
                      onClick={() => handleDelete(item.modul)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button
                      className="text-blue-500"
                      onClick={() => navigate("/materi/editmateri")}
                    >
                      <Edit3 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
