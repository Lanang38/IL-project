// SendNotifPage.js
import React from 'react';
import NotificationCard from '../components/Notificationcard';

export default function Notifikasi() {
  return (
    <div className="flex flex-col items-start py-10 space-y-10 px-6"> {/* Ubah items-center ke items-start dan tambahkan padding kiri */}
      <h1 className="text-3xl font-semibold mb-4">Kirim Notifikasi</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <NotificationCard
          title="Peringatan!!!"
          placeholder="Keterangan Notifikasi"
          bgColor="bg-red-500"
          btnColor="bg-red-700"
        />
        <NotificationCard
          title="Pengingat Jadwal"
          placeholder="Keterangan Jadwal"
          bgColor="bg-yellow-500"
          btnColor="bg-yellow-700"
        />
        <NotificationCard
          title="Umum"
          placeholder="Isi Pesan"
          bgColor="bg-blue-500"
          btnColor="bg-blue-700"
        />
        <NotificationCard
          title="Berhasil"
          placeholder="Informasi Keberhasilan"
          bgColor="bg-green-500"
          btnColor="bg-green-700"
        />
      </div>

      {/* Bagian Tambahan untuk Daftar Notifikasi */}
      <div className="w-full max-w-4xl p-4 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4 text-left">Notification</h2>
        <div className="flex flex-wrap gap-3">
          <span className="bg-red-500 text-white px-4 py-2 rounded-full">Notifikasi Peringatan</span>
          <span className="bg-yellow-500 text-white px-4 py-2 rounded-full">Notifikasi Pengingat</span>
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full">Notifikasi Umum</span>
          <span className="bg-green-500 text-white px-4 py-2 rounded-full">Notifikasi Berhasil</span>
        </div>
      </div>
    </div>
  );
}
