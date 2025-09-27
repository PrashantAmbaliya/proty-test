import React from 'react';

const TodaysLuxuryListings = () => {
  const listings = [
    {
      id: 1,
      image: "https://proty.autodealwordpress.com/wp-content/uploads/2024/08/property-01-780x560.webp",
      featured: true,
      forRent: true,
      forSale: false,
      title: "House In Foxhall Ave",
      location: "Ryanggang, North Korea",
      beds: 6,
      baths: 5,
      sqft: 2250,
      price: "VND203,652"
    },
    {
      id: 2,
      image: "https://proty.autodealwordpress.com/wp-content/uploads/2024/07/property-02-780x560.webp",
      featured: true,
      forRent: false,
      forSale: true,
      title: "Popcorn Aspen Colorado",
      location: "Karas, Namibia",
      beds: 5,
      baths: 3,
      sqft: 1652,
      price: "VND165,400"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
      featured: true,
      forRent: false,
      forSale: true,
      title: "Refinery Parade Apartments",
      location: "Trairão, Pará, Brazil",
      beds: 5,
      baths: 4,
      sqft: 2213,
      price: "VND178,942"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=300&fit=crop",
      featured: true,
      forRent: true,
      forSale: false,
      title: "Modern Villa Estate",
      location: "Mumbai, Maharashtra, India",
      beds: 4,
      baths: 3,
      sqft: 1890,
      price: "VND142,750"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
      featured: true,
      forRent: false,
      forSale: true,
      title: "Luxury Penthouse Suite",
      location: "São Paulo, Brazil",
      beds: 3,
      baths: 2,
      sqft: 1456,
      price: "VND198,321"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=300&fit=crop",
      featured: true,
      forRent: true,
      forSale: false,
      title: "Contemporary Family Home",
      location: "Busan, South Korea",
      beds: 6,
      baths: 4,
      sqft: 2567,
      price: "VND234,890"
    }
  ];

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Today's Luxury Listings</h2>
        <p className="text-gray-600 text-lg">Thousands of luxury home enthusiasts just like you visit our website.</p>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div key={listing.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-transparent transition-all duration-500 ease-out group">
            {/* Property Image */}
            <div className="relative overflow-hidden">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 ease-out"></div>

              {/* Action buttons - appear on hover */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </button>
              </div>

              {/* Tags */}
              <div className="absolute top-4 left-4 flex gap-2">
                {listing.featured && (
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
                {listing.forRent && (
                  <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    For Rent
                  </span>
                )}
                {listing.forSale && (
                  <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    For Sale
                  </span>
                )}
              </div>
            </div>

            {/* Property Details */}
            <div className="p-6">
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">{listing.title}</h3>

              {/* Location */}
              <div className="flex items-center text-gray-600 mb-4">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{listing.location}</span>
              </div>

              {/* Property Stats */}
              <div className="flex items-center gap-6 text-gray-600 text-sm mb-4">
                <span><span className="font-semibold text-gray-800">{listing.beds}</span> Beds</span>
                <span><span className="font-semibold text-gray-800">{listing.baths}</span> Baths</span>
                <span><span className="font-semibold text-gray-800">{listing.sqft.toLocaleString()}</span> SqFt</span>
              </div>

              {/* Price */}
              <div className="text-2xl font-bold text-primary mb-4">
                {listing.price}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Compare
                </button>
                <button className="px-6 py-2 border border-primary text-primary rounded-2xl hover:bg-primary hover:text-white transition-colors font-medium">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaysLuxuryListings;