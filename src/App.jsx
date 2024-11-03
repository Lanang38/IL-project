import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import { Home, Users, BookOpen, User, ClipboardList, Bell, Settings, LogOut, LayoutGrid } from "lucide-react";

// Import komponen halaman
import Dashboard from "./pages/Dashboard";
import Pengguna from "./pages/Pengguna";
import Materi from "./pages/Materi";
import Pembinaan from "./pages/Pembinaan";
import AnalisisLaporan from "./pages/AnalisisLaporan";
import Notifikasi from "./pages/Notifikasi";
import Pengaturan from "./pages/Pengaturan";

function App() {
  return (
    <div className="flex">
      <Sidebar>
        <div className="mb-10" />
        <SidebarItem icon={<LayoutGrid size={20} />} text="Dashboard" active to="/dashboard" />
        <hr className="my-6" />
        <SidebarItem icon={<Users size={20} />} text="Pengguna" to="/pengguna" />
        <SidebarItem icon={<BookOpen size={20} />} text="Materi" to="/materi" />
        <SidebarItem icon={<User size={20} />} text="Pembinaan" to="/pembinaan" />
        <SidebarItem icon={<ClipboardList size={20} />} text="Analisis & Laporan" to="/analisis-laporan" />
        <SidebarItem icon={<Bell size={20} />} text="Notifikasi" to="/notifikasi" />
        <hr className="my-6" />
        <SidebarItem icon={<Settings size={20} />} text="Pengaturan" to="/pengaturan" />
        <SidebarItem icon={<LogOut size={20} />} text="Keluar" to="/logout" />
      </Sidebar>

      <div className="flex-grow p-6 bg-gray-100">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pengguna" element={<Pengguna />} />
          <Route path="/materi" element={<Materi />} />
          <Route path="/pembinaan" element={<Pembinaan />} />
          <Route path="/analisis-laporan" element={<AnalisisLaporan />} />
          <Route path="/notifikasi" element={<Notifikasi />} />
          <Route path="/pengaturan" element={<Pengaturan />} />
        </Routes>
      </div>
      
      <RightSidebar />
    </div>
  );
}

export default App;
