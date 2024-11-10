import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { CircleUser } from "lucide-react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }

      if (window.innerWidth <= 684) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    // Initial check
    handleResize();

    // Event listener untuk perubahan ukuran layar
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

  const [date, setDate] = React.useState(new Date());

  return (
    <div style={styles.dashboard}>
      <h2 style={styles.welcomeText}>Halo Azhar, Selamat datang kembali 👋</h2>
      <h1 style={styles.headerText}>Dashboard Anda hari ini</h1>

      <div style={styles.gridContainer}>
        {/* Hanya tampilkan userActivityContainer dan chartContainer jika bukan mobile */}
        <div style={styles.userActivityContainer}>
          <h2 style={styles.sectionHeader}>Daftar Pengguna Aktif</h2>
          <p style={styles.sectionSubtitle}>Oktober - Desember 2024</p>
          <div style={styles.userActivityContent}>
            <div style={styles.userStats}>
              <div style={styles.userStat}>
                <CircleUser size={60} color="#46bd84" />
                <span style={{ ...styles.statText, color: "#46bd84" }}>75% Daftar Pengguna Aktif</span>
              </div>
              <div style={styles.userStat}>
                <CircleUser size={60} color="#dd3838" />
                <span style={{ ...styles.statText, color: "#dd3838" }}>25% Daftar Pengguna Kurang Aktif</span>
              </div>
            </div>
            {/* Tampilkan chart hanya jika layar lebih besar dari 684px */}
            {!isSmallScreen && (
              <div style={styles.chartContainer}>
                <Doughnut data={userData} options={options} />
                <div style={styles.chartCenterText}>
                  <span style={styles.percentageText}>75%</span>
                  <br />
                  <span style={styles.labelText}>Keaktifan</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div style={styles.todaySpeakers}>
          <h2 style={styles.sectionHeader}>Pemateri Hari ini</h2>
          <div>
            {speakers.map((speaker, index) => (
              <div key={index} style={styles.speakerItem}>
                <CircleUser size={30} />
                <div style={styles.speakerInfo}>
                  <h4>{speaker.name}</h4>
                  <p>{speaker.topic}</p>
                  <p>{speaker.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hanya tampilkan kalender jika bukan perangkat mobile */}
        {!isMobile && (
          <div style={styles.calendarContainer}>
            <Calendar onChange={setDate} value={date} />
            <p style={styles.dateText}>Hari ini: {date.toLocaleDateString()}</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  dashboard: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  welcomeText: {
    fontSize: "1.5rem",
    marginBottom: "10px",
  },
  headerText: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  gridContainer: {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "1fr", // Default for small screens
  },
  userActivityContainer: {
    gridColumn: "1 / span 2",
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  },
  sectionHeader: {
    fontWeight: "bold",
    fontSize: "28px",
    marginBottom: "5px",
  },
  sectionSubtitle: {
    color: "#888",
    fontSize: "16px",
    marginBottom: "20px",
  },
  userActivityContent: {
    display: "flex",
    alignItems: "center",
  },
  userStats: {
    flex: 1,
    paddingRight: "50px",
  },
  userStat: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  statText: {
    marginLeft: "20px",
    fontSize: "18px",
    fontWeight: "bold",
  },
  chartContainer: {
    width: "300px",
    height: "230px",
    position: "relative",
  },
  chartCenterText: {
    position: "absolute",
    top: "55%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
  percentageText: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#46bd84",
  },
  labelText: {
    fontSize: "14px",
    color: "#888",
  },
  todaySpeakers: {
    backgroundColor: "#e0f2e0",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "100%", // Memperlebar ke kanan
    height: "auto",
  },
  speakerItem: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "8px",
    marginTop: "10px",
    width: "100%",
  },
  speakerInfo: {
    marginLeft: "10px",
  },
  calendarContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    position: "relative",
  },
  dateText: {
    marginTop: "30px",
    alignSelf: "center",
    textAlign: "center",
  },
};
