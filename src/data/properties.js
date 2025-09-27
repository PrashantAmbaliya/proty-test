/**
 * Sample property data for the LuxuryHomes application
 */

export const sampleProperties = [
  {
    id: 'prop-001',
    title: 'Modern Penthouse with City Views',
    description: 'Stunning penthouse with panoramic city views, featuring floor-to-ceiling windows, high-end finishes, and a private rooftop terrace.',
    price: 2500000,
    priceFormatted: '$2,500,000',
    location: 'Manhattan, NY',
    address: '123 Park Avenue, New York, NY 10001',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'USA',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2500,
    propertyType: 'Penthouse',
    status: 'For Sale',
    images: [
      '/images/properties/penthouse-1.jpg',
      '/images/properties/penthouse-2.jpg',
      '/images/properties/penthouse-3.jpg',
    ],
    featuredImage: '/images/properties/penthouse-1.jpg',
    amenities: ['Swimming Pool', 'Gym', 'Concierge', 'Parking', 'Elevator'],
    features: ['City View', 'New Construction', 'Smart Home'],
    yearBuilt: 2020,
    lotSize: 0,
    featured: true,
    newConstruction: true,
    daysOnMarket: 15,
    mlsNumber: 'MLS-123456',
    coordinates: {
      lat: 40.7589,
      lng: -73.9851,
    },
    agent: {
      id: 'agent-001',
      name: 'Sarah Johnson',
      email: 'sarah@luxuryhomes.com',
      phone: '+1 (555) 123-4567',
      photo: '/images/agents/sarah-johnson.jpg',
    },
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-20'),
  },
  {
    id: 'prop-002',
    title: 'Luxury Beachfront Villa',
    description: 'Exclusive beachfront villa with direct ocean access, infinity pool, and private beach. Perfect for entertaining.',
    price: 4200000,
    priceFormatted: '$4,200,000',
    location: 'Malibu, CA',
    address: '456 Pacific Coast Highway, Malibu, CA 90265',
    city: 'Malibu',
    state: 'CA',
    zipCode: '90265',
    country: 'USA',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    propertyType: 'Villa',
    status: 'For Sale',
    images: [
      '/images/properties/villa-1.jpg',
      '/images/properties/villa-2.jpg',
      '/images/properties/villa-3.jpg',
    ],
    featuredImage: '/images/properties/villa-1.jpg',
    amenities: ['Swimming Pool', 'Beach Access', 'Garage', 'Garden', 'Security'],
    features: ['Ocean View', 'Waterfront', 'Luxury'],
    yearBuilt: 2018,
    lotSize: 15000,
    featured: true,
    newConstruction: false,
    daysOnMarket: 30,
    mlsNumber: 'MLS-789012',
    coordinates: {
      lat: 34.0259,
      lng: -118.7798,
    },
    agent: {
      id: 'agent-002',
      name: 'Michael Chen',
      email: 'michael@luxuryhomes.com',
      phone: '+1 (555) 234-5678',
      photo: '/images/agents/michael-chen.jpg',
    },
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-25'),
  },
  {
    id: 'prop-003',
    title: 'Historic Brownstone',
    description: 'Beautifully restored historic brownstone with original architectural details, modern amenities, and a private garden.',
    price: 1800000,
    priceFormatted: '$1,800,000',
    location: 'Brooklyn, NY',
    address: '789 Park Slope, Brooklyn, NY 11215',
    city: 'Brooklyn',
    state: 'NY',
    zipCode: '11215',
    country: 'USA',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    propertyType: 'Townhouse',
    status: 'For Sale',
    images: [
      '/images/properties/brownstone-1.jpg',
      '/images/properties/brownstone-2.jpg',
      '/images/properties/brownstone-3.jpg',
    ],
    featuredImage: '/images/properties/brownstone-1.jpg',
    amenities: ['Garden', 'Fireplace', 'Parking', 'Basement'],
    features: ['Historic', 'Renovated', 'Private'],
    yearBuilt: 1890,
    lotSize: 2000,
    featured: true,
    newConstruction: false,
    daysOnMarket: 45,
    mlsNumber: 'MLS-345678',
    coordinates: {
      lat: 40.6602,
      lng: -73.9794,
    },
    agent: {
      id: 'agent-003',
      name: 'Emily Rodriguez',
      email: 'emily@luxuryhomes.com',
      phone: '+1 (555) 345-6789',
      photo: '/images/agents/emily-rodriguez.jpg',
    },
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-22'),
  },
  {
    id: 'prop-004',
    title: 'Mountain Retreat Estate',
    description: 'Sprawling mountain estate with ski-in/ski-out access, private helipad, and panoramic mountain views.',
    price: 8500000,
    priceFormatted: '$8,500,000',
    location: 'Aspen, CO',
    address: '123 Mountain View Drive, Aspen, CO 81611',
    city: 'Aspen',
    state: 'CO',
    zipCode: '81611',
    country: 'USA',
    bedrooms: 8,
    bathrooms: 6,
    sqft: 8500,
    propertyType: 'Estate',
    status: 'For Sale',
    images: [
      '/images/properties/estate-1.jpg',
      '/images/properties/estate-2.jpg',
      '/images/properties/estate-3.jpg',
    ],
    featuredImage: '/images/properties/estate-1.jpg',
    amenities: ['Helipad', 'Wine Cellar', 'Home Theater', 'Gym', 'Spa'],
    features: ['Mountain View', 'Ski-in/Ski-out', 'Luxury', 'Private'],
    yearBuilt: 2015,
    lotSize: 50000,
    featured: true,
    newConstruction: false,
    daysOnMarket: 60,
    mlsNumber: 'MLS-901234',
    coordinates: {
      lat: 39.1911,
      lng: -106.8175,
    },
    agent: {
      id: 'agent-004',
      name: 'David Thompson',
      email: 'david@luxuryhomes.com',
      phone: '+1 (555) 456-7890',
      photo: '/images/agents/david-thompson.jpg',
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-18'),
  },
  {
    id: 'prop-005',
    title: 'Contemporary Waterfront Condo',
    description: 'Luxurious waterfront condo with floor-to-ceiling windows, private balcony, and marina access.',
    price: 3200000,
    priceFormatted: '$3,200,000',
    location: 'Miami, FL',
    address: '456 Biscayne Boulevard, Miami, FL 33132',
    city: 'Miami',
    state: 'FL',
    zipCode: '33132',
    country: 'USA',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2800,
    propertyType: 'Condo',
    status: 'For Sale',
    images: [
      '/images/properties/condo-1.jpg',
      '/images/properties/condo-2.jpg',
      '/images/properties/condo-3.jpg',
    ],
    featuredImage: '/images/properties/condo-1.jpg',
    amenities: ['Marina Access', 'Concierge', 'Gym', 'Pool', 'Parking'],
    features: ['Waterfront', 'Ocean View', 'Luxury'],
    yearBuilt: 2021,
    lotSize: 0,
    featured: false,
    newConstruction: true,
    daysOnMarket: 20,
    mlsNumber: 'MLS-567890',
    coordinates: {
      lat: 25.7617,
      lng: -80.1918,
    },
    agent: {
      id: 'agent-005',
      name: 'Lisa Martinez',
      email: 'lisa@luxuryhomes.com',
      phone: '+1 (555) 567-8901',
      photo: '/images/agents/lisa-martinez.jpg',
    },
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-28'),
  },
  {
    id: 'prop-006',
    title: 'Luxury Golf Course Home',
    description: 'Elegant home overlooking the 18th green of a championship golf course, with private pool and tennis court.',
    price: 5500000,
    priceFormatted: '$5,500,000',
    location: 'Palm Beach, FL',
    address: '789 Golf Course Drive, Palm Beach, FL 33480',
    city: 'Palm Beach',
    state: 'FL',
    zipCode: '33480',
    country: 'USA',
    bedrooms: 6,
    bathrooms: 5,
    sqft: 6200,
    propertyType: 'Single Family',
    status: 'For Sale',
    images: [
      '/images/properties/golf-home-1.jpg',
      '/images/properties/golf-home-2.jpg',
      '/images/properties/golf-home-3.jpg',
    ],
    featuredImage: '/images/properties/golf-home-1.jpg',
    amenities: ['Swimming Pool', 'Tennis Court', 'Golf Course', 'Garage', 'Garden'],
    features: ['Golf Course', 'Luxury', 'Private'],
    yearBuilt: 2019,
    lotSize: 25000,
    featured: false,
    newConstruction: false,
    daysOnMarket: 35,
    mlsNumber: 'MLS-678901',
    coordinates: {
      lat: 26.7056,
      lng: -80.0364,
    },
    agent: {
      id: 'agent-006',
      name: 'Robert Wilson',
      email: 'robert@luxuryhomes.com',
      phone: '+1 (555) 678-9012',
      photo: '/images/agents/robert-wilson.jpg',
    },
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-26'),
  },
];

export const featuredProperties = sampleProperties.filter(property => property.featured);

export const newConstructionProperties = sampleProperties.filter(property => property.newConstruction);

export const waterfrontProperties = sampleProperties.filter(property => 
  property.features.includes('Waterfront') || property.features.includes('Ocean View')
);

export const luxuryProperties = sampleProperties.filter(property => 
  property.features.includes('Luxury') || property.price > 3000000
);

export const getPropertiesByType = (propertyType) => {
  return sampleProperties.filter(property => property.propertyType === propertyType);
};

export const getPropertiesByLocation = (location) => {
  return sampleProperties.filter(property => 
    property.location.toLowerCase().includes(location.toLowerCase()) ||
    property.city.toLowerCase().includes(location.toLowerCase()) ||
    property.state.toLowerCase().includes(location.toLowerCase())
  );
};

export const getPropertiesByPriceRange = (minPrice, maxPrice) => {
  return sampleProperties.filter(property => 
    property.price >= minPrice && property.price <= maxPrice
  );
};

export const getPropertiesByBedrooms = (minBedrooms) => {
  return sampleProperties.filter(property => property.bedrooms >= minBedrooms);
};

export const getPropertiesByBathrooms = (minBathrooms) => {
  return sampleProperties.filter(property => property.bathrooms >= minBathrooms);
};

export const getPropertiesBySqft = (minSqft, maxSqft) => {
  return sampleProperties.filter(property => 
    property.sqft >= minSqft && property.sqft <= maxSqft
  );
};

export const searchProperties = (filters = {}) => {
  let results = [...sampleProperties];

  if (filters.location) {
    results = results.filter(property => 
      property.location.toLowerCase().includes(filters.location.toLowerCase()) ||
      property.city.toLowerCase().includes(filters.location.toLowerCase()) ||
      property.state.toLowerCase().includes(filters.location.toLowerCase())
    );
  }

  if (filters.propertyType) {
    results = results.filter(property => property.propertyType === filters.propertyType);
  }

  if (filters.minPrice) {
    results = results.filter(property => property.price >= filters.minPrice);
  }

  if (filters.maxPrice) {
    results = results.filter(property => property.price <= filters.maxPrice);
  }

  if (filters.minBedrooms) {
    results = results.filter(property => property.bedrooms >= filters.minBedrooms);
  }

  if (filters.minBathrooms) {
    results = results.filter(property => property.bathrooms >= filters.minBathrooms);
  }

  if (filters.minSqft) {
    results = results.filter(property => property.sqft >= filters.minSqft);
  }

  if (filters.maxSqft) {
    results = results.filter(property => property.sqft <= filters.maxSqft);
  }

  if (filters.featured) {
    results = results.filter(property => property.featured);
  }

  if (filters.newConstruction) {
    results = results.filter(property => property.newConstruction);
  }

  if (filters.amenities && filters.amenities.length > 0) {
    results = results.filter(property => 
      filters.amenities.every(amenity => property.amenities.includes(amenity))
    );
  }

  if (filters.features && filters.features.length > 0) {
    results = results.filter(property => 
      filters.features.every(feature => property.features.includes(feature))
    );
  }

  return results;
};

export const getPropertyById = (id) => {
  return sampleProperties.find(property => property.id === id);
};

export const getRelatedProperties = (propertyId, limit = 3) => {
  const property = getPropertyById(propertyId);
  if (!property) return [];

  return sampleProperties
    .filter(p => p.id !== propertyId)
    .filter(p => 
      p.location === property.location ||
      p.propertyType === property.propertyType ||
      p.price >= property.price * 0.8 && p.price <= property.price * 1.2
    )
    .slice(0, limit);
};