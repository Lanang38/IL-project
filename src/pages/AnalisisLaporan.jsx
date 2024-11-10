import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { CircleUser } from "lucide-react"; // Import icon from lucide-react

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

export default function AnalisisLaporan() {
  const barData = {
    labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni"],
    datasets: [
      {
        label: "Mentor",
        data: [45, 60, 30, 80, 50, 75],
        backgroundColor: "rgba(19, 163, 96, 1)",
        barThickness: 15,
        borderRadius: 5,
      },
      {
        label: "Pengguna",
        data: [70, 55, 85, 60, 90, 65],
        backgroundColor: "rgba(197, 253, 206, 1)",
        barThickness: 15,
        borderRadius: 5,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          padding: 20,
        },
      },
    },
  };

  const mentorData = {
    labels: ["Aktif", "Tidak Aktif"],
    datasets: [
      {
        data: [85, 15],
        backgroundColor: ["rgba(70, 189, 132, 0.7)", "rgba(221, 56, 56, 0.7)"],
        hoverBackgroundColor: ["rgba(70, 189, 132, 0.9)", "rgba(221, 56, 56, 0.9)"],
        cutout: "70%",
      },
    ],
  };

  const userData = {
    labels: ["Aktif", "Tidak Aktif"],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: ["rgba(70, 189, 132, 0.7)", "rgba(221, 56, 56, 0.7)"],
        hoverBackgroundColor: ["rgba(70, 189, 132, 0.9)", "rgba(221, 56, 56, 0.9)"],
        cutout: "70%",
      },
    ],
  };
  
  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold mb-4">Analisis dan Laporan</h1>

      {/* Statistik Jumlah Mentor dan User */}
      <div className="flex flex-wrap justify-between gap-5 mb-8">
        {/* Mentor Doughnut Chart */}
        <div className="flex-1 min-w-[430px] bg-white p-4 rounded-lg shadow-md">
          <div className="mb-5 text-left text-lg font-semibold">
            <h1>Daftar Pembina Aktif</h1>
            <p className="text-base">Oktober 2024</p>
          </div>
          <div className="w-full h-72">
            <Doughnut data={mentorData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
          <div className="mt-10 flex justify-center gap-20 mb-5">
            <div className="flex items-center">
              <CircleUser size={50} color="green" className="mr-2" />
              <div>
                <p className="font-bold">Aktif</p>
                <h3>85%</h3>
              </div>
            </div>
            <div className="flex items-center">
              <CircleUser size={50} color="red" className="mr-2" />
              <div>
                <p className="font-bold">Tidak Aktif</p>
                <h3>15%</h3>
              </div>
            </div>
          </div>
        </div>

        {/* User Doughnut Chart */}
        <div className="flex-1 min-w-[430px] bg-white p-4 rounded-lg shadow-md">
          <div className="mb-5 text-left text-lg font-semibold">
            <h1>Daftar Pengguna Aktif</h1>
            <p className="text-base">Oktober 2024</p>
          </div>
          <div className="w-full h-72">
            <Doughnut data={userData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
          <div className="mt-10 flex justify-center gap-20 mb-5">
            <div className="flex items-center">
              <CircleUser size={50} color="green" className="mr-2" />
              <div>
                <p className="font-bold">Aktif</p>
                <h3>75%</h3>
              </div>
            </div>
            <div className="flex items-center">
              <CircleUser size={50} color="red" className="mr-2" />
              <div>
                <p className="font-bold">Tidak Aktif</p>
                <h3>25%</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grafik Bar Jumlah Mentor dan User */}
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="font-bold text-lg">Jumlah Pembina dan Pengguna dalam 6 Bulan Terakhir</h3>
        <div className="h-96">
          <Bar data={barData} options={barOptions} />
        </div>
        <div className="flex justify-between gap-5 mt-5">
          <div className="text-center bg-green-800 p-4 rounded-lg w-full max-w-[500px] text-white">
            <h4>Jumlah Pembina</h4>
            <p className="text-2xl font-bold">45</p>
          </div>
          <div className="text-center bg-green-800 p-4 rounded-lg w-full max-w-[500px] text-white">
            <h4>Jumlah Pengguna</h4>
            <p className="text-2xl font-bold">123</p>
          </div>
        </div>
      </div>
    </div>
  );
}
