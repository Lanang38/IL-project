import React, { useState } from "react";

export default function CustomCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const today = new Date();
  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = getDaysInMonth(year, month);

  const changeMonth = (step) => {
    const newDate = new Date(year, month + step, 1);
    setCurrentDate(newDate);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden text-center">
      {/* Header Kalender */}
      <div className="bg-green-500 flex justify-between items-center px-8 py-5">
        <span className="text-3xl font-bold text-gray-200">
          {months[month]} {year}
        </span>
        <div className="flex gap-8">
          <button
            onClick={() => changeMonth(-1)}
            className="text-gray-200 hover:text-gray-300 text-3xl"
          >
            &#x276E; {/* Tombol panah kiri */}
          </button>
          <button
            onClick={() => changeMonth(1)}
            className="text-gray-200 hover:text-gray-300 text-3xl"
          >
            &#x276F; {/* Tombol panah kanan */}
          </button>
        </div>
      </div>

      <div className="h-4"></div> {/*ruang kosong */}

      {/* Nama Hari */}
      <div className="grid grid-cols-7 text-gray-600 mb-4 font-semibold text-xl">
        {daysOfWeek.map((day) => (
          <div key={day} className="flex justify-center items-center">{day}</div>
        ))}
      </div>

      {/* Tanggal Kalender */}
      <div className="grid grid-cols-7">
        {/* Ruang Kosong */}
        {Array.from({ length: firstDayIndex }).map((_, index) => (
          <div key={`empty-${index}`} className="h-12 flex justify-center items-center"></div>
        ))}

        {/* Tanggal Kalender */}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const isToday =
            today.getDate() === day &&
            today.getMonth() === month &&
            today.getFullYear() === year;

          return (
            <div
              key={day}
              className={`h-12 w-12 flex justify-center items-center mx-auto text-xl rounded-full cursor-pointer ${
                isToday
                  ? "bg-green-400 text-white font-bold"
                  : "text-gray-800 hover:bg-gray-200"
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
