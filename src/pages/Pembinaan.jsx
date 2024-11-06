import React, { useState } from 'react';
import CoachCard from '../components/CoachCard';
import Pagination from '../components/Pagination';

export default function Pembinaan() {
  const coaches = [
    { name: "azharrrr", email: "azhar24@gmail.com", phone: "085673826197", schedule: "4 November 2024", imgUrl: "https://via.placeholder.com/80" },
    { name: "Nama Pengguna", email: "email@example.com", phone: "No.Telephone", schedule: "Jadwal Coaching", imgUrl: "https://via.placeholder.com/80" },
    { name: "Nama Pengguna", email: "email@example.com", phone: "No.Telephone", schedule: "Jadwal Coaching", imgUrl: "https://via.placeholder.com/80" },
    { name: "Nama Pengguna", email: "email@example.com", phone: "No.Telephone", schedule: "Jadwal Coaching", imgUrl: "https://via.placeholder.com/80" },
    { name: "Nama Pengguna", email: "email@example.com", phone: "No.Telephone", schedule: "Jadwal Coaching", imgUrl: "https://via.placeholder.com/80" },
    { name: "Nama Pengguna", email: "email@example.com", phone: "No.Telephone", schedule: "Jadwal Coaching", imgUrl: "https://via.placeholder.com/80" },
    { name: "Nama Pengguna", email: "email@example.com", phone: "No.Telephone", schedule: "Jadwal Coaching", imgUrl: "https://via.placeholder.com/80" },
    { name: "Nama Pengguna", email: "email@example.com", phone: "No.Telephone", schedule: "Jadwal Coaching", imgUrl: "https://via.placeholder.com/80" },
  ];

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(coaches.length / itemsPerPage);

  // Calculate the current items to display based on pagination
  const currentItems = coaches.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-4">Pembinaan</h1>

      {/* Form Profil Mentor */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 space-y-4">
        <div className="flex items-start space-x-6">
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold text-center mb-2">Profil</h2>
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Tambah Foto</span>
            </div>
          </div>

          {/* Insert the form fields here */}
          <div className="flex-grow grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-medium text-gray-600">Nama</label>
              <input
                type="text"
                placeholder="Masukkan Nama"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-medium text-gray-600">Jadwal Coaching</label>
              <input
                type="text"
                placeholder="Link Zoom"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-medium text-gray-600">E-mail</label>
              <input
                type="email"
                placeholder="Masukkan E-mail"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div className="col-span-2 md:col-span-1 grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="DD/MM/YYYY"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg text-sm"
              />
              <input
                type="text"
                placeholder="00.00"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-600">User ID</label>
              <input
                type="text"
                placeholder="Masukkan User ID"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg text-sm"
              />
            </div>
          </div>
        </div>
        <button className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-lg mt-4">
          Daftarkan
        </button>
      </div>

      {/* Daftar Coach Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentItems.map((coach, index) => (
          <CoachCard
            key={index}
            name={coach.name}
            email={coach.email}
            phone={coach.phone}
            schedule={coach.schedule}
            imgUrl={coach.imgUrl}
          />
        ))}
      </div>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
