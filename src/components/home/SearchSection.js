import React from 'react';
import SearchForm from '../common/SearchForm';

const SearchSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Home
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our advanced search to find properties that match your exact criteria. 
            Filter by location, price, size, and amenities.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <SearchForm />
        </div>
      </div>
    </section>
  );
};

export default SearchSection;