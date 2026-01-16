import React from 'react';
import { Search } from 'lucide-react';

const NoResult = ({ finalFilter, handleReset }) => {
  if (finalFilter.length !== 0) return null;

  return (
    <div className="text-center py-12">
      <div className="text-gray-400 mb-4">
        <Search size={64} className="mx-auto" />
      </div>

      <h3 className="text-xl font-semibold text-gray-700 mb-2">
        No servicemen found
      </h3>

      <p className="text-gray-500 mb-4">
        Try adjusting your filters or search criteria
      </p>

      <button
        onClick={handleReset}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default NoResult;
