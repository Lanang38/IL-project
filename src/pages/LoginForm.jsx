import React, { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 max-w-screen-md">
        {/* Left Side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Selamat datang</span>
          <span className="font-light text-gray-400 mb-8">
            Masuk untuk mengakses akun Admin
          </span>

          <div className="py-4">
            <label className="mb-2 text-md" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="py-4">
            <label className="mb-2 text-md" htmlFor="pass">
              Kata Sandi
            </label>
            <input
              type="password"
              name="pass"
              id="pass"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              placeholder="Masukkan kata sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-between w-full py-4">
            <label className="flex items-center text-md">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="mr-2"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Ingat saya dalam 30 hari
            </label>
          </div>

          <button
            onClick={onLogin}
            className="w-full bg-green-500 text-white p-2 rounded-lg mb-6 hover:bg-green-700 "
          >
            Masuk
          </button>
        </div>

        {/* Right Side */}
        <div className="relative hidden md:block">
          <img
            src="src/assets/login1.jpg" // Replace with the actual path to your image
            alt="Background"
            className="w-[400px] h-full rounded-r-2xl object-cover"
          />
          {/* Text on Image */}
          <div className="absolute bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg font-semibold">
            <span className="text-white text-xl">
              <span className="text-green-400">
                Mari bersama belajar tentang pertanian berkelanjutan untuk
              </span>{" "}
              generasi mendatang bersama EduFarm
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
