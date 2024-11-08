import React from "react";
import { Trash2, Edit3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="max-w-43 w-full mx-auto p-5  rounded-lg ">
        
      <h1 className="text-3xl font-semibold mb-6">Daftar Materi</h1>

      {/* Main Content Container */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        {/* Header */}
        <div className="flex items-start space-x-12 mb-4">
          <img
            src="/path-to-your-image.jpg"
            alt="Kacang Tanah"
            className="w-32 h-32 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-2">Kacang Tanah</h2>
            <textarea
              placeholder="KING RAMA KEBINGUNGAN"
              className="w-full p-2 border rounded-lg resize-none"
              rows="3"
            ></textarea>
            
        <div className="flex justify-center">
        <button
            className="px-60 py-2 bg-green-600 text-white font-semibold rounded-lg"
            onClick={() => navigate("/materi/tambahmateri")}
          >
            TAMBAH MATERI
          </button>
        </div>
          </div>
        </div>

        

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="py-2 px-4 border text-left font-semibold">Modul</th>
                <th className="py-2 px-4 border text-left font-semibold">Tanggal</th>
                <th className="py-2 px-4 border text-center font-semibold">Hapus</th>
                <th className="py-2 px-4 border text-center font-semibold">Edit</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 px-4 border text-left">{item.modul}</td>
                  <td className="py-2 px-4 border text-left">{item.tanggal}</td>
                  <td className="py-2 px-4 border text-center">
                    <button className="text-red-500">
                      <Trash2 size={18} />
                    </button>
                  </td>
                  <td className="py-2 px-4 border text-center">
                    <button className="text-blue-500" onClick={() => navigate("/materi/editmateri")}>
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
