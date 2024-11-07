import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Sidebar, { SidebarItem } from "./components/sidebar";
import RightSidebar from "./components/Rightsidebar";
import { Users, BookOpen, User, ClipboardList, Bell, Settings, LogOut, LayoutGrid } from "lucide-react";
import AlertOut from "./components/Alert"; // Import fungsi AlertOut

// Import halaman-halaman
import Dashboard from "./pages/Dashboard";
import Pengguna from "./pages/Pengguna";
import Materi from "./pages/Materi";
import Pembinaan from "./pages/Pembinaan";
import AnalisisLaporan from "./pages/AnalisisLaporan";
import Notifikasi from "./pages/Notifikasi";
import Pengaturan from "./pages/Pengaturan";
import EditPage from "./pages/EditPembinaan";
import Login from "./pages/LoginForm";

function App() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Fungsi login
  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/dashboard");
  };

  // Fungsi logout dengan konfirmasi
  const handleLogout = () => {
    AlertOut(() => {
      setIsAuthenticated(false); // Mengubah status otentikasi
      navigate("/login"); // Arahkan ke halaman login setelah konfirmasi
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      // Mencegah pengguna menekan tombol "Go Back" dan kembali ke halaman login
      window.history.pushState(null, "", window.location.href);
      window.onpopstate = () => {
        window.history.pushState(null, "", window.location.href);
      };
    }
  }, [isAuthenticated]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      {/* Redirect ke login jika belum otentikasi */}
      {!isAuthenticated ? (
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      ) : (
        <div className="flex w-full">
          {/* Sidebar di sisi kiri */}
          <Sidebar>
            <div className="mb-10" /> {/* Spasi kosong di atas menu */}
            <SidebarItem icon={<LayoutGrid size={20} />} text="Dashboard" to="/dashboard" />
            <hr className="my-6" />
            <SidebarItem icon={<Users size={20} />} text="Pengguna" to="/pengguna" />
            <SidebarItem icon={<BookOpen size={20} />} text="Materi" to="/materi" />
            <SidebarItem icon={<User size={20} />} text="Pembina" to="/pembinaan" />
            <SidebarItem icon={<ClipboardList size={20} />} text="Analisis & Laporan" to="/analisis-laporan" />
            <SidebarItem icon={<Bell size={20} />} text="Pemberitahuan" to="/notifikasi" />
            <hr className="my-6" />
            <SidebarItem icon={<Settings size={20} />} text="Pengaturan" to="/pengaturan" />
            <SidebarItem icon={<LogOut size={20} />} text="Keluar" onClick={handleLogout} /> {/* Tombol logout */}
          </Sidebar>

          {/* Area Konten Utama */}
          <div className="flex-grow p-6 bg-gray-100">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/pengguna" element={<Pengguna />} />
              <Route path="/materi" element={<Materi />} />
              <Route path="/pembinaan" element={<Pembinaan />} />
              <Route path="/pembinaan/edit" element={<EditPage />} />
              <Route path="/analisis-laporan" element={<AnalisisLaporan />} />
              <Route path="/notifikasi" element={<Notifikasi />} />
              <Route path="/pengaturan" element={<Pengaturan />} />
            </Routes>
          </div>

          {/* Right Sidebar */}
          <RightSidebar />
        </div>
      )}
    </div>
  );
}

export default App;
