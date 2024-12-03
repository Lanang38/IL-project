import React, { useState, useEffect } from "react";
import axios from "axios";
import SettingCard from "../components/SettingCard";
import Pagination from "../components/Pagination";

export default function MembershipCard() {
  const [admins, setAdmins] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // State untuk loading status
  const itemsPerPage = 8;

  // Fungsi untuk mengambil data dari API
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        setLoading(true); // Mulai loading
        const response = await axios.get("http://localhost:3000/api/v1/admin");
        console.log("Response data:", response.data); // Debug respon API
        setAdmins(response.data.data || []); // Pastikan hanya array yang disimpan
        setLoading(false); // Selesai loading
      } catch (error) {
        console.error("Error fetching admin data:", error);
        setLoading(false); // Tetap selesai loading meskipun gagal
      }
    };

    fetchAdmins();
  }, []);

  // Data yang ditampilkan pada halaman saat ini
  const totalPages = Math.ceil(admins.length / itemsPerPage);
  const currentItems = Array.isArray(admins)
    ? admins.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : []; // Pastikan admins adalah array

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mt-3 p-0 bg-gray-100 min-h-screen">
      {/* Loading Indicator */}
      {loading ? (
        <div className="text-center mt-10">
          <p>Loading data...</p>
        </div>
      ) : (
        <>
          {/* Daftar Admin Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {currentItems.map((admin, index) => (
              <SettingCard
                key={index}
                name={admin.nama_panggilan_admin || "N/A"}
                email={admin.email_admin || "N/A"}
                phone={admin.telepon_admin || "N/A"}
                imgUrl={admin.foto_pr || "https://via.placeholder.com/80"}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}
    </div>
  );
}
