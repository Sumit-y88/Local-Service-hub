import React from "react";

const services = [
  {
    title: "Electrician",
    desc: "Certified electricians for home and office electrical needs.",
    rating: "4.8",
    available: "Available Near You",
    icon: "⚡",
  },
  {
    title: "Plumber",
    desc: "Expert plumbers for leaks, fittings, and installations.",
    rating: "4.7",
    available: "Available Near You",
    icon: "🚰",
  },
  {
    title: "Carpenter",
    desc: "Skilled carpenters for furniture and woodwork.",
    rating: "4.6",
    available: "Available Near You",
    icon: "🪚",
  },
  {
    title: "AC Repair",
    desc: "Fast and reliable AC installation and servicing.",
    rating: "4.8",
    available: "24/7 Service",
    icon: "❄️",
  },
  {
    title: "Home Cleaning",
    desc: "Professional cleaning services for homes and offices.",
    rating: "4.9",
    available: "On Demand",
    icon: "🧹",
  },
  {
    title: "Appliance Repair",
    desc: "Repair services for washing machines, fridges, and more.",
    rating: "4.7",
    available: "Quick Response",
    icon: "🔧",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 px-6 bg-white scroll-mt-15">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Our Services
          </h2>
          <p className="text-gray-600 mt-2">
            Discover trusted professionals for your everyday needs
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-blue-50 rounded-2xl p-6 shadow-md
                         transition-all duration-300
                         hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4">
                {service.desc}
              </p>

              {/* Info */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>⭐ {service.rating}</span>
                <span>{service.available}</span>
              </div>

              {/* CTA */}
              <button className="w-full bg-blue-600 text-white py-2 rounded-xl
                                 hover:bg-blue-700 transition">
                Find {service.title}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
