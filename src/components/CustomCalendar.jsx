import React, { useState } from "react";

export default function CustomCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember",
  ];

  const today = new Date(); // Tanggal hari ini
  const year = currentDate.getFullYear(); // Tahun aktif pada kalender
  const month = currentDate.getMonth(); // Bulan aktif pada kalender
  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = getDaysInMonth(year, month);

  const changeMonth = (step) => {
    const newDate = new Date(year, month + step, 1);
    setCurrentDate(newDate);
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-green-500 text-white text-center py-4">
        {/* Tetap gunakan tahun hari ini */}
        <div className="text-sm font-semibold">{today.getFullYear()}</div>
        <div className="text-3xl font-bold">
          {today.toLocaleDateString("id-ID", { weekday: "short" })},{" "}
          {months[today.getMonth()]} {today.getDate()}
        </div>
      </div>

      {/* Month Selector */}
      <div className="flex justify-between items-center bg-white py-2 px-4">
        <button onClick={() => changeMonth(-1)} className="text-gray-500 text-2xl">
          &#x276E;
        </button>
        <span className="font-bold text-xl text-gray-700">
          {months[month]} {year}
        </span>
        <button onClick={() => changeMonth(1)} className="text-gray-500 text-2xl">
          &#x276F;
        </button>
      </div>

      {/* Nama Hari */}
      <div className="grid grid-cols-7 text-center bg-white text-gray-600 font-semibold py-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-sm">{day}</div>
        ))}
      </div>

      {/* Tanggal */}
      <div className="grid grid-cols-7 text-center bg-white">
        {/* Ruang kosong untuk awal bulan */}
        {Array.from({ length: (firstDayIndex + 6) % 7 }).map((_, i) => (
          <div key={i} className="h-10"></div>
        ))}

        {/* Tanggal di bulan */}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          return (
            <div
              key={day}
              className={`h-10 flex justify-center items-center cursor-pointer text-sm rounded-full ${
                isToday
                  ? "bg-green-500 text-white font-bold"
                  : "hover:bg-gray-200 text-gray-800"
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
