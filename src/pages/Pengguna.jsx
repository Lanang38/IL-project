import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";
import { AlertDelete } from "../components/Alert";
import dayjs from "dayjs";

function Pengguna() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");

  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/api/v1/pengguna");
      setData(response.data.data);
      setFilteredData(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const lowerCaseName = searchName.toLowerCase();
    const lowerCaseEmail = searchEmail.toLowerCase();
    const filtered = data.filter(
      (user) =>
        (!searchName || user.nama_user.toLowerCase().includes(lowerCaseName)) &&
        (!searchEmail || user.email_user.toLowerCase().includes(lowerCaseEmail))
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset ke halaman pertama
  };

  const handleDelete = async (email_user) => {
    AlertDelete(async () => {
      try {
        await axios.delete(`http://localhost:3000/api/v1/pengguna/${email_user}`);
        const updatedData = data.filter((user) => user.email_user !== email_user);
        setData(updatedData);
        setFilteredData(updatedData);
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-4">Pengguna</h1>
      <div className="bg-white p-4 rounded-lg shadow mb-8">
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mb-4">
          <input
            type="text"
            placeholder="Masukkan Nama Pengguna"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="mt-3 p-3 border border-gray-300 rounded-lg w-full"
          />

          <button
            className="px-20 py-3 bg-blue-500 text-white rounded-lg mt-3"
            onClick={handleSearch}
          >
            Cari
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {loading ? (
          <p className="text-center py-4">Loading...</p>
        ) : currentData.length > 0 ? (
          <table className="min-w-full bg-white text-left">
            <thead>
              <tr>
                <th className="py-3 px-4 border-b bg-green-500 text-white">Nama</th>
                <th className="py-3 px-4 border-b bg-green-500 text-white">Email</th>
                <th className="py-3 px-4 border-b bg-green-500 text-white">Tanggal</th>
                <th className="py-3 px-4 border-b bg-green-500 text-white">Telepon</th>
                <th className="py-3 px-4 border-b bg-green-500 text-white">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((user) => (
                <tr key={user.email_user}>
                  <td className="py-3 px-4 border-b">{user.nama_user}</td>
                  <td className="py-3 px-4 border-b">{user.email_user}</td>
                  <td className="py-3 px-4 border-b">
                    {dayjs(user.tgl_pendaftaran).format("DD/MM/YYYY")}
                  </td>
                  <td className="py-3 px-4 border-b">{user.telpon_user}</td>
                  <td className="py-3 px-4 border-b">
                    <button
                      className="px-6 py-2 bg-red-500 text-white rounded-lg"
                      onClick={() => handleDelete(user.email_user)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center py-4">Data tidak ditemukan.</p>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default Pengguna;
