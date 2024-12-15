import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import CustomCalendar from "../components/CustomCalendar";



ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const [isMobile, setIsMobile] = useState(false);
  const [date, setDate] = useState(new Date());
  const [userData, setUserData] = useState({
    pieData: {
      labels: ["Jumlah Pengguna", "Jumlah Mentor"],
      datasets: [],
    },
    doughnutData: {
      labels: [],
      datasets: [],
    },
  });
  const [speakers, setSpeakers] = useState([]); // State untuk data mentor

  // Helper untuk memformat waktu
  const formatTime = (time) => {
    return time?.slice(0, 5); // Mengambil hanya jam dan menit (hh:mm)
  };

  // Helper untuk memperpendek link Zoom
  const shortenZoomLink = (link) => {
    return link.length > 50 ? link.slice(0, 50) + ".." : link;
  };

  // Handle resize untuk mendeteksi apakah tampilan mobile atau desktop
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

  // Fetch data dari backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/home");
        setUserData(response.data); // Data untuk chart
        setSpeakers(response.data.mentorData); // Data mentor
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="p-5 max-w-7xl mx-auto">
      <h2 className="text-lg mb-2">Haloo, Selamat datang kembali 👋</h2>
      <h1 className="text-2xl font-bold mb-5">Dashboard Anda hari ini</h1>

      {/* Statistik Jumlah Mentor dan User */}
      <div className="flex flex-wrap justify-between gap-5 mb-8">
        <div className="flex-1 min-w-[300px] bg-white p-4 rounded-lg shadow-md">
          <div className="mb-1 text-center text-lg font-semibold">
            <h1> Pengguna dan Pembina</h1>
          </div>
          <div className="w-full h-72 mb-4">
            <Pie
              data={userData.pieData}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>
        <div className="flex-1 min-w-[300px] bg-white p-4 rounded-lg shadow-md">
          <div className="mb-1 text-center text-lg font-semibold">
            <h1> Kategori dan Modul</h1>
          </div>
          <div className="w-full h-72 mb-4">
            <Doughnut
              data={userData.doughnutData}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Data Pemateri */}
        <div className="col-span-2 bg-green-100 p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-5">Pemateri</h2>
          <div className="space-y-4 max-h-[450px] overflow-hidden hover:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="flex items-center bg-white p-4 rounded-lg shadow-sm"
              >
                <img
                  src={speaker.foto}
                  alt={speaker.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-bold">{speaker.name}</h4>
                  <p>
                    <a
                      href={speaker.zoomLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 "
                    >
                      {shortenZoomLink(speaker.zoomLink)}
                    </a>
                  </p>
                  <p className="text-black text-sm">
                    {formatTime(speaker.startTime)} -{" "}
                    {formatTime(speaker.endTime)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
          {/* Kalender */}
          <div className="bg-gray-50 p-5 rounded-lg shadow-md flex flex-col items-center py-20">
            <CustomCalendar />
          </div>
      </div>
      
    </div>
  );
}
