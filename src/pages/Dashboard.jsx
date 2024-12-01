import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { CircleUser } from "lucide-react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const [isMobile, setIsMobile] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const userData = {
    labels: ["Aktif", "Tidak Aktif"],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: ["#46bd84", "#dd3838"],
        hoverBackgroundColor: ["#46bd84", "#dd3838"],
        cutout: "80%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
  };

  const speakers = [
    { name: "Nunung", topic: "Tips berkebun sayuran", time: "10:00 WIB" },
    { name: "Rifky", topic: "Perawatan tanaman padi", time: "13:00 WIB" },
    { name: "Nusa", topic: "Budidaya ikan lele", time: "15:00 WIB" },
    { name: "Lilis", topic: "Pengelolaan lahan jagung", time: "17:00 WIB" },
  ];

  return (
    <div className="p-5 max-w-7xl mx-auto">
      {/* Header Section */}
      <h2 className="text-lg mb-2">Halo Azhar, Selamat datang kembali 👋</h2>
      <h1 className="text-2xl font-bold mb-5">Dashboard Anda hari ini</h1>

      {/* User Activity Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-5">
        <h2 className="text-xl font-bold mb-2">Daftar Pengguna Aktif</h2>
        <p className="text-gray-500 text-sm mb-5">Oktober - Desember 2024</p>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 flex flex-col gap-4 md:pr-10">
            <div className="flex items-center">
              <CircleUser size={60} color="#46bd84" />
              <span className="ml-4 text-lg font-bold text-green-500">
                75% Daftar Pengguna Aktif
              </span>
            </div>
            <div className="flex items-center">
              <CircleUser size={60} color="#dd3838" />
              <span className="ml-4 text-lg font-bold text-red-500">
                25% Daftar Pengguna Kurang Aktif
              </span>
            </div>
          </div>
          <div className="w-60 h-60 relative">
            <Doughnut data={userData} options={options} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="text-3xl font-bold text-green-500">75%</span>
              <br />
              <span className="text-sm text-gray-500">Keaktifan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Speakers and Calendar Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Speaker Section */}
        <div className="col-span-2 bg-green-100 p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-5">Pemateri Hari ini</h2>
          <div className="space-y-4">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="flex items-center bg-white p-4 rounded-lg shadow-sm"
              >
                <CircleUser size={30} />
                <div className="ml-4">
                  <h4 className="font-bold">{speaker.name}</h4>
                  <p>{speaker.topic}</p>
                  <p className="text-gray-500 text-sm">{speaker.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar Section */}
        {!isMobile && (
          <div className="bg-gray-50 p-5 rounded-lg shadow-md flex flex-col items-center py-20">
            <Calendar onChange={setDate} value={date} />
            <p className="mt-8 text-center text-sm">
              Hari ini: {date.toLocaleDateString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
