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
import { CircleUser, User, UserCheck } from "lucide-react"; // Import icons from lucide-react

// Registrasi modul Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

export default function AnalisisLaporan() {
  // Data untuk Grafik Bar (Jumlah Mentor dan User)
  const barData = {
    labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni"],
    datasets: [
      {
        label: "Mentor",
        data: [45, 60, 30, 80, 50, 75],
        backgroundColor: "rgba(19, 163, 96, 1)",
        barThickness: 15, // Lebar bar
        borderRadius: 5, // Sudut membulat bar
      },
      {
        label: "Pengguna",
        data: [70, 55, 85, 60, 90, 65],
        backgroundColor: "rgba(197, 253, 206, 1)",
        barThickness: 15, // Lebar bar
        borderRadius: 5, // Sudut membulat bar
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
          stepSize: 20, // Jarak antar label sumbu y
        },
      },
      x: {
        grid: {
          display: false, // Menghilangkan garis grid horizontal
        },
      },
    },
    plugins: {
      legend: {
        position: "top", // Posisi legend
        labels: {
          padding: 20, // Jarak antara label legend
        },
      },
    },
  };

  // Data untuk Grafik Doughnut (Statistik Jumlah Mentor)
  const mentorData = {
    labels: ["Aktif", "Tidak Aktif"],
    datasets: [
      {
        data: [85, 15],
        backgroundColor: ["rgba(70, 189, 132, 0.7)", "rgba(221, 56, 56, 0.7)"],
        hoverBackgroundColor: ["rgba(70, 189, 132,0.9)", "rgba(221, 56, 56, 0.9)"],
        cutout: "70%", // Ukuran lubang doughnut
      },
    ],
  };

  // Data untuk Grafik Doughnut (Statistik Jumlah User)
  const userData = {
    labels: ["Aktif", "Tidak Aktif"],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: ["rgba(70, 189, 132, 0.7)", "rgba(221, 56, 56, 0.7)"],
        hoverBackgroundColor: ["rgba(70, 189, 132, 0.9)", "rgba(221, 56, 56, 0.9)"],
        cutout: "70%", // Ukuran lubang doughnut
      },
    ],
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1 className="text-3xl font-semibold mb-4">Laporan dan analisis</h1>

      {/* Statistik Jumlah Mentor dan User */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            flex: "1 1 430px", // Flex item, responsive width
            textAlign: "center",
            backgroundColor: "#f9f9f9",
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ textAlign: "left", margin: "20px", fontSize: "18px" }}>
            <div style={{ fontWeight: "bold" }}>
              <h1>Daftar Mentor Aktif</h1>
            </div>
            <p>Oktober 2024</p>
          </div>
          <div style={{ width: "100%", height: "300px" }}>
            <Doughnut data={mentorData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
          {/* User Activity Stats inside the Doughnut */}
          <div className="user-activity-stats" style={{ marginTop: "20px" }}>
            <div className="user-activity-stat active" style={{ marginBottom: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div className="icon" style={{ marginRight: "10px" }}>
                <CircleUser size={40} color="green" /> {/* Use lucide-react icon */}
              </div>
              <div className="details">
                <h3>85%</h3>
                <p style={{ fontWeight: "bold" }}>Mentor Aktif</p>
              </div>
            </div>
            <div className="user-activity-stat inactive" style={{ marginBottom: "10px", display: "flex", alignItems: "center", justifyContent: "center"  }}>
              <div className="icon" style={{ marginRight: "10px" }}>
                <CircleUser size={40} color="red" /> {/* Use lucide-react icon */}
              </div>
              <div className="details">
                <h3>15%</h3>
                <p style={{ fontWeight: "bold" }}>Mentor Tidak Aktif</p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            flex: "1 1 430px", // Flex item, responsive width
            textAlign: "center",
            backgroundColor: "#f9f9f9",
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ textAlign: "left", margin: "20px", fontSize: "18px" }}>
            <div style={{ fontWeight: "bold" }}>
              <h1>Daftar Pengguna Aktif</h1>
            </div>
            <p>Oktober 2024</p>
          </div>
          <div style={{ width: "100%", height: "300px" }}>
            <Doughnut data={userData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
          {/* User Activity Stats inside the Doughnut */}
          <div className="user-activity-stats" style={{ marginTop: "20px" }}>
            <div className="user-activity-stat active" style={{ marginBottom: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div className="icon" style={{ marginRight: "10px" }}>
                <CircleUser size={40} color="green" /> {/* Use lucide-react icon */}
              </div>
              <div className="details">
                <h3>75%</h3>
                <p style={{ fontWeight: "bold" }}>User Aktif</p>
              </div>
            </div>
            <div className="user-activity-stat inactive" style={{ marginBottom: "10px", display: "flex", alignItems: "center", justifyContent: "center"  }}>
              <div className="icon" style={{ marginRight: "10px" }}>
                <CircleUser size={40} color="red" /> {/* Use lucide-react icon */}
              </div>
              <div className="details">
                <h3>25%</h3>
                <p style={{ fontWeight: "bold" }}>User Tidak Aktif</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grafik Bar Jumlah Mentor dan User */}
      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3>Jumlah Mentor dan User dalam 6 Bulan Terakhir</h3>
        <div style={{ height: "300px" }}>
          <Bar data={barData} options={barOptions} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              backgroundColor: "#e0f2e0",
              padding: "10px",
              borderRadius: "8px",
              width: "400px",
            }}
          >
            <h4>Jumlah Mentor</h4>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>45 Mentor</p>
          </div>
          <div
            style={{
              textAlign: "center",
              backgroundColor: "#e0f2e0",
              padding: "10px",
              borderRadius: "8px",
              width: "400px",
            }}
          >
            <h4>Jumlah User</h4>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>123 Pengguna</p>
          </div>
        </div>
      </div>
    </div>
  );
}
