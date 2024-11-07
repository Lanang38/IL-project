import React, { useState } from 'react';
import { FilePlus } from 'lucide-react';
import axios from 'axios';

const TambahMateri = () => {
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
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Tambah Materi</h2>
      <div className="text-left p-4 border border-gray-300 rounded-lg bg-white">
        <p className="text-lg font-medium mb-5">Menambahkan Materi</p>
        
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder ="Tambahkan Judul"
          className="w-full mb-8 p-2 text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 bg-gray-100 shadow-xl"
        />

        <label className="flex items-center justify-center w-full h-80 border-2 border-solid border-gray-300 rounded-xl bg-gray-100 text-gray-500 cursor-pointer p-12 shadow-xl ">
          <input type="file" onChange={handleFileChange} className="hidden" />
          <div className="text-center">
            {file ? (
              <p className="text-gray-700">{file.name}</p>
            ) : (
              <p className="flex items-center justify-center text-gray-500">
                <FilePlus className="w-6 h-6 mr-2" />
                Tambahkan Gambar / video Materi
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
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default TambahMateri;
