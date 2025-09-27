/**
 * Sample neighborhood data for the LuxuryHomes application
 */

export const sampleNeighborhoods = [
  {
    id: 'neighborhood-001',
    name: 'Beverly Hills',
    location: 'Los Angeles, CA',
    description: 'Iconic luxury neighborhood known for its mansions, shopping, and celebrity residents. Features world-class dining, high-end shopping on Rodeo Drive, and beautiful tree-lined streets.',
    priceRange: {
      min: 2000000,
      max: 50000000,
      formatted: '$2M - $50M+'
    },
    image: '/images/neighborhoods/beverly-hills.jpg',
    featured: true,
    averagePrice: 8500000,
    averageDaysOnMarket: 45,
    totalProperties: 1250,
    availableProperties: 85,
    medianSqft: 4500,
    popularAmenities: ['Gated Community', 'Security', 'Shopping', 'Dining', 'Entertainment'],
    schools: [
      { name: 'Beverly Hills High School', rating: 9.2, type: 'Public' },
      { name: 'Harvard-Westlake School', rating: 9.8, type: 'Private' },
      { name: 'Beverly Hills Elementary', rating: 8.9, type: 'Public' }
    ],
    coordinates: {
      lat: 34.0736,
      lng: -118.4004
    },
    zipCodes: ['90210', '90211', '90212'],
    walkScore: 78,
    transitScore: 65,
    bikeScore: 72,
    crimeRate: 'Low',
    demographics: {
      medianAge: 42,
      medianIncome: 125000,
      population: 35000
    },
    highlights: [
      'Rodeo Drive shopping',
      'Celebrity residences',
      'Historic architecture',
      'Proximity to Hollywood',
      'Excellent schools'
    ],
    marketTrends: {
      priceChange: '+12.5%',
      daysOnMarketChange: '-8%',
      inventoryChange: '+15%'
    }
  },
  {
    id: 'neighborhood-002',
    name: 'Manhattan',
    location: 'New York, NY',
    description: 'The heart of New York City with world-class penthouses and luxury condos. Features iconic landmarks, world-class dining, and unparalleled city views.',
    priceRange: {
      min: 1500000,
      max: 100000000,
      formatted: '$1.5M - $100M+'
    },
    image: '/images/neighborhoods/manhattan.jpg',
    featured: true,
    averagePrice: 12000000,
    averageDaysOnMarket: 60,
    totalProperties: 8500,
    availableProperties: 320,
    medianSqft: 1800,
    popularAmenities: ['Concierge', 'Doorman', 'Gym', 'Pool', 'Parking'],
    schools: [
      { name: 'Stuyvesant High School', rating: 9.5, type: 'Public' },
      { name: 'Trinity School', rating: 9.9, type: 'Private' },
      { name: 'PS 6', rating: 8.7, type: 'Public' }
    ],
    coordinates: {
      lat: 40.7589,
      lng: -73.9851
    },
    zipCodes: ['10001', '10002', '10003', '10004', '10005'],
    walkScore: 98,
    transitScore: 95,
    bikeScore: 85,
    crimeRate: 'Low',
    demographics: {
      medianAge: 38,
      medianIncome: 95000,
      population: 1694000
    },
    highlights: [
      'Central Park proximity',
      'World-class dining',
      'Cultural attractions',
      'Financial district',
      'Shopping districts'
    ],
    marketTrends: {
      priceChange: '+8.2%',
      daysOnMarketChange: '-12%',
      inventoryChange: '+5%'
    }
  },
  {
    id: 'neighborhood-003',
    name: 'Malibu',
    location: 'Los Angeles, CA',
    description: 'Exclusive beachfront properties with stunning ocean views and privacy. Known for celebrity homes, pristine beaches, and luxury beachfront living.',
    priceRange: {
      min: 3000000,
      max: 75000000,
      formatted: '$3M - $75M+'
    },
    image: '/images/neighborhoods/malibu.jpg',
    featured: true,
    averagePrice: 15000000,
    averageDaysOnMarket: 90,
    totalProperties: 450,
    availableProperties: 25,
    medianSqft: 3800,
    popularAmenities: ['Beach Access', 'Ocean View', 'Privacy', 'Security', 'Garage'],
    schools: [
      { name: 'Malibu High School', rating: 8.8, type: 'Public' },
      { name: 'Malibu Elementary', rating: 8.5, type: 'Public' },
      { name: 'Pepperdine University', rating: 9.1, type: 'Private' }
    ],
    coordinates: {
      lat: 34.0259,
      lng: -118.7798
    },
    zipCodes: ['90265'],
    walkScore: 45,
    transitScore: 25,
    bikeScore: 55,
    crimeRate: 'Very Low',
    demographics: {
      medianAge: 45,
      medianIncome: 150000,
      population: 12000
    },
    highlights: [
      'Beachfront properties',
      'Celebrity residences',
      'Privacy and seclusion',
      'Ocean views',
      'Luxury lifestyle'
    ],
    marketTrends: {
      priceChange: '+15.3%',
      daysOnMarketChange: '-5%',
      inventoryChange: '-10%'
    }
  },
  {
    id: 'neighborhood-004',
    name: 'Aspen',
    location: 'Colorado',
    description: 'Mountain luxury with ski-in/ski-out properties and breathtaking views. World-renowned ski destination with luxury mountain homes and year-round outdoor activities.',
    priceRange: {
      min: 2000000,
      max: 40000000,
      formatted: '$2M - $40M+'
    },
    image: '/images/neighborhoods/aspen.jpg',
    featured: false,
    averagePrice: 8500000,
    averageDaysOnMarket: 120,
    totalProperties: 180,
    availableProperties: 12,
    medianSqft: 4200,
    popularAmenities: ['Ski-in/Ski-out', 'Mountain View', 'Fireplace', 'Garage', 'Security'],
    schools: [
      { name: 'Aspen High School', rating: 9.1, type: 'Public' },
      { name: 'Aspen Elementary', rating: 8.9, type: 'Public' },
      { name: 'Aspen Country Day School', rating: 9.3, type: 'Private' }
    ],
    coordinates: {
      lat: 39.1911,
      lng: -106.8175
    },
    zipCodes: ['81611', '81612'],
    walkScore: 85,
    transitScore: 45,
    bikeScore: 90,
    crimeRate: 'Very Low',
    demographics: {
      medianAge: 48,
      medianIncome: 110000,
      population: 7500
    },
    highlights: [
      'Ski-in/ski-out access',
      'Mountain views',
      'Outdoor recreation',
      'Luxury amenities',
      'Privacy and seclusion'
    ],
    marketTrends: {
      priceChange: '+18.7%',
      daysOnMarketChange: '-15%',
      inventoryChange: '-20%'
    }
  },
  {
    id: 'neighborhood-005',
    name: 'Miami Beach',
    location: 'Florida',
    description: 'Tropical luxury with oceanfront condos and Art Deco architecture. Features pristine beaches, vibrant nightlife, and luxury high-rise living.',
    priceRange: {
      min: 1000000,
      max: 30000000,
      formatted: '$1M - $30M+'
    },
    image: '/images/neighborhoods/miami-beach.jpg',
    featured: false,
    averagePrice: 4500000,
    averageDaysOnMarket: 75,
    totalProperties: 2200,
    availableProperties: 150,
    medianSqft: 2200,
    popularAmenities: ['Ocean View', 'Pool', 'Concierge', 'Gym', 'Marina Access'],
    schools: [
      { name: 'Miami Beach Senior High', rating: 8.2, type: 'Public' },
      { name: 'Miami Beach Elementary', rating: 8.0, type: 'Public' },
      { name: 'Ransom Everglades School', rating: 9.4, type: 'Private' }
    ],
    coordinates: {
      lat: 25.7907,
      lng: -80.1300
    },
    zipCodes: ['33139', '33140', '33141'],
    walkScore: 92,
    transitScore: 70,
    bikeScore: 88,
    crimeRate: 'Low',
    demographics: {
      medianAge: 41,
      medianIncome: 85000,
      population: 92000
    },
    highlights: [
      'Oceanfront properties',
      'Art Deco architecture',
      'Vibrant nightlife',
      'World-class dining',
      'Beach access'
    ],
    marketTrends: {
      priceChange: '+22.1%',
      daysOnMarketChange: '-18%',
      inventoryChange: '+8%'
    }
  },
  {
    id: 'neighborhood-006',
    name: 'Hamptons',
    location: 'New York',
    description: 'Exclusive summer retreat with sprawling estates and private beaches. Known for luxury summer homes, private beaches, and high-end shopping.',
    priceRange: {
      min: 2000000,
      max: 50000000,
      formatted: '$2M - $50M+'
    },
    image: '/images/neighborhoods/hamptons.jpg',
    featured: false,
    averagePrice: 12000000,
    averageDaysOnMarket: 150,
    totalProperties: 320,
    availableProperties: 18,
    medianSqft: 5200,
    popularAmenities: ['Private Beach', 'Pool', 'Tennis Court', 'Garden', 'Garage'],
    schools: [
      { name: 'East Hampton High School', rating: 8.9, type: 'Public' },
      { name: 'Southampton High School', rating: 8.7, type: 'Public' },
      { name: 'Ross School', rating: 9.2, type: 'Private' }
    ],
    coordinates: {
      lat: 40.9634,
      lng: -72.1848
    },
    zipCodes: ['11937', '11968', '11975'],
    walkScore: 35,
    transitScore: 20,
    bikeScore: 45,
    crimeRate: 'Very Low',
    demographics: {
      medianAge: 52,
      medianIncome: 125000,
      population: 45000
    },
    highlights: [
      'Private beach access',
      'Sprawling estates',
      'Privacy and seclusion',
      'Luxury amenities',
      'Summer retreat lifestyle'
    ],
    marketTrends: {
      priceChange: '+14.8%',
      daysOnMarketChange: '-10%',
      inventoryChange: '-15%'
    }
  }
];

export const featuredNeighborhoods = sampleNeighborhoods.filter(neighborhood => neighborhood.featured);

export const getNeighborhoodById = (id) => {
  return sampleNeighborhoods.find(neighborhood => neighborhood.id === id);
};

export const getNeighborhoodsByLocation = (location) => {
  return sampleNeighborhoods.filter(neighborhood => 
    neighborhood.location.toLowerCase().includes(location.toLowerCase())
  );
};

export const getNeighborhoodsByPriceRange = (minPrice, maxPrice) => {
  return sampleNeighborhoods.filter(neighborhood => 
    neighborhood.priceRange.min >= minPrice && neighborhood.priceRange.max <= maxPrice
  );
};

export const getNeighborhoodsByState = (state) => {
  return sampleNeighborhoods.filter(neighborhood => 
    neighborhood.location.includes(state)
  );
};

export const searchNeighborhoods = (filters = {}) => {
  let results = [...sampleNeighborhoods];

  if (filters.location) {
    results = results.filter(neighborhood => 
      neighborhood.location.toLowerCase().includes(filters.location.toLowerCase()) ||
      neighborhood.name.toLowerCase().includes(filters.location.toLowerCase())
    );
  }

  if (filters.minPrice) {
    results = results.filter(neighborhood => neighborhood.priceRange.min >= filters.minPrice);
  }

  if (filters.maxPrice) {
    results = results.filter(neighborhood => neighborhood.priceRange.max <= filters.maxPrice);
  }

  if (filters.featured) {
    results = results.filter(neighborhood => neighborhood.featured);
  }

  if (filters.amenities && filters.amenities.length > 0) {
    results = results.filter(neighborhood => 
      filters.amenities.every(amenity => neighborhood.popularAmenities.includes(amenity))
    );
  }

  return results;
};

export const getNeighborhoodStats = () => {
  const totalNeighborhoods = sampleNeighborhoods.length;
  const totalProperties = sampleNeighborhoods.reduce((sum, n) => sum + n.totalProperties, 0);
  const averagePrice = sampleNeighborhoods.reduce((sum, n) => sum + n.averagePrice, 0) / totalNeighborhoods;
  const featuredCount = featuredNeighborhoods.length;

  return {
    totalNeighborhoods,
    totalProperties,
    averagePrice: Math.round(averagePrice),
    featuredCount
  };
};