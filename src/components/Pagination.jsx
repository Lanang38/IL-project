import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  // Menentukan halaman-halaman yang ditampilkan di sekitar halaman aktif
  const getPageNumbers = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    } else if (currentPage === 1) {
      return [1, 2, 3];
    } else if (currentPage === totalPages) {
      return [totalPages - 2, totalPages - 1, totalPages];
    } else {
      return [currentPage - 1, currentPage, currentPage + 1];
    }
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      {/* Tombol Sebelumnya */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`px-3 py-2 border border-blue-500 rounded-lg ${
          currentPage === 1 ? "text-gray-400" : "text-blue-500 hover:bg-blue-100"
        }`}
      >
        &lt;
      </button>

      {/* Nomor Halaman */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-2 border border-blue-500 rounded-lg ${
            currentPage === page
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "text-blue-500 hover:bg-blue-100"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Tombol Selanjutnya */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 border border-blue-500 rounded-lg ${
          currentPage === totalPages
            ? "text-gray-400"
            : "text-blue-500 hover:bg-blue-100"
        }`}
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
