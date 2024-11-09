
import React from "react";
import Calendar from "react-calendar"; // Mengimpor komponen Calendar
import 'react-calendar/dist/Calendar.css'; // Mengimpor stylesheet untuk kalender

// Komponen CustomCalendar untuk menampilkan kalender dengan tanggal saat ini
export default function CustomCalendar() {
  // Menyimpan state tanggal yang akan berubah saat pengguna memilih tanggal baru
  const [date, setDate] = React.useState(new Date());

  return (
    <div
    // Styling untuk container utama
      style={{
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Dengan properti onChange yang memanggil setDate untuk memperbarui tanggal */}
      <Calendar onChange={setDate} value={date} />
      {/* Nampilin tanggal yang dipilih */}
      <p style={{ marginTop: "10px", textAlign: "center" }}>
        Hari ini: {date.toLocaleDateString()}
      </p>
    </div>
  );
}