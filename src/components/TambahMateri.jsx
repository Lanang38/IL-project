import React, { useState } from 'react';
import { FilePlus, Plus } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AlertSimpan } from './Alert'; // Import useNavigate

const TambahMateri = () => {
  const [fileImage, setFileImage] = useState(null);
  const [filePdf, setFilePdf] = useState(null);
  const [fileVideo, setFileVideo] = useState(null);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate(); // Inisialisasi navigate

  const handleFileImageChange = (e) => {
    setFileImage(e.target.files[0]);
  };

  const handleFilePdfChange = (e) => {
    setFilePdf(e.target.files[0]);
  };

  const handleFileVideoChange = (e) => {
    setFileVideo(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleCancel = () => {
    setFileImage(null);
    setFilePdf(null);
    setFileVideo(null);
    setTitle('');
    setText('');
    navigate(-1); // Kembali ke halaman sebelumnya
  };

  const handleSubmit = async () => {
    AlertSimpan();
    setTimeout(() => {
      navigate(-1); // Go back to the previous page after the alert
    }, 1200);
  };

  return (
    <div className="max-w-43 w-full mx-auto p-5 rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Tambah Materi</h2>
      <div className="text-left p-4 border border-gray-300 rounded-lg bg-white">
        <p className="text-lg font-medium mb-5">Menambah Materi</p>

        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Ketik Judul"
          className="w-full mb-8 p-2 text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 bg-gray-100 shadow-xl"
        />

        <p className="text-lg font-medium mb-5">Unggah File Gambar</p>
        <label className="flex items-center justify-center w-full h-80 border-4 border-dashed border-gray-300 rounded-xl bg-gray-100 text-gray-500 cursor-pointer p-12 shadow-xl">
          <input type="file" onChange={handleFileImageChange} className="hidden" />
          <div className="absolute top-0 left-0 w-full h-px border-t-2 border-dashed border-gray-300 rounded-t-xl"></div>
          <div className="absolute top-2 left-2 text-yellow-500">
            <Plus className="w-6 h-6" />
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            {fileImage ? (
              <p className="text-gray-700">{fileImage.name}</p>
            ) : (
              <p className="flex flex-col items-center text-gray-500">
                <span className="text-3xl mb-2">📂</span>
                <span className="text-sm">Anda dapat seret dan lepas berkas di sini untuk menambahkan</span>
              </p>
            )}
          </div>
        </label>

        <p className="text-lg font-medium mt-8">Menambah Teks</p>
        <input
          type="text"
          value={text} // Use the 'text' state for this input
          onChange={handleTextChange} // Handle text change
          placeholder="Tambahkan Teks"
          className="w-full mt-6 p-14 text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 bg-gray-100 shadow-xl"
        />

        <p className="text-lg font-medium mt-8">Unggah File Pdf</p>
        <label className="flex items-center justify-center w-full h-80 border-4 border-dashed border-gray-300 rounded-xl bg-gray-100 text-gray-500 cursor-pointer p-12 shadow-xl mt-6">
          <input type="file" onChange={handleFilePdfChange} className="hidden" />
          <div className="text-center">
            {filePdf ? (
              <p className="text-gray-700">{filePdf.name}</p>
            ) : (
              <p className="flex flex-col items-center text-gray-500">
                <span className="text-3xl mb-2">📂</span>
                <span className="text-sm">Anda dapat seret dan lepas berkas di sini untuk menambahkan</span>
              </p>
            )}
          </div>
        </label>

        <p className="text-lg font-medium mt-8">Unggah File Video</p>
        <label className="flex items-center justify-center w-full h-80 border-4 border-dashed border-gray-300 rounded-xl bg-gray-100 text-gray-500 cursor-pointer p-12 shadow-xl mt-6">
          <input type="file" onChange={handleFileVideoChange} className="hidden" />
          <div className="text-center">
            {fileVideo ? (
              <p className="text-gray-700">{fileVideo.name}</p>
            ) : (
              <p className="flex flex-col items-center text-gray-500">
                <span className="text-3xl mb-2">📂</span>
                <span className="text-sm">Anda dapat seret dan lepas berkas di sini untuk menambahkan</span>
              </p>
            )}
          </div>
        </label>

        <div className="flex gap-3 mt-8 mb-3">
          <button
            className="flex-1 py-3 px-4 bg-red-500 text-white font-medium rounded-2xl hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            onClick={handleCancel}
          >
            Batalkan
          </button>
          <button
            className="flex-1 py-3 px-4 bg-green-500 text-white font-medium rounded-2xl hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            onClick={handleSubmit}
          >
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
};

export default TambahMateri;
