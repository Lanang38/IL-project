import React, { useState } from "react";
import { AlertKirim } from "../components/Alert";

function NotificationCard({ title, color, fields }) {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.id]: "" }), {})
  );

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    // Set automatic values based on category
    if (id === "kategori") {
      switch (value) {
        case "kacang tanah":
          setFormData((prevData) => ({
            ...prevData,
            namaPembina: "Pembina Kacang Tanah",
            jamMulai: "08:00",
            jamSelesai: "12:00",
          }));
          break;
        case "kacang hijau":
          setFormData((prevData) => ({
            ...prevData,
            namaPembina: "Pembina Kacang Hijau",
            jamMulai: "10:00",
            jamSelesai: "14:00",
          }));
          break;
        case "kacang merah":
          setFormData((prevData) => ({
            ...prevData,
            namaPembina: "Pembina Kacang Merah",
            jamMulai: "13:00",
            jamSelesai: "17:00",
          }));
          break;
        default:
          setFormData((prevData) => ({
            ...prevData,
            namaPembina: "",
            jamMulai: "",
            jamSelesai: "",
          }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AlertKirim("Notifikasi Terkirim", "Pemberitahuan telah berhasil dikirim.");

    // Clear form data
    setFormData(
      fields.reduce((acc, field) => ({ ...acc, [field.id]: "" }), {})
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl mx-auto">
      <div
        className={`text-white text-center py-4 rounded-t-lg bg-${color}-500`}
      >
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <div className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {fields.map((field) =>
            field.id === "judul" ? (
              <div key={field.id}>
                <label
                  className="block text-sm font-semibold text-gray-700"
                  htmlFor={field.id}
                >
                  {field.label}
                </label>
                <input
                  type="text"
                  id={field.id}
                  placeholder={field.placeholder || "Ketik disini"}
                  value={formData[field.id]}
                  onChange={handleChange}
                  className={`w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent`}
                />
              </div>
            ) : field.id === "tanggal" ? (
              <div key={field.id}>
                <label
                  className="block text-sm font-semibold text-gray-700"
                  htmlFor={field.id}
                >
                  {field.label}
                </label>
                <input
                  type="date"
                  id={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  className={`w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent`}
                />
              </div>
            ) : field.id === "kategori" ? (
              <div key={field.id}>
                <label
                  className="block text-sm font-semibold text-gray-700"
                  htmlFor={field.id}
                >
                  {field.label}
                </label>
                <select
                  id={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  className={`w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent`}
                >
                  <option value="" disabled hidden>
                    Pilih Kategori
                  </option>
                  {field.options.map((option, idx) => (
                    <option key={idx} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            ) : null
          )}

          {/* Input otomatis diisi */}
          <div className="mt-4">
            <label
              htmlFor="namaPembina"
              className="block text-sm font-semibold text-gray-700"
            >
              Nama Pembina
            </label>
            <input
              type="text"
              id="namaPembina"
              value={formData.namaPembina}
              readOnly
              className="w-full mt-1 p-3 border rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div className="flex gap-4 mt-4">
            <div className="flex-1">
              <label
                htmlFor="jamMulai"
                className="block text-sm font-semibold text-gray-700"
              >
                Jam Mulai
              </label>
              <input
                type="text"
                id="jamMulai"
                value={formData.jamMulai}
                readOnly
                className="w-full mt-1 p-3 border rounded-lg bg-gray-100 cursor-not-allowed"
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="jamSelesai"
                className="block text-sm font-semibold text-gray-700"
              >
                Jam Selesai
              </label>
              <input
                type="text"
                id="jamSelesai"
                value={formData.jamSelesai}
                readOnly
                className="w-full mt-1 p-3 border rounded-lg bg-gray-100 cursor-not-allowed"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className={`bg-${color}-500 text-white font-semibold px-20 py-3 rounded-lg text-sm transition duration-200 hover:bg-${color}-600`}
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function NotificationPage() {
  const notifications = [
    {
      title: "Notifikasi",
      color: "green",
      fields: [
        { id: "judul", label: "Judul Notifikasi", type: "text", placeholder: "Masukkan judul" },
        { id: "tanggal", label: "Tanggal", type: "date" },
        {
          id: "kategori",
          label: "Kategori",
          type: "select",
          options: [
            { label: "Kacang Tanah", value: "kacang tanah" },
            { label: "Kacang Hijau", value: "kacang hijau" },
            { label: "Kacang Merah", value: "kacang merah" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="w-full">
        <h1 className="text-3xl font-semibold mb-6 text-left">Pemberitahuan</h1>
        <div className="grid grid-cols-1 gap-10 mb-8">
          {notifications.map((notification, idx) => (
            <NotificationCard key={idx} {...notification} />
          ))}
        </div>
      </div>
    </div>
  );
}
