// NotificationCard.js
import React from 'react';

export default function NotificationCard({ title, placeholder, bgColor, btnColor }) {
    return (
      <div className={`p-4 rounded-lg shadow-lg ${bgColor} text-white w-full max-w-xs mx-auto`}>
        <h3 className="text-center font-bold mb-4">{title}</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Judul Pemberitahuan</label>
            <input
              type="text"
              placeholder="Ketik disini"
              className="w-full p-2 rounded border border-gray-300 text-black"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Isi Pemberitahuan</label>
            <textarea
              placeholder={placeholder}
              className="w-full p-2 rounded border border-gray-300 text-black resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full py-2 rounded ${btnColor} text-white font-semibold`}
          >
            Kirim
          </button>
        </form>
      </div>
    );
  }
  