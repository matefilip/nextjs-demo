import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPageButtons = () => {
    const pages = [];
    const pageNeighbours = 1;

    for (let page = Math.max(1, currentPage - pageNeighbours); page <= Math.min(totalPages, currentPage + pageNeighbours); page++) {
      pages.push(
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-3 py-2 mx-1 rounded bg-gray-800 text-white ${currentPage === page ? 'bg-gray-900' : 'hover:bg-gray-900'}`}
        >
          {page}
        </button>
      );
    }

    if (currentPage > 1) {
      pages.unshift(
        <button
          key="prev"
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-3 py-2 mx-1 rounded bg-gray-800 text-white hover:bg-gray-900"
        >
          &lt;
        </button>
      );
    }

    if (currentPage < totalPages) {
      pages.push(
        <button
          key="next"
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-3 py-2 mx-1 rounded bg-gray-800 text-white hover:bg-gray-900"
        >
          &gt;
        </button>
      );
    }

    return pages;
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      handlePageChange(page);
    }
  };

  return (
<div className="flex justify-center mt-4">
{(currentPage !== 1 && currentPage !== 2) && (
    <button
      onClick={() => goToPage(1)}
      className="px-3 py-2 mx-1 rounded bg-gray-800 text-white hover:bg-gray-900"
    >
      1
    </button>
  )}
      {renderPageButtons()}
      {(currentPage !== totalPages && currentPage !== totalPages - 1) && (
      <button
        onClick={() => goToPage(totalPages)}
        className="px-3 py-2 mx-1 rounded bg-gray-800 text-white hover:bg-gray-900"
      >
        {totalPages}
      </button>
      )}
    </div>
  );
};

export default Pagination;