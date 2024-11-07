// Dashboard.jsx
import React from "react";
import UserActivity from "../components/UserActivity";
import TodaySpeakers from "../components/TodaySpeakers";
import CustomCalendar from "../components/CustomCalendar";

export default function Dashboard() {
  return (
    <div style={{ padding: "20px", display: "grid", gap: "20px" }}>
      <h2> Halo KING SIGMA RAMA selamat datang kembali</h2>
      <h1 className="text-3xl font-semibold mb-4">Dashboard Anda Hari Ini</h1>

      {/* Grid container untuk layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "auto 1fr",
          gap: "20px",
        }}
      >
        {/* Daftar Pengguna Aktif */}
        <UserActivity />

        {/* Kontainer grid untuk bagian bawah */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "20px",
          }}
        >
          {/* Pemateri Hari Ini */}
          <TodaySpeakers />

          {/* Kalender */}
          <CustomCalendar />
        </div>
      </div>
    </div>
  );
}
