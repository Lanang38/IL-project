import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { CircleUser } from "lucide-react";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function UserActivity() {
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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ fontWeight: "bold", marginBottom: "5px", fontSize: "28px" }}>Daftar Pengguna Aktif</h2>
      <p style={{ color: "#888", fontSize: "16px", marginBottom: "20px" }}>Juli - Desember 2024</p>

      <div style={{ display: "flex", alignItems: "center" }}>
    
        <div style={{ flex: 1, paddingRight: "200px" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
            <CircleUser size={50} color="#46bd84" />
            <span style={{ marginLeft: "30px", color: "#46bd84", fontSize: "20px", fontWeight: "bold" }}>75% Daftar Pengguna Aktif</span>
          </div>
          
          <div style={{ display: "flex", alignItems: "center",marginBottom: "15px" }}>
            <CircleUser size={65} color="#dd3838" />
            <span style={{ marginLeft: "30px", color: "#dd3838", fontSize: "20px", fontWeight: "bold" }}>25% Daftar Pengguna Kurang Aktif</span>
          </div>
        </div>

        {/* Donut Chart */}
        <div style={{ width: "300px", height: "230px", position: "relative" }}> 
          <Doughnut data={userData} options={options} />
          <div
            style={{
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "36px", // Ukuran font di tengah
              fontWeight: "bold",
              color: "#46bd84",
              textAlign: "center",
            }}
          >
            75%
            <br />
            <span style={{ fontSize: "14px", color: "#888" }}>Keaktifan</span>
          </div>
        </div>
      </div>
    </div>
  );
}
