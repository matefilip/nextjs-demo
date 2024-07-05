import React from 'react';

const LoadingSpinner = () => {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-gray-900 text-white z-50">
        <div className="w-12 h-12 border-t-4 border-b-4 border-gray-100 rounded-full animate-spin"></div>
      </div>
    );
  };

export default LoadingSpinner;