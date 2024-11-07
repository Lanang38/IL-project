import React, { useState } from 'react';
import { FilePlus, Plus } from 'lucide-react';
import axios from 'axios';

const EditMateri = () => {
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
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Edit Materi</h2>
      <div className="text-left p-4 border border-gray-300 rounded-lg bg-white">
        <p className="text-lg font-medium mb-5">Mengubah Materi</p>
        
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder =" Ketik Judul"
          className="w-full mb-8 p-2 text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 bg-gray-100 shadow-xl"
        />
       <p className="text-lg font-medium mb-5">Unggah File Gambar</p>
        <label className="flex items-center justify-center w-full h-80 border-4 border-dashed border-gray-300 rounded-xl bg-gray-100 text-gray-500 cursor-pointer p-12 shadow-xl ">
            <input type="file" onChange={handleFileChange} className="hidden" />
            {/* Dashed Line and Folder Icon */}
            <div className="absolute top-0 left-0 w-full h-px border-t-2 border-dashed border-gray-300 rounded-t-xl"></div>
            <div className="absolute top-2 left-2 text-yellow-500">
                <Plus className="w-6 h-6" />
            </div>
            {/* Centered Text */}
            <div className="flex flex-col items-center justify-center text-center">
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
        <p className="text-lg font-medium mt-8 ">Menambah Teks</p>

        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder ="Tambahkan Teks"
          className="w-full mt-6 p-14 text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 bg-gray-100 shadow-xl"
        />
       <p className="text-lg font-medium mt-8">Unggah File Pdf</p>
        <label className="flex items-center justify-center w-full h-80 border-4 border-dashed border-gray-300 rounded-xl bg-gray-100 text-gray-500 cursor-pointer p-12 shadow-xl mt-6 ">
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
        
        <p className="text-lg font-medium mt-8">Unggah File Video</p>
        <label className="flex items-center justify-center w-full h-80 border-4 border-dashed border-gray-300 rounded-xl bg-gray-100 text-gray-500 cursor-pointer p-12 shadow-xl mt-6 ">
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

export default EditMateri;
