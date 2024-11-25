import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChevronFirst, Bell, Trash2, Plus } from "lucide-react";

export default function RightSidebar({ right }) {
  const [newFeature, setNewFeature] = useState("");
  const [features, setFeatures] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState([]);

  // Mengambil data fitur dan catatan saat komponen pertama kali dimuat
  useEffect(() => {
    fetchFeatures();
    fetchNotes();
  }, []);

  // Fungsi untuk GET fitur
  const fetchFeatures = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/fitur");
      console.log("Features fetched:", response.data);
      setFeatures(response.data);
    } catch (error) {
      console.error("Error fetching features:", error.response || error.message);
    }
  };

  // Fungsi untuk POST fitur baru
  const addFeature = async () => {
    if (!newFeature.trim()) return;
    try {
      await axios.post("http://localhost:3000/api/v1/fitur", {
        isi_fitur: newFeature,
      });
      setNewFeature("");
      fetchFeatures();
    } catch (error) {
      console.error("Error adding feature:", error.response || error.message);
    }
  };

  // Fungsi untuk DELETE fitur
  const deleteFeature = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/v1/fitur/${id}`);
      console.log("Feature deleted:", response.data);
      fetchFeatures(); // Refresh data fitur
    } catch (error) {
      console.error("Error deleting feature:", error.response || error.message);
    }
  };

  // Fungsi untuk GET catatan
  const fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/catatan");
      console.log("Notes fetched:", response.data);
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error.response || error.message);
    }
  };

  // Fungsi untuk POST catatan baru
  const addNote = async () => {
    if (!newNote.trim()) return;
    try {
      await axios.post("http://localhost:3000/api/v1/catatan", {
        isi_catatan: newNote,
      });
      setNewNote("");
      fetchNotes();
    } catch (error) {
      console.error("Error adding note:", error.response || error.message);
    }
  };

  // Fungsi untuk DELETE catatan
  const deleteNote = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/v1/catatan/${id}`);
      console.log("Note deleted:", response.data);
      fetchNotes(); // Refresh data catatan
    } catch (error) {
      console.error("Error deleting note:", error.response || error.message);
    }
  };

  const getNoteColor = (index) => {
    const colors = ["bg-green-100", "bg-orange-100", "bg-pink-100", "bg-red-100"];
    return colors[index % colors.length];
  };

  return (
    <div className="fixed top-0 right-0 h-full w-64 p-3 bg-gray-50 text-gray-800 shadow-lg z-10 lg:block hidden">
      {/* Header */}
      <div className="flex items-center mb-8">
        <img src="https://via.placeholder.com/80" alt="Profile" className="w-12 h-12 rounded-full mr-3" />
        <div>
          <h3 className="text-sm font-medium">Azhar</h3>
        </div>
        <ul className="flex-1 px-3">{right}</ul>
      </div>

      {/* Fitur Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Segera Datang</h2>
        <div className="flex items-center space-x-2 mb-2">
          <button className="p-1.5 rounded-lg bg-gray-200 hover:bg-green-600 group" onClick={addFeature}>
            <Plus className="group-hover:text-white" />
          </button>
          <input
            type="text"
            placeholder="Masukkan Judul"
            value={newFeature}
            onChange={(e) => setNewFeature(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded text-sm"
          />
        </div>
        <div className="space-y-2">
          {features.map((feature) => (
            <div key={feature.fitur_id} className="flex justify-between items-center p-3 rounded-lg bg-orange-100">
              <div className="flex items-center">
                <Bell className="text-orange-500 mr-2" />
                <span className="font-medium text-gray-800">{feature.isi_fitur}</span>
              </div>
              <button className="text-gray-600 hover:text-gray-800" onClick={() => deleteFeature(feature.fitur_id)}>
                <Trash2 />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Catatan Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Catatan</h2>
        <div className="flex items-center space-x-2 mb-4">
          <button className="p-1.5 rounded-lg bg-gray-200 hover:bg-green-600 group" onClick={addNote}>
            <Plus className="group-hover:text-white" />
          </button>
          <input
            type="text"
            placeholder="Masukkan Catatan"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded text-sm"
          />
        </div>
        <div className="space-y-2">
          {notes.map((note, index) => (
            <div key={note.catatan_id} className={`flex justify-between items-center p-3 rounded-lg ${getNoteColor(index)}`}>
              <span className="text-gray-800">{note.isi_catatan}</span>
              <button className="text-gray-600 hover:text-gray-800" onClick={() => deleteNote(note.catatan_id)}>
                <Trash2 />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
