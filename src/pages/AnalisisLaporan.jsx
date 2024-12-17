import React, { useState, useEffect } from "react";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
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
import axios from "axios";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

export default function AnalisisLaporan() {
  // State for User Data (Total Users and Mentors)
  const [userData, setUserData] = useState({
    pieData: {
      labels: [],
      datasets: [],
    },
    doughnutData: {
      labels: [],
      datasets: [],
    },
    barData: {
      labels: [],
      datasets: [],
    },
    kategoriBarData: {
      labels: [],
      datasets: [],
    },
  });

  // Fetch data from backend when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/laporan/chart");
        setUserData(response.data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Bar chart options
  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 20,
        ticks: {
          stepSize: 10,
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

  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold mb-4">Analisis dan Laporan</h1>

      {/* Statistik Jumlah Mentor dan User */}
      <div className="flex flex-wrap justify-between gap-5 mb-8">
        {/* Mentor Doughnut Chart */}
        <div className="flex-1 min-w-[300px] bg-white p-4 rounded-lg shadow-md">
          <div className="mb-1 text-center text-lg font-semibold">
            <h1>Pengguna dan Pembina</h1>
          </div>
          <div className="w-full h-72 mb-4 ">
            <Pie
              data={userData.pieData}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>

        {/* User Doughnut Chart */}
        <div className="flex-1 min-w-[300px] bg-white p-4 rounded-lg shadow-md">
          <div className="mb-1 text-center text-lg font-semibold">
            <h1>Kategori dan Modul</h1>
          </div>
          <div className="w-full h-72 mb-4">
            <Doughnut
              data={userData.doughnutData}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>
      </div>

      {/* Grafik Bar Jumlah Mentor dan User */}
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="font-bold text-lg">Grafik Batang Jumlah Modul per Kategori </h3>
        <div className="h-96">
          <Bar data={userData.kategoriBarData} options={barOptions} />
        </div>
        <div className="flex justify-between gap-5 mt-5">
          <div className="text-center bg-green-800 p-4 rounded-lg w-full max-w-[500px] text-white">
            <h4>Jumlah Pengguna</h4>
            <p className="text-2xl font-bold">{userData.barData.datasets[0]?.data[0]}</p>
          </div>
          <div className="text-center bg-green-800 p-4 rounded-lg w-full max-w-[500px] text-white">
            <h4>Jumlah Pembina</h4>
            <p className="text-2xl font-bold">{userData.barData.datasets[0]?.data[1]}</p>
          </div>
          <div className="text-center bg-green-800 p-4 rounded-lg w-full max-w-[500px] text-white">
            <h4>Jumlah Kategori</h4>
            <p className="text-2xl font-bold">{userData.barData.datasets[0]?.data[2]}</p>
          </div>
          <div className="text-center bg-green-800 p-4 rounded-lg w-full max-w-[500px] text-white">
            <h4>Jumlah Modul</h4>
            <p className="text-2xl font-bold">{userData.barData.datasets[0]?.data[3]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
