import React, { useState } from 'react';
import { Search, MapPin, Phone, Mail, Star } from 'lucide-react';
import AllServicemen from './AllServicemen';
import NoResult from './NoResult';
import CardPeople from './CardPeople';

const SearchBox = () => {



  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Get unique locations and services
  const locations = [...new Set(AllServicemen.map(s => s.location))];
  const services = [...new Set(AllServicemen.map(s => s.service))];

  // Filter servicemen based on selected filters
  const filteredServicemen = AllServicemen.filter(serviceman => {
    const matchesLocation = !selectedLocation || serviceman.location === selectedLocation;
    const matchesService = !selectedService || serviceman.service === selectedService;
    const matchesSearch = !searchQuery || 
      serviceman.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      serviceman.service.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesLocation && matchesService && matchesSearch;
  });

  const handleReset = () => {
    setSelectedLocation('');
    setSelectedService('');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
    

      {/* Search and Filters Section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Bar */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search by name or service
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Locations</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Service Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Type
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Services</option>
                {services.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filters and Reset */}
          {(selectedLocation || selectedService || searchQuery) && (
            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                {selectedLocation && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    Location: {selectedLocation}
                  </span>
                )}
                {selectedService && (
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    Service: {selectedService}
                  </span>
                )}
                {searchQuery && (
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                    Search: {searchQuery}
                  </span>
                )}
              </div>
              <button
                onClick={handleReset}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredServicemen.length}</span> servicemen
          </p>
        </div>

        {/* Servicemen Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServicemen.map(serviceman => (
            <CardPeople 
            key={serviceman.id}
            serviceman={serviceman}
            />
          ))}
        </div>

        {/* No Results Message */}
        <NoResult finalFilter = {filteredServicemen}/>
      </div>
    </div>
  );
};

export default SearchBox;