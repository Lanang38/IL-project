import React from "react";
import { ChevronFirst, Bell, Trash, Plus } from "lucide-react";

export default function RightSidebar({ right }) {
  return (
    <div className="w-1/6 p-3 bg-gray-50 text-gray-800">
      {/* Profile Section */}
      <div className="flex items-center mb-8">
        <img
          src="https://e7.pngegg.com/pngimages/980/304/png-clipart-computer-icons-user-profile-avatar-heroes-silhouette.png" // Replace with actual image source
          alt="Profile"
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <h3 className="text-sm font-medium">Azhar Rizqullah</h3>
        </div>
        <ul className="flex-1 px-3">{right}</ul>
      </div>

      {/* "Segera Datang" Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Segera Datang</h2>
        <div className="flex items-center space-x-2 mb-2">
          <button className="p-1.5 rounded-lg bg-gray-200 hover:bg-green-600 group">
            <Plus className="group-hover:text-white" />
          </button>
          <input
            type="text"
            placeholder="Masukkan Judul"
            className="flex-grow p-2 border border-gray-300 rounded text-sm"
          />
        </div>

        {/* "New Fitur" and "Fitur Baru" Items */}
        <div className="space-y-2">
          <div className="flex justify-between items-center p-3 rounded-lg bg-orange-100">
            <div className="flex items-center">
              <Bell className="text-orange-500 mr-2" />
              <span className="font-medium text-gray-800">New Fitur</span>
            </div>
            <button className="text-gray-600 hover:text-gray-800">
              <Trash />
            </button>
          </div>
          <div className="flex justify-between items-center p-3 rounded-lg bg-orange-100">
            <div className="flex items-center">
              <Bell className="text-orange-500 mr-2" />
              <span className="font-medium text-gray-800">Fitur Baru</span>
            </div>
            <button className="text-gray-600 hover:text-gray-800">
              <Trash />
            </button>
          </div>
        </div>
      </div>

      {/* "Sticky Notes" Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Sticky Notes</h2>
        <div className="flex items-center space-x-2 mb-4">
          <button className="p-1.5 rounded-lg bg-gray-200 hover:bg-green-600 group">
            <Plus className="group-hover:text-white" />
          </button>
          <input
            type="text"
            placeholder="Masukkan Judul"
            className="flex-grow p-2 border border-gray-300 rounded text-sm"
          />
        </div>

        {/* Sticky Note Items */}
        <div className="space-y-2">
          <div className="flex justify-between items-center p-3 rounded-lg bg-green-100">
            <span className="text-gray-800">Tambah Modul Baru</span>
            <button className="text-gray-600 hover:text-gray-800">
              <Trash />
            </button>
          </div>
          <div className="flex justify-between items-center p-3 rounded-lg bg-orange-100">
            <span className="text-gray-800">Tambah Modul Baru</span>
            <button className="text-gray-600 hover:text-gray-800">
              <Trash />
            </button>
          </div>
          <div className="flex justify-between items-center p-3 rounded-lg bg-pink-100">
            <span className="text-gray-800">Tambah Modul Baru</span>
            <button className="text-gray-600 hover:text-gray-800">
              <Trash />
            </button>
          </div>
          <div className="flex justify-between items-center p-3 rounded-lg bg-red-100">
            <span className="text-gray-800">Tambah Modul Baru</span>
            <button className="text-gray-600 hover:text-gray-800">
              <Trash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
