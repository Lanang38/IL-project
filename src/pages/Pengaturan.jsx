import React, { useState } from "react";
import Navbar from "../components/NavbarSetting";
import Membership from "../components/MembershipCard";

export default function Pengaturan() {
  const [activePage, setActivePage] = useState('Profile');

  return (
      <div className="min-h-screen bg-gray-100">
          <h1 className="text-3xl font-semibold mb-4">Pengaturan</h1>
          <Navbar activePage={activePage} setActivePage={setActivePage} />
          <div className="flex justify-center p-8">
              {activePage === 'Profile' ? (
                  <div className="w-full max-w">
                      {/* Profile Section */}
                      <div className="p-6 bg-green-600 rounded-lg mt-4 mx-4 shadow-lg text-white">
                          <div className="flex items-center space-x-4 mb-6">
                              <img
                                  src="https://via.placeholder.com/80"
                                  alt="Profile"
                                  className="w-20 h-20 rounded-full border-4 border-white"
                              />
                              <div>
                                  <h3 className="text-lg font-semibold">Azhar Rizqullah</h3>
                                  <p>azhar24@gmail.com</p>
                              </div>
                              <button
                                  type="submit"
                                  className="w-full px-4 py-2 mt-4 font-semibold text-white bg-green-800 rounded"
                              >
                                  Tambah/Edit Foto
                              </button>
                              <button
                                  type="submit"
                                  className="w-full px-4 py-2 mt-4 font-semibold text-white bg-green-800 rounded"
                              >
                                  Hapus Foto
                              </button>
                          </div>

                          {/* Form Fields */}
                          <form className="space-y-4">
                              <div>
                                  <label className="block font-medium">Nama Lengkap</label>
                                  <input
                                      type="text"
                                      defaultValue="Azhar"
                                      className="w-full px-4 py-2 mt-2 bg-white rounded text-gray-800"
                                  />
                              </div>
                              <div>
                                  <label className="block font-medium">Email</label>
                                  <input
                                      type="email"
                                      defaultValue="azhar24@gmail.com"
                                      className="w-full px-4 py-2 mt-2 bg-gray-100 rounded text-gray-500"
                                      readOnly
                                  />
                              </div>
                              <div>
                                  <label className="block font-medium">Tempat Tanggal Lahir</label>
                                  <input
                                      type="text"
                                      defaultValue="Jakarta, 24 Mei 1998"
                                      className="w-full px-4 py-2 mt-2 bg-white rounded text-gray-800"
                                  />
                              </div>
                              <div>
                                  <label className="block font-medium">No. Telp</label>
                                  <input
                                      type="tel"
                                      defaultValue="085673826197"
                                      className="w-full px-4 py-2 mt-2 bg-white rounded text-gray-800"
                                  />
                              </div>
                              <div>
                                  <label className="block font-medium">Alamat</label>
                                  <textarea
                                      defaultValue="Jl. Bougenville Blok C No.5, Java Residence, Kebayoran, Jakarta"
                                      className="w-full px-4 py-2 mt-2 bg-white rounded text-gray-800"
                                  />
                              </div>
                          </form>
                      </div>
                      <button
                          type="submit"
                          className="w-full px-4 py-2 mt-4 font-semibold text-white bg-green-800 rounded"
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