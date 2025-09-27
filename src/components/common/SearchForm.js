"use client";

import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

const SearchForm = () => {
  const [searchData, setSearchData] = useState({
    location: '',
    propertyType: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search data:', searchData);
  };

  const propertyTypes = [
    'All Types',
    'Single Family',
    'Condo',
    'Townhouse',
    'Penthouse',
    'Villa',
    'Estate',
  ];

  const bedroomOptions = [
    'Any',
    '1+',
    '2+',
    '3+',
    '4+',
    '5+',
  ];

  const bathroomOptions = [
    'Any',
    '1+',
    '2+',
    '3+',
    '4+',
    '5+',
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Location */}
        <Input
          label="Location"
          name="location"
          value={searchData.location}
          onChange={handleInputChange}
          placeholder="Enter city, neighborhood, or address"
        />
        
        {/* Property Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Property Type
          </label>
          <select
            name="propertyType"
            value={searchData.propertyType}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        
        {/* Min Price */}
        <Input
          label="Min Price"
          name="minPrice"
          type="number"
          value={searchData.minPrice}
          onChange={handleInputChange}
          placeholder="0"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Max Price */}
        <Input
          label="Max Price"
          name="maxPrice"
          type="number"
          value={searchData.maxPrice}
          onChange={handleInputChange}
          placeholder="No limit"
        />
        
        {/* Bedrooms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bedrooms
          </label>
          <select
            name="bedrooms"
            value={searchData.bedrooms}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {bedroomOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        
        {/* Bathrooms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bathrooms
          </label>
          <select
            name="bathrooms"
            value={searchData.bathrooms}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {bathroomOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        
        {/* Search Button */}
        <div className="flex items-end">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
          >
            Search Properties
          </Button>
        </div>
      </div>
      
      {/* Advanced Search Toggle */}
      <div className="text-center">
        <button
          type="button"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Advanced Search Options
        </button>
      </div>
    </form>
  );
};

export default SearchForm;