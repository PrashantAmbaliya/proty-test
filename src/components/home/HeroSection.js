"use client";

import React, { useState, useEffect } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [searchType, setSearchType] = useState('For Sale');
  const [searchQuery, setSearchQuery] = useState('');

  const searchTypes = ['For Rent', 'For Sale'];
  const propertyTypes = ['Penthouse', 'Townhouse', 'Villa', 'Apartment'];

  const words = ["Luxury", "Upscale", "Modern"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // change every 2s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[655px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://proty.autodealwordpress.com/wp-content/uploads/2024/11/ssc.webp')"
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-[4.25rem] font-bold text-white text-center mb-6 leading-tight gap-2">
            Search{" "}
            <span className="relative inline-flex text-white overflow-hidden h-[1.2em] align-baseline">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ y: "-100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "100%" }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    duration: 0.5,
                  }}
                  className="relative"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            Homes
          </h1>

          <p className="text-sm md:text-[1.125rem] font-medium text-white mb-12 max-w-2xl mx-auto">
            Thousands of luxury home enthusiasts just like you visit our website.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-xl p-2 shadow-2xl max-w-4xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-2">
              {/* Search Type Dropdown */}
              <div className="relative">
                <select
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                  className="appearance-none bg-transparent border-none text-black font-bold px-4 py-3 pr-8 focus:outline-none"
                >
                  {searchTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Search Input */}
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Place, neighborhood, school or agent..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border-none outline-none text-gray-700 placeholder-gray-500"
                />
              </div>

              <button
                className="bg-[#fef4eb] hover:bg-primary rounded-xl text-white px-3 py-3 font-semibold flex items-center gap-2 transition-colors duration-200 group"
              >
                <SlidersHorizontal className="w-5 h-5 ml-1 text-primary group-hover:text-white transition-colors duration-200" />
              </button>

              {/* Search Button */}
              <button className="bg-primary hover:bg-black/80 rounded-xl text-white px-8 py-3 font-semibold flex items-center gap-2 transition-colors duration-200">
                Search
                {/* Lucide Search Icon */}
                <Search className="w-5 h-5 ml-1" />
              </button>
            </div>
          </div>

          {/* Property Type Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {propertyTypes.map((type) => (
              <button
                key={type}
                className={`px-5 py-2 rounded-full text-[0.85rem] font-bold transition-colors duration-200 text-white ${type === searchType
                  ? ' text-white'
                  : 'bg-black/30  hover:bg-orange-500'
                  }`}
                onClick={() => setSearchType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;