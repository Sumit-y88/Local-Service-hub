import React from 'react';
import { MapPin, Phone, Mail, Star } from 'lucide-react';

const CardPeople = ({ serviceman }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        {/* Avatar and Basic Info */}
        <div className="flex items-start gap-4 mb-4">
          <img
            src={serviceman.image}
            alt={serviceman.name}
            className="w-16 h-16 rounded-full"
          />

          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900">
              {serviceman.name}
            </h3>

            <p className="text-blue-600 font-medium">
              {serviceman.service}
            </p>

            <div className="flex items-center gap-1 mt-1">
              <Star className="text-yellow-400 fill-yellow-400" size={16} />
              <span className="text-sm font-semibold text-gray-700">
                {serviceman.rating}
              </span>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={16} className="text-gray-400" />
            <span className="text-sm">{serviceman.location}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Phone size={16} className="text-gray-400" />
            <span className="text-sm">{serviceman.phone}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Mail size={16} className="text-gray-400" />
            <span className="text-sm">{serviceman.email}</span>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            {serviceman.experience} experience
          </span>
        </div>

        {/* Action */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default CardPeople;
