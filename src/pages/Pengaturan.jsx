import React, { useState } from "react";
import Navbar from "../components/NavbarSetting";
import Membership from "../components/MembershipCard";

export default function Pengaturan() {
  const [activePage, setActivePage] = useState('Profile');

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6">Pengaturan</h2>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex justify-center p-4 sm:p-2">
        {activePage === 'Profile' ? (
          <div className="w-full max-w-4xl px-0 ">
            {/* Profile Section */}
            <div className="p-6 bg-white rounded-lg mt-4 shadow-lg text-black">
              <div className="flex flex-col sm:flex-row items-center space-x-4 px-6 mb-6">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Profile"
                  className="w-20 h-20 rounded-full border-4 border-gray-300"
                />
                <div className="px-2 text-center sm:text-left">
                  <h3 className="text-lg font-semibold">Azhar Rizqullah</h3>
                  <p>azhar24@gmail.com</p>
                </div>
                <div className="flex w-full sm:w-96 space-x-2 mt-2 sm:mt-0 ">
                  <button
                    type="submit"
                    className="w-1/2 px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
                  >
                    Tambah Foto
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 px-4 py-2 font-semibold text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Hapus Foto
                  </button>
                </div>
              </div>

              {/* Form Fields */}
              <form className="space-y-4 p-6 mb-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <label className="w-full sm:w-1/3 font-medium text-black">Nama Lengkap</label>
                  <input
                    type="text"
                    defaultValue="Azhar"
                    className="w-full sm:w-2/3 px-4 py-2 bg-white rounded text-gray-800 border border-gray-300"
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <label className="w-full sm:w-1/3 font-medium text-black">Email</label>
                  <input
                    type="email"
                    defaultValue="azhar24@gmail.com"
                    className="w-full sm:w-2/3 px-4 py-2 bg-white rounded text-gray-400 border border-gray-300"
                    readOnly
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <label className="w-full sm:w-1/3 font-medium text-black">Tempat Tanggal Lahir</label>
                  <input
                    type="text"
                    defaultValue="Jakarta, 24 Mei 1998"
                    className="w-full sm:w-2/3 px-4 py-2 bg-white rounded text-gray-800 border border-gray-300"
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <label className="w-full sm:w-1/3 font-medium text-black">No. Telp</label>
                  <input
                    type="tel"
                    defaultValue="085673826197"
                    className="w-full sm:w-2/3 px-4 py-2 bg-white rounded text-gray-800 border border-gray-300"
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <label className="w-full sm:w-1/3 font-medium text-black">Alamat</label>
                  <textarea
                    defaultValue="Jl. Bougenville Blok C No.5, Java Residence, Kebayoran, Jakarta"
                    className="w-full sm:w-2/3 px-4 py-2 bg-white rounded text-gray-800 border border-gray-300"
                  />
                </div>
              </form>
            </div>

            {/* Simpan Button */}
            <button
              type="submit"
              className="w-full sm:w-72 mt-7 px-4 py-2 font-semibold text-white bg-green-500 rounded hover:bg-green-600"
            >
              Simpan
            </button>
          </div>
        ) : (
          <Membership />
        )}
      </div>
    </div>
  );
}
