import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

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
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`px-3 py-2 border border-green-500 rounded-lg ${
          currentPage === 1 ? "text-gray-400" : "text-green-500 hover:bg-green-100"
        }`}
      >
        &lt;
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-2 border border-green-500 rounded-lg ${
            currentPage === page
              ? "bg-green-500 text-white hover:bg-green-600"
              : "text-green-500 hover:bg-blue-100"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 border border-green-500 rounded-lg ${
          currentPage === totalPages
            ? "text-gray-400"
            : "text-green-500 hover:bg-green-100"
        }`}
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
