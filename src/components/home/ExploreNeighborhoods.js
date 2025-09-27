"use client"
import React from 'react';

const ExploreNeighborhoods = () => {
  const neighborhoods = [
    {
      name: "Houston",
      properties: "5 Properties",
      image: "https://proty.autodealwordpress.com/wp-content/uploads/2024/11/city-01.webp"
    },
    {
      name: "Chicago", 
      properties: "5 Properties",
      image: "https://proty.autodealwordpress.com/wp-content/uploads/2024/11/city-02.webp"
    },
    {
      name: "Florida",
      properties: "2 Properties", 
      image: "https://proty.autodealwordpress.com/wp-content/uploads/2024/11/city-03.webp"
    },
    {
      name: "San Francisco",
      properties: "4 Properties",
      image: "https://proty.autodealwordpress.com/wp-content/uploads/2024/11/city-04.webp"
    },
    {
      name: "Columbus",
      properties: "2 Properties",
      image: "https://proty.autodealwordpress.com/wp-content/uploads/2024/11/city-05.webp"
    },
    {
      name: "Manhattan",
      properties: "3 Properties",
      image: "https://proty.autodealwordpress.com/wp-content/uploads/2024/11/city-06-1.webp"
    },
    {
      name: "Pittsburgh",
      properties: "4 Properties", 
      image: "https://proty.autodealwordpress.com/wp-content/uploads/2024/11/city-07.webp"
    }
  ];

  return (
    <div className="w-full mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Explore the neighborhoods
        </h2>
        <p className="text-md text-gray-600">
          Find your dream apartment with our listing
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Top Row - 4 cards */}
        {neighborhoods.slice(0, 4).map((neighborhood, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl cursor-pointer h-80 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <img
                src={neighborhood.image}
                alt={neighborhood.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-6 left-6 text-white z-10">
              <h3 className="text-2xl font-bold mb-2">{neighborhood.name}</h3>
              <div className="flex items-center text-sm opacity-90">
                <span>{neighborhood.properties}</span>
                <svg 
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Row - Columbus | Manhattan (2x width) | Pittsburgh */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {/* Columbus */}
        <div className="group relative overflow-hidden rounded-2xl cursor-pointer h-80 shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <img
              src={neighborhoods[4].image}
              alt={neighborhoods[4].name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>
          
          <div className="absolute bottom-6 left-6 text-white z-10">
            <h3 className="text-2xl font-bold mb-2">{neighborhoods[4].name}</h3>
            <div className="flex items-center text-sm opacity-90">
              <span>{neighborhoods[4].properties}</span>
              <svg 
                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Manhattan - Takes 2 columns */}
        <div className="md:col-span-2 group relative overflow-hidden rounded-2xl cursor-pointer h-80 shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <img
              src={neighborhoods[5].image}
              alt={neighborhoods[5].name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>
          
          <div className="absolute bottom-6 left-6 text-white z-10">
            <h3 className="text-2xl font-bold mb-2">{neighborhoods[5].name}</h3>
            <div className="flex items-center text-sm opacity-90">
              <span>{neighborhoods[5].properties}</span>
              <svg 
                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Pittsburgh */}
        <div className="group relative overflow-hidden rounded-2xl cursor-pointer h-80 shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <img
              src={neighborhoods[6].image}
              alt={neighborhoods[6].name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>
          
          <div className="absolute bottom-6 left-6 text-white z-10">
            <h3 className="text-2xl font-bold mb-2">{neighborhoods[6].name}</h3>
            <div className="flex items-center text-sm opacity-90">
              <span>{neighborhoods[6].properties}</span>
              <svg 
                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreNeighborhoods;