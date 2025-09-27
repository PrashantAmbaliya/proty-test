"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { propertyTypes } from '@/lib/constants'

const TrySearchingFor = () => {

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Try Searching For
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thousands of luxury home enthusiasts just like you have found their dream home
          </p>
        </div>

        {/* Property Type Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {propertyTypes.map((type, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-gray-200 p-8 text-center cursor-pointer 
               bg-white text-gray-700 transition-colors duration-500 group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-orange-400 to-orange-500
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col items-center">
                {/* Swap icon on hover using React */}
                <div className="mb-4 flex justify-center">
                  <div className="transition-opacity duration-500 group-hover:opacity-0 absolute">
                    {type.icon}
                  </div>
                  <div className="transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                    {type.iconWhite}
                  </div>
                </div>

                {/* Text color changes on hover */}
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-500 group-hover:text-white">
                  {type.title}
                </h3>
                <p className="text-sm transition-colors duration-500 group-hover:text-white">
                  {type.properties} Properties
                </p>
              </div>
            </motion.div>
          ))}

        </div>


        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-2">
  {[0, 1, 2, 3, 4].map((dot, index) => (
    <div
      key={index}
      className={`
        w-2 h-2 rounded-full
        ${index === 0 ? 'bg-primary ring-1 ring-primary ring-offset-2 ring-offset-white' : 'bg-gray-300'}
        transition-all duration-300
      `}
    />
  ))}
</div>

      </div>
    </section>
  );
};

export default TrySearchingFor;