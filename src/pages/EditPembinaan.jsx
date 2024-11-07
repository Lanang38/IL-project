import React from "react";

function EditPage() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Judul */}
      <h1 className="text-3xl font-semibold mb-4">Edit</h1>

      <div className="bg-green-500 p-6 rounded-lg shadow-md mb-8 space-y-4 text-white relative">
        {/* Bagian Profil */}
        <div className="flex items-center mb-8">
          <img
            src="https://via.placeholder.com/80" // Ganti dengan sumber gambar profil yang sesuai
            alt="Profil"
            className="w-20 h-20 rounded-full mr-6"
          />
          <div>
            <h3 className="text-xl font-semibold">Azharrrrrrrrrr</h3>
            <p className="text-lg">azhar24@gmail.com</p>
          </div>
          <button className="ml-auto text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 4.232l4.536 4.536M14.14 4.933l4.536 4.536M4.636 14.14l9.06-9.06a1.5 1.5 0 112.122 2.122l-9.06 9.06a4.5 4.5 0 01-3.196 1.323H2.5v-.958a4.5 4.5 0 011.323-3.196z"
              />
            </svg>
          </button>
        </div>

        {/* Formulir Edit */}
        <div className="space-y-6">
          <label className="block text-lg">
            <span className="text-white">Nama Lengkap</span>
            <input
              type="text"
              defaultValue="Azhar"
              className="mt-2 block w-full bg-white border border-gray-300 rounded-md p-3 text-black text-lg"
            />
          </label>
          <label className="block text-lg">
            <span className="text-white">Email</span>
            <input
              type="email"
              defaultValue="Harrrrr@gmail.com"
              className="mt-2 block w-full bg-white border border-gray-300 rounded-md p-3 text-black text-lg"
            />
          </label>
          <label className="block text-lg">
            <span className="text-white">No. Telp</span>
            <input
              type="text"
              defaultValue="08981335730"
              className="mt-2 block w-full bg-white border border-gray-300 rounded-md p-3 text-black text-lg"
            />
          </label>
          <label className="block text-lg">
            <span className="text-white">Jadwal Coaching</span>
            <textarea
              className="mt-2 block w-full bg-white border border-gray-300 rounded-md p-3 text-black text-lg"
              rows="4"
              defaultValue="https://zoom.com\nSenin, 4 November 2024\nMateri Kacang Tanah"
            />
          </label>
        </div>
      </div>

      {/* Tombol Simpan */}
      <button className="mt-8 w-1/3 bg-green-600 text-white font-bold py-3 text-lg rounded-lg hover:bg-green-700">
        Simpan
      </button>
    </div>
  );
}

export default EditPage;
