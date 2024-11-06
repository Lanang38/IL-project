// App.jsx
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar, { SidebarItem } from "./components/sidebar";
import RightSidebar from "./components/Rightsidebar";
import { Users, BookOpen, User, ClipboardList, Bell, Settings, LogOut, LayoutGrid } from "lucide-react";
import AlertOut from "./components/Alert";

// Import komponen halaman
import Dashboard from "./pages/Dashboard";
import Pengguna from "./pages/Pengguna";
import Materi from "./pages/Materi";
import Pembinaan from "./pages/Pembinaan";
import AnalisisLaporan from "./pages/AnalisisLaporan";
import Notifikasi from "./pages/Notifikasi";
import Pengaturan from "./pages/Pengaturan";
import EditPage from "./pages/EditPembinaan"; // Import halaman Edit

function App() {
  const navigate = useNavigate();

  // Fungsi untuk logout, akan menampilkan alert dan mengarahkan ke halaman utama
  const handleLogout = () => {
    AlertOut(() => navigate("/dashboard"));
  };

  return (
    <div className="flex">
      {/* Sidebar di sisi kiri */}
      <Sidebar>
        <div className="mb-10" /> {/* Spasi kosong di atas menu */}
        <SidebarItem icon={<LayoutGrid size={20} />} text="Dashboard" to="/dashboard" />
        <hr className="my-6" /> {/* Garis pemisah */}
        <SidebarItem icon={<Users size={20} />} text="Pengguna" to="/pengguna" />
        <SidebarItem icon={<BookOpen size={20} />} text="Materi" to="/materi" />
        <SidebarItem icon={<User size={20} />} text="Pembina" to="/pembinaan" />
        <SidebarItem icon={<ClipboardList size={20} />} text="Analisis & Laporan" to="/analisis-laporan" />
        <SidebarItem icon={<Bell size={20} />} text="Pemberitahuan" to="/notifikasi" />
        <hr className="my-6" /> {/* Garis pemisah kedua */}
        <SidebarItem icon={<Bell size={20} />} text="Pemberitahuan" to="/notifikasi" />
        <hr className="my-6" />
        <SidebarItem icon={<Settings size={20} />} text="Pengaturan" to="/pengaturan" />
        <SidebarItem
          icon={<LogOut size={20} />}
          text="Keluar"
          onClick={handleLogout}  // Memanggil fungsi handleLogout untuk proses logout
        />
      </Sidebar>

      {/* Area Konten Utama */}
      <div className="flex-grow p-6 bg-gray-100">
        <Routes>
          {/* Rute untuk setiap halaman */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pengguna" element={<Pengguna />} />
          <Route path="/materi" element={<Materi />} />
          <Route path="/pembinaan" element={<Pembinaan />} />
          <Route path="/pembinaan/edit" element={<EditPage />} /> {/* Rute halaman Edit sebagai sub-rute dari Pembinaan */}
          <Route path="/analisis-laporan" element={<AnalisisLaporan />} />
          <Route path="/notifikasi" element={<Notifikasi />} />
          <Route path="/pengaturan" element={<Pengaturan />} />
        </Routes>
      </div>
      
      {/* Right Sidebar di sisi kanan */}
      <RightSidebar />
    </div>
  );
}

export default App;
