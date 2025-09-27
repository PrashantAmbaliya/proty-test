/**
 * Property type definitions and schemas
 */

/**
 * Property object structure
 * @typedef {Object} Property
 * @property {string} id - Unique property identifier
 * @property {string} title - Property title/name
 * @property {string} description - Property description
 * @property {number} price - Property price
 * @property {string} priceFormatted - Formatted price string
 * @property {string} location - Property location
 * @property {string} address - Full property address
 * @property {string} city - City name
 * @property {string} state - State name
 * @property {string} zipCode - ZIP code
 * @property {string} country - Country name
 * @property {number} bedrooms - Number of bedrooms
 * @property {number} bathrooms - Number of bathrooms
 * @property {number} sqft - Square footage
 * @property {string} propertyType - Type of property (Single Family, Condo, etc.)
 * @property {string} status - Property status (For Sale, For Rent, Sold, etc.)
 * @property {string[]} images - Array of image URLs
 * @property {string} featuredImage - Main/featured image URL
 * @property {string[]} amenities - Array of amenities
 * @property {string[]} features - Array of property features
 * @property {number} yearBuilt - Year the property was built
 * @property {number} lotSize - Lot size in square feet
 * @property {boolean} featured - Whether property is featured
 * @property {boolean} newConstruction - Whether property is new construction
 * @property {number} daysOnMarket - Days the property has been on market
 * @property {string} mlsNumber - MLS listing number
 * @property {Object} coordinates - GPS coordinates
 * @property {number} coordinates.lat - Latitude
 * @property {number} coordinates.lng - Longitude
 * @property {Object} agent - Listing agent information
 * @property {string} agent.id - Agent ID
 * @property {string} agent.name - Agent name
 * @property {string} agent.email - Agent email
 * @property {string} agent.phone - Agent phone
 * @property {string} agent.photo - Agent photo URL
 * @property {Date} createdAt - Creation date
 * @property {Date} updatedAt - Last update date
 */

/**
 * Property search filters
 * @typedef {Object} PropertyFilters
 * @property {string} location - Location filter
 * @property {string} propertyType - Property type filter
 * @property {number} minPrice - Minimum price filter
 * @property {number} maxPrice - Maximum price filter
 * @property {number} minBedrooms - Minimum bedrooms filter
 * @property {number} maxBedrooms - Maximum bedrooms filter
 * @property {number} minBathrooms - Minimum bathrooms filter
 * @property {number} maxBathrooms - Maximum bathrooms filter
 * @property {number} minSqft - Minimum square footage filter
 * @property {number} maxSqft - Maximum square footage filter
 * @property {string[]} amenities - Amenities filter
 * @property {string[]} features - Features filter
 * @property {number} minYearBuilt - Minimum year built filter
 * @property {number} maxYearBuilt - Maximum year built filter
 * @property {boolean} featured - Featured properties only
 * @property {boolean} newConstruction - New construction only
 */

/**
 * Property search result
 * @typedef {Object} PropertySearchResult
 * @property {Property[]} properties - Array of properties
 * @property {number} total - Total number of properties
 * @property {number} page - Current page number
 * @property {number} limit - Number of properties per page
 * @property {number} totalPages - Total number of pages
 * @property {boolean} hasNext - Whether there are more pages
 * @property {boolean} hasPrev - Whether there are previous pages
 */

/**
 * Property comparison object
 * @typedef {Object} PropertyComparison
 * @property {string[]} propertyIds - Array of property IDs being compared
 * @property {Property[]} properties - Array of properties being compared
 * @property {Date} createdAt - Comparison creation date
 */

/**
 * Property favorite object
 * @typedef {Object} PropertyFavorite
 * @property {string} id - Favorite ID
 * @property {string} userId - User ID
 * @property {string} propertyId - Property ID
 * @property {Date} createdAt - Favorite creation date
 */

/**
 * Property view history
 * @typedef {Object} PropertyView
 * @property {string} id - View ID
 * @property {string} userId - User ID (if logged in)
 * @property {string} propertyId - Property ID
 * @property {string} sessionId - Session ID
 * @property {Date} viewedAt - View timestamp
 * @property {string} source - Source of the view (search, direct, etc.)
 */

/**
 * Property inquiry
 * @typedef {Object} PropertyInquiry
 * @property {string} id - Inquiry ID
 * @property {string} propertyId - Property ID
 * @property {string} name - Inquirer name
 * @property {string} email - Inquirer email
 * @property {string} phone - Inquirer phone
 * @property {string} message - Inquiry message
 * @property {string} preferredContact - Preferred contact method
 * @property {Date} createdAt - Inquiry creation date
 * @property {string} status - Inquiry status (new, contacted, closed)
 */

/**
 * Property tour request
 * @typedef {Object} PropertyTour
 * @property {string} id - Tour ID
 * @property {string} propertyId - Property ID
 * @property {string} name - Requester name
 * @property {string} email - Requester email
 * @property {string} phone - Requester phone
 * @property {Date} preferredDate - Preferred tour date
 * @property {string} preferredTime - Preferred tour time
 * @property {string} message - Additional message
 * @property {Date} createdAt - Tour request creation date
 * @property {string} status - Tour status (pending, scheduled, completed, cancelled)
 */

// Export property type definitions
export const PropertyTypes = {
  PROPERTY: 'Property',
  PROPERTY_FILTERS: 'PropertyFilters',
  PROPERTY_SEARCH_RESULT: 'PropertySearchResult',
  PROPERTY_COMPARISON: 'PropertyComparison',
  PROPERTY_FAVORITE: 'PropertyFavorite',
  PROPERTY_VIEW: 'PropertyView',
  PROPERTY_INQUIRY: 'PropertyInquiry',
  PROPERTY_TOUR: 'PropertyTour',
};

// Property validation schemas
export const PropertyValidation = {
  REQUIRED_FIELDS: [
    'title',
    'price',
    'location',
    'bedrooms',
    'bathrooms',
    'sqft',
    'propertyType',
    'status',
  ],
  OPTIONAL_FIELDS: [
    'description',
    'amenities',
    'features',
    'yearBuilt',
    'lotSize',
    'coordinates',
    'agent',
  ],
  PRICE_RANGE: {
    MIN: 0,
    MAX: 1000000000, // 1 billion
  },
  BEDROOMS_RANGE: {
    MIN: 0,
    MAX: 20,
  },
  BATHROOMS_RANGE: {
    MIN: 0,
    MAX: 20,
  },
  SQFT_RANGE: {
    MIN: 100,
    MAX: 100000,
  },
};

// Property status constants
export const PropertyStatus = {
  FOR_SALE: 'For Sale',
  FOR_RENT: 'For Rent',
  SOLD: 'Sold',
  RENTED: 'Rented',
  PENDING: 'Pending',
  OFF_MARKET: 'Off Market',
  COMING_SOON: 'Coming Soon',
};

// Property type constants
export const PropertyType = {
  SINGLE_FAMILY: 'Single Family',
  CONDO: 'Condo',
  TOWNHOUSE: 'Townhouse',
  PENTHOUSE: 'Penthouse',
  VILLA: 'Villa',
  ESTATE: 'Estate',
  APARTMENT: 'Apartment',
  DUPLEX: 'Duplex',
  MULTI_FAMILY: 'Multi-Family',
  LAND: 'Land',
  COMMERCIAL: 'Commercial',
};

// Property features constants
export const PropertyFeatures = {
  WATERFRONT: 'Waterfront',
  MOUNTAIN_VIEW: 'Mountain View',
  CITY_VIEW: 'City View',
  OCEAN_VIEW: 'Ocean View',
  GOLF_COURSE: 'Golf Course',
  BEACH_ACCESS: 'Beach Access',
  SKI_IN_SKI_OUT: 'Ski-in/Ski-out',
  HISTORIC: 'Historic',
  NEW_CONSTRUCTION: 'New Construction',
  RENOVATED: 'Renovated',
  SMART_HOME: 'Smart Home',
  SUSTAINABLE: 'Sustainable',
  LUXURY: 'Luxury',
  GATED: 'Gated Community',
  PRIVATE: 'Private',
};

// Property amenities constants
export const PropertyAmenities = {
  POOL: 'Swimming Pool',
  GARAGE: 'Garage',
  GARDEN: 'Garden',
  BALCONY: 'Balcony',
  ELEVATOR: 'Elevator',
  GYM: 'Gym',
  CONCIERGE: 'Concierge',
  SECURITY: 'Security',
  PARKING: 'Parking',
  FIREPLACE: 'Fireplace',
  WINE_CELLAR: 'Wine Cellar',
  HOME_THEATER: 'Home Theater',
  TENNIS_COURT: 'Tennis Court',
  GUEST_HOUSE: 'Guest House',
  MARINA_ACCESS: 'Marina Access',
  HELIPAD: 'Helipad',
  BOAT_DOCK: 'Boat Dock',
  STABLE: 'Stable',
  ORCHARD: 'Orchard',
  VINEYARD: 'Vineyard',
};