import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import RightSidebar from "./components/Rightsidebar";
import AlertOut from "./components/Alert";
import {
  Users, BookOpen, User, ClipboardList, Bell, Settings, LogOut, LayoutGrid
} from "lucide-react";
import Dashboard from "./pages/Dashboard";
import Pengguna from "./pages/Pengguna";
import Materi from "./pages/Materi";
import Pembinaan from "./pages/Pembinaan";
import AnalisisLaporan from "./pages/AnalisisLaporan";
import Notifikasi from "./pages/Notifikasi";
import Pengaturan from "./pages/Pengaturan";
import EditPage from "./pages/EditPembinaan";
import Login from "./pages/LoginForm";
import Datamateri from "./components/DataMateri";
import TambahKategori from "./components/TambahKategori";
import TambahMateri from "./components/TambahMateri";
import EditMateri from "./components/EditMateri";

function App() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/dashboard");
  };

  const handleLogout = () => {
    AlertOut(() => {
      setIsAuthenticated(false);
      navigate("/login");
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      window.history.pushState(null, "", window.location.href);
      window.onpopstate = () => {
        window.history.pushState(null, "", window.location.href);
      };
    }
  }, [isAuthenticated]);

  // Handle responsive sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarExpanded(false);
      } else {
        setSidebarExpanded(true);
      }
    };

    handleResize(); // Check initial screen width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-200 font-sans">
      {!isAuthenticated ? (
        <div className="flex items-center justify-center min-h-screen w-full bg-gray-200">
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      ) : (
        <div className="flex w-full">
          <div className={`fixed top-0 left-0 h-full bg-white shadow-lg z-10 ${sidebarExpanded ? 'w-64' : 'w-16'} transition-width duration-300`}>
            <Sidebar expanded={sidebarExpanded} setExpanded={setSidebarExpanded}>
              <div className="my-8" />
              <SidebarItem icon={<LayoutGrid size={20} />} text="Dashboard" to="/dashboard" />
              <hr className="my-6" />
              <SidebarItem icon={<Users size={20} />} text="Pengguna" to="/pengguna" />
              <SidebarItem icon={<BookOpen size={20} />} text="Materi" to="/materi" />
              <SidebarItem icon={<User size={20} />} text="Pembina" to="/pembinaan" />
              <SidebarItem icon={<ClipboardList size={20} />} text="Analisis & Laporan" to="/analisis-laporan" />
              <SidebarItem icon={<Bell size={20} />} text="Pemberitahuan" to="/notifikasi" />
              <hr className="my-6" />
              <SidebarItem icon={<Settings size={20} />} text="Pengaturan" to="/pengaturan" />
              <SidebarItem icon={<LogOut size={20} />} text="Keluar" onClick={handleLogout} />
            </Sidebar>
          </div>

          {/* Main content area, adjust margin based on whether RightSidebar is visible */}
          <div
            className={`flex-grow transition-all duration-300 ease-in-out ${
              sidebarExpanded ? "ml-64" : "ml-16"
            } mr-0 p-6 bg-gray-100 scroll-hidden lg:mr-64`}
            style={{ height: "100vh" }}
          >
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/pengguna" element={<Pengguna />} />
              <Route path="/materi" element={<Materi />} />
              <Route path="/materi/data" element={<Datamateri />} />
              <Route path="/materi/tambah" element={<TambahKategori />} />
              <Route path="/materi/tambahmateri" element={<TambahMateri />} />
              <Route path="/materi/editmateri" element={<EditMateri />} />
              <Route path="/pembinaan" element={<Pembinaan />} />
              <Route path="/pembinaan/edit" element={<EditPage />} />
              <Route path="/analisis-laporan" element={<AnalisisLaporan />} />
              <Route path="/notifikasi" element={<Notifikasi />} />
              <Route path="/pengaturan" element={<Pengaturan />} />
            </Routes>
          </div>

          {/* Right Sidebar */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-10 hidden lg:block">
            <RightSidebar />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
