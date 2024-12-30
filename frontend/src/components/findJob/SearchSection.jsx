import React from 'react';

export default function SearchSection({ searchQuery, setSearchQuery }) {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex justify-center items-center mt-4 mb-4">
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search for jobs..."
        className="w-full max-w-lg p-3 text-gray-700 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}
