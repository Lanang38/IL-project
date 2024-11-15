import React, { useState } from "react";
import Pagination from "../components/Pagination";
import { AlertDelete } from "../components/Alert";

function Pengguna() {
  const data = [...Array(30)].map((_, index) => ({
    id: index + 1,
    name: `Nama Pengguna ${index + 1}`,
    email: `email${index + 1}@example.com`,
    date: "2024-11-04",
    status: "Aktif",
  }));

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDelete = () => {
    // Call the AlertDeletePengguna function when the button is clicked
    AlertDelete(() => {
      console.log("Data Pengguna telah dihapus."); // Logic after deletion (e.g., refresh or update state)
    });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-semibold mb-4">Pengguna</h1>

      {/* Search Box */}
      <div className="bg-white p-4 rounded-lg shadow mb-8">
  <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mb-4">
    <div className="flex-1 mb-4 sm:mb-0">
      <input
        type="text"
        placeholder="Masukkan Nama"
        className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none"
      />
    </div>
    <div className="flex-1 mb-4 sm:mb-0">
      <input
        type="text"
        placeholder="Masukkan ID Pengguna"
        className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none"
      />
    </div>
    <button className="px-8 py-2 bg-blue-500 text-white rounded-lg w-full sm:w-auto mb-4 sm:mb-0 sm:ml-4">
      Cari
    </button>
    <button
      className="px-6 py-2 bg-red-500 text-white rounded-lg w-full sm:w-auto sm:ml-4"
      onClick={handleDelete}
    >
      Hapus
    </button>
  </div>
</div>


      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b font-semibold text-center bg-green-500 text-white">
                Centang
              </th>
              <th className="py-2 px-4 border-b font-semibold text-center bg-green-500 text-white">
                ID Pengguna
              </th>
              <th className="py-2 px-4 border-b font-semibold text-left bg-green-500 text-white">
                Nama Pengguna
              </th>
              <th className="py-2 px-4 border-b font-semibold text-left bg-green-500 text-white">
                E-mail
              </th>
              <th className="py-2 px-4 border-b font-semibold text-center bg-green-500 text-white">
                Tgl Pendaftaran
              </th>
              <th className="py-2 px-4 border-b font-semibold text-center bg-green-500 text-white">
                Riwayat Akun
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b text-center">
                  <input type="checkbox" className="transform scale-150" />
                </td>
                <td className="py-2 px-4 border-b text-center">{user.id}</td>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b text-center">{user.date}</td>
                <td className="py-2 px-4 border-b text-center">
                  {user.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default Pengguna;
