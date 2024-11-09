import React, { useState } from 'react';
import SettingCard from '../components/SettingCard';
import Pagination from '../components/Pagination';

export default function MembershipCard() {
  const [photo, setPhoto] = useState(null); // State untuk foto yang diunggah
  const [currentPage, setCurrentPage] = useState(1);

  const coaches = [
    { name: "azharrrr", email: "azhar24@gmail.com", phone: "085673826197",  imgUrl: "https://via.placeholder.com/80" },
    { name: "KING", email: "rama@example.com", phone: "089812128731",  imgUrl: "https://via.placeholder.com/80" },
    { name: "Rama", email: "email@example.com", phone: "No.Telephone",  imgUrl: "https://via.placeholder.com/80" },
    { name: "Lanang", email: "email@example.com", phone: "No.Telephone",  imgUrl: "https://via.placeholder.com/80" },
    { name: "Virgin", email: "email@example.com", phone: "No.Telephone",  imgUrl: "https://via.placeholder.com/80" },
    { name: "Balqis", email: "email@example.com", phone: "No.Telephone",  imgUrl: "https://via.placeholder.com/80" },
    { name: "Loici", email: "email@example.com", phone: "No.Telephone",  imgUrl: "https://via.placeholder.com/80" },
    { name: "Daniel", email: "email@example.com", phone: "No.Telephone",  imgUrl: "https://via.placeholder.com/80" },
    { name: "Daniel", email: "email@example.com", phone: "No.Telephone",  imgUrl: "https://via.placeholder.com/80" },
    { name: "Daniel", email: "email@example.com", phone: "No.Telephone",  imgUrl: "https://via.placeholder.com/80" },
  ];

  const itemsPerPage = 8;
  const totalPages = Math.ceil(coaches.length / itemsPerPage);

  // Calculate the current items to display based on pagination
  const currentItems = coaches.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Fungsi untuk menangani unggahan gambar
  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  return (
    <div className="mt-3 p-0 bg-gray-100 min-h-screen">

      {/* Daftar Coach Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {currentItems.map((coach, index) => (
          <SettingCard
            key={index}
            name={coach.name}
            email={coach.email}
            phone={coach.phone}
            imgUrl={coach.imgUrl}
          />
        ))}
      </div>

      {/* Pagination Component */}
      <div className="mt-8" >
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      </div>
    </div>
  );
}
