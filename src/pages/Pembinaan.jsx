import React, { useState, useEffect } from "react";
import axios from "axios";
import CoachCard from "../components/CoachCard";
import Pagination from "../components/Pagination";
import { AlertSimpan } from "../components/Alert";

export default function Pembinaan() {
  const [photo, setPhoto] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [coaches, setCoaches] = useState([]);  // State to store fetched mentors

  const itemsPerPage = 4;
  const totalPages = Math.ceil(coaches.length / itemsPerPage);

  const currentItems = coaches.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    // Fetch mentor data from the backend
    const fetchMentors = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/mentor");
        setCoaches(response.data.data);  // Assuming 'data' contains the mentor data
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };

    fetchMentors();
  }, []);  // Empty dependency array ensures it runs only once when the component mounts

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  const handleSaveAlert = () => {
    AlertSimpan();
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-4">Pembina</h1>

      {/* Form Profil Mentor */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 space-y-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold text-center mb-2">Profil</h2>
            <label htmlFor="photo-upload" className="cursor-pointer">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                {photo ? (
                  <img
                    src={photo}
                    alt="Uploaded"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500 text-sm">Tambah Foto</span>
                )}
              </div>
            </label>
            <input
              type="file"
              id="photo-upload"
              className="hidden"
              accept="image/*"
              onChange={handlePhotoUpload}
            />
          </div>

          {/* Form Fields */}
          <div className="flex-grow grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-medium text-gray-600">
                Nama
              </label>
              <input
                type="text"
                placeholder="Masukkan Nama"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-500"
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-medium text-gray-600">
                Link ZOOM
              </label>
              <input
                type="text"
                placeholder="Masukan Link ZOOM"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-500"
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-medium text-gray-600">
                E-mail
              </label>
              <input
                type="email"
                placeholder="Masukkan E-mail"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-500"
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-medium text-gray-600">
                Nomor Telepon
              </label>
              <input
                type="text"
                placeholder="Masukan Nomor Telepon"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-500"
              />
            </div>

            <div className="col-span-2 md:col-span-1 grid grid-cols-2 gap-2">
              <input
                type="time"
                placeholder="Jam Mulai"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-500 placeholder-gray-500"
              />
              <input
                type="time"
                placeholder="Jam Berakhir"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-500 placeholder-gray-500"
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-medium text-gray-600">
                Kategori Materi
              </label>
              <select className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg text-sm text-gray-500 focus:outline-none focus:border-gray-500">
                <option value="" disabled selected hidden>
                  Pilih Kategori
                </option>
                <option value="kategori1" className="text-black">
                  Kategori 1
                </option>
                <option value="kategori2" className="text-black">
                  Kategori 2
                </option>
                <option value="kategori3" className="text-black">
                  Kategori 3
                </option>
              </select>
            </div>

            {/* Tombol Tambah Pembina */}
            <div className="col-span-2 flex justify-center lg:justify-end">
              <button
                className="py-3 px-6 bg-green-500 text-white font-medium rounded-2xl hover:bg-green-600"
                onClick={handleSaveAlert}
              >
                Tambah Pembina
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Daftar Coach Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentItems.map((coach, index) => (
          <CoachCard
            key={index}
            name={coach.nama_mentor}  // Updated to match the backend property
            email={coach.email_mentor}  // Updated to match the backend property
            phone={coach.telepon_mentor}  // Updated to match the backend property
            schedule={coach.link_zoom}  // Provide a default value if no schedule is available
            imgUrl={"https://via.placeholder.com/80"}  // Placeholder, you can update this if you have images for the mentors
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
