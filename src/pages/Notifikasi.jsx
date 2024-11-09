import React, { useState } from 'react';
import { AlertKirim } from '../components/Alert';

function NotificationCard({ title, color, fields }) {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.id]: '' }), {})
  );

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AlertKirim("Notifikasi Terkirim", "Pemberitahuan telah berhasil dikirim.");

    // Clear form data
    setFormData(fields.reduce((acc, field) => ({ ...acc, [field.id]: '' }), {}));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg w-full">
      <div className={`bg-${color}-500 text-white text-center py-4 rounded-t-lg`}>
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <div key={field.id}>
              <label className="block text-sm font-semibold text-gray-700" htmlFor={field.id}>
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.id}
                  placeholder="Ketik disini"
                  value={formData[field.id]}
                  onChange={handleChange}
                  className={`w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-${color}-400 h-24 resize-none`}
                />
              ) : (
                <input
                  type="text"
                  id={field.id}
                  placeholder="Ketik disini"
                  value={formData[field.id]}
                  onChange={handleChange}
                  className={`w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-${color}-400`}
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className={`w-full bg-${color}-500 text-white font-semibold py-2 mt-4 rounded-lg hover:bg-${color}-600 transition duration-200`}
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
}

export default function NotificationPage() {
  const notifications = [
    {
      title: 'Peringatan!!!',
      color: 'red',
      fields: [
        { id: 'judul', label: 'Judul Notifikasi', type: 'text' },
        { id: 'keterangan', label: 'Keterangan Notifikasi', type: 'textarea' },
      ],
    },
    {
      title: 'Pengingat Jadwal',
      color: 'yellow',
      fields: [
        { id: 'judul', label: 'Judul Notifikasi', type: 'text' },
        { id: 'tanggal', label: 'Tanggal dan waktu', type: 'textarea' },
      ],
    },
    {
      title: 'Umum',
      color: 'blue',
      fields: [
        { id: 'judul', label: 'Judul Notifikasi', type: 'text' },
        { id: 'keterangan', label: 'Keterangan Notifikasi', type: 'textarea' },
      ],
    },
    {
      title: 'Berhasil',
      color: 'green',
      fields: [
        { id: 'judul', label: 'Judul Notifikasi', type: 'text' },
        { id: 'ucapan', label: 'Ucapan Selamat', type: 'textarea' },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-5 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        {/* Title */}
        <h1 className="text-3xl font-semibold mb-6 text-left">Pemberitahuan</h1>

        {/* Notification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          {notifications.map((notification, index) => (
            <NotificationCard
              key={index}
              title={notification.title}
              color={notification.color}
              fields={notification.fields}
            />
          ))}
        </div>

        {/* Additional Section for Notification Legend */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Keterangan</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full">Pemberitahuan Peringatan</span>
            <span className="bg-yellow-500 text-white px-4 py-2 rounded-full">Pemberitahuan Pengingat</span>
            <span className="bg-blue-500 text-white px-4 py-2 rounded-full">Pemberitahuan Umum</span>
            <span className="bg-green-500 text-white px-4 py-2 rounded-full">Pemberitahuan Berhasil</span>
          </div>
        </div>
      </div>
    </div>
  );
}
