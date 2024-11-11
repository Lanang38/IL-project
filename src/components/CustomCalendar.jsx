
import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function CustomCalendar() {
  const [date, setDate] = React.useState(new Date());

  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Calendar onChange={setDate} value={date} />
      <p style={{ marginTop: "10px", textAlign: "center" }}>
        Hari ini: {date.toLocaleDateString()}
      </p>
    </div>
  );
}