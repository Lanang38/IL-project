import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";
import { AlertDelete } from "../components/Alert";
import dayjs from "dayjs";


function Pengguna() {
  const [data, setData] = useState([]); // Data pengguna
  const [currentPage, setCurrentPage] = useState(1); // Halaman saat ini
  const [loading, setLoading] = useState(false); // Status loading
  const itemsPerPage = 8;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Fungsi untuk mengambil semua data pengguna
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/api/v1/pengguna");
      setData(response.data.data); // Mengambil data dari response
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };  

  // Fungsi untuk menghapus pengguna berdasarkan email
  const handleDelete = async (email_user) => {
    AlertDelete(async () => {
      try {
        await axios.delete(`http://localhost:3000/api/v1/pengguna/${email_user}`);
        setData(data.filter((user) => user.email_user !== email_user)); // Filter data pengguna
        console.log("User deleted successfully.");
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    });
  };

  // Efek untuk memuat data pengguna saat komponen di-mount
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-semibold mb-4">Pengguna</h1>

      {/* Search Box */}
      <div className="bg-white p-4 rounded-lg shadow mb-8">
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mb-4">
          <div className="flex-1 mb-4 sm:mb-0">
            <input
              type="text"
              placeholder="Masukkan Nama"
              className="mt-3 p-3 border border-gray-300 rounded-lg w-full focus:outline-none"
            />
          </div>
          <div className="flex-1 mb-4 sm:mb-0">
            <input
              type="text"
              placeholder="Masukkan Email Pengguna"
              className="mt-3 p-3 border border-gray-300 rounded-lg w-full focus:outline-none"
            />
          </div>
          <button className="px-20 py-3 bg-blue-500 text-white rounded-lg w-full sm:w-auto mt-3 sm:mb-0 sm:ml-4">
            Cari
          </button>

        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden overflow-x-auto">
        {loading ? (
          <p className="text-center py-4">Loading...</p>
        ) : (
          <table className="min-w-full bg-white text-left">
            <thead>
              <tr>
                <th className="py-3 px-4 border-b font-semibold bg-green-500 text-white">
                  Nama Pengguna
                </th>
                <th className="py-3 px-4 border-b font-semibold bg-green-500 text-white">
                  E-mail
                </th>
                <th className="py-3 px-4 border-b font-semibold text-center bg-green-500 text-white">
                  Tgl Pendaftaran
                </th>
                <th className="py-3 px-4 border-b font-semibold text-center bg-green-500 text-white">
                  Nomor Telepon
                </th>
                <th className="py-3 px-4 border-b font-semibold text-center bg-green-500 text-white">
          
                </th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b">{user.nama_user}</td>
                  <td className="py-3 px-4 border-b">{user.email_user}</td>
                  <td className="py-3 px-4 border-b text-center">
                  {dayjs(user.tgl_pendaftaran).format("DD/MM/YYYY")}
                </td>
                  <td className="py-3 px-4 border-b text-center">{user.telpon_user}</td>
                  <td className="py-3 px-4 border-b text-center">
                    <button
                      className="px-6 py-2 bg-red-500 text-white rounded-lg w-full sm:w-auto sm:ml-4"
                      onClick={() => handleDelete(user.email_user)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
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
