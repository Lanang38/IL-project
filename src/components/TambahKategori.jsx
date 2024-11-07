import React, { useState } from 'react';
import { FilePlus } from 'lucide-react';
import axios from 'axios';

const TambahKategori = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCancel = () => {
    setFile(null);
    setTitle('');
  };

  const handleSubmit = async () => {
    if (!file || !title) {
      alert('Please add a file and title before submitting');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully');
      console.log(response.data);
    } catch (error) {
      alert('Failed to upload file');
      console.error(error);
    }
  };

  return (
    <div className="max-w-43 w-full mx-auto p-5  rounded-lg ">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Tambah Kategori</h2>
      <div className="text-left p-4 border border-gray-300 rounded-lg bg-white">
        <p className="text-lg font-medium mb-2">Menambahkan Kategori</p>
        
        <label className="flex items-center justify-center w-full h-80 border-4 border-dashed border-gray-300 rounded-xl bg-gray-100 text-gray-500 cursor-pointer p-12 shadow-xl">
          <input type="file" onChange={handleFileChange} className="hidden" />
          <div className="text-center">
            {file ? (
              <p className="text-gray-700">{file.name}</p>
            ) : (
              <p className="flex flex-col items-center text-gray-500">
              <span className="text-3xl mb-2">📂</span> {/* Placeholder for folder icon */}
              <span className="text-sm">Anda dapat seret dan lepas berkas di sini untuk menambahkan</span>
          </p>
            )}
          </div>
        </label>
        
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder ="Tambahkan Judul"
          className="w-full mt-8 p-2 text-gray-700 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 bg-gray-100 shadow-xl"
        />

            
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder ="Deskripsi Singkat"
          className="w-full mt-8 p-8 text-gray-700 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 bg-gray-100 shadow-xl"
        />
        
        <div className="flex gap-3 mt-8 mb-3">
          <button
            className="flex-1 py-3 px-4 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            onClick={handleCancel}
          >
            Batalkan
          </button>
          <button
            className="flex-1 py-3 px-4 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            onClick={handleSubmit}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default TambahKategori;
