import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const PropertyCard = ({ property }) => {
  const {
    id,
    title,
    price,
    location,
    bedrooms,
    bathrooms,
    sqft,
    image,
    featured = false,
    status = 'For Sale',
  } = property;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover"
        />
        {featured && (
          <div className="absolute top-4 left-4">
            <Badge variant="primary">Featured</Badge>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <Badge variant={status === 'For Sale' ? 'success' : 'warning'}>
            {status}
          </Badge>
        </div>
        <div className="absolute bottom-4 right-4">
          <Button
            variant="ghost"
            size="sm"
            className="bg-white/90 hover:bg-white text-gray-900"
          >
            ❤️
          </Button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 mb-2">{location}</p>
          <div className="text-2xl font-bold text-blue-600 mb-4">
            {price}
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.707.707a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            {bedrooms} bed
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            {bathrooms} bath
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            {sqft.toLocaleString()} sqft
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button variant="primary" size="sm" className="flex-1">
            View Details
          </Button>
          <Button variant="outline" size="sm">
            Schedule Tour
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;