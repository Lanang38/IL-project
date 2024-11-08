import React from "react";
import { CircleUser } from "lucide-react";

const TodaySpeakers = () => {
  const speakers = [
    { name: "KING SIGMA RAMA", topic: "MEMBUAT PULAU" },
    { name: "AZHAR", topic: "MEMBANGUNGKAN KING" },
    { name: "LANANG", topic: "MENJADI SIGMA" },
    { name: "DANIEL", topic: "Menanam benih" },
  ];

  return (
    <div
      style={{
        backgroundColor: "#e0f2e0",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ fontWeight: "bold", marginBottom: "5px", fontSize: "28px" }}>Pemateri Hari ini</h2>
      <div>
        {speakers.map((speaker, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "8px",
              marginTop: index === 0 ? "0" : "10px",
            }}
          >
            <CircleUser size={30} />
            <div style={{ marginLeft: "10px" }}>
              <h4>{speaker.name}</h4>
              <p>Materi: {speaker.topic}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaySpeakers;
