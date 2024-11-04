import React, { useState } from "react";
import Pagination from "../components/Pagination";

function Pengguna() {
  const data = [...Array(30)].map((_, index) => ({
    id: index + 1,
    name: `Nama Pengguna ${index + 1}`,
    email: `email${index + 1}@example.com`,
    date: "2024-11-04",
    status: "Active"
  }));

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-semibold mb-4">Pengguna</h1>

      {/* Search Box */}
      <div className="bg-white p-4 rounded-lg shadow mb-8">
        <div className="flex items-center space-x-4 mb-4">
          {/* User Avatars */}
          <div className="flex -space-x-2">
            <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
              AK
            </div>
            {/* Add other avatars as needed */}
          </div>
          {/* Input Fields */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Masukkan Nama"
              className="p-2 border border-gray-300 rounded-lg w-full"
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              placeholder="Masukkan User ID"
              className="p-2 border border-gray-300 rounded-lg w-full"
            />
          </div>
          {/* Search and Clear Buttons */}
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Cari
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
            Hapus
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b font-semibold text-left bg-green-500 text-white">Check list</th>
              <th className="py-2 px-4 border-b font-semibold text-left bg-green-500 text-white">User ID</th>
              <th className="py-2 px-4 border-b font-semibold text-left bg-green-500 text-white">Nama Pengguna</th>
              <th className="py-2 px-4 border-b font-semibold text-left bg-green-500 text-white">E-mail</th>
              <th className="py-2 px-4 border-b font-semibold text-left bg-green-500 text-white">Tgl Registrasi</th>
              <th className="py-2 px-4 border-b font-semibold text-left bg-green-500 text-white">Status Akun</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b">
                  <input type="checkbox" />
                </td>
                <td className="py-2 px-4 border-b">{user.id}</td>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.date}</td>
                <td className="py-2 px-4 border-b">{user.status}</td>
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
