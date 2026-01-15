import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-50 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand Section */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-3">
            LocalServe
          </h3>
          <p className="text-gray-600 text-sm">
            A smart platform to discover trusted local service professionals
            near you quickly and easily.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#home" className="hover:text-blue-600">Home</a></li>
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#services" className="hover:text-blue-600">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Services</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Electricians</li>
            <li>Plumbers</li>
            <li>Carpenters</li>
            <li>AC Repair</li>
            <li>Home Cleaning</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Contact</h4>
          <p className="text-gray-600 text-sm">📍 Mumbai, India</p>
          <p className="text-gray-600 text-sm">📧 support@localserve.com</p>
          <p className="text-gray-600 text-sm">📞 +91 9XXXXXXXXX</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center py-4 border-t border-blue-100 text-gray-500 text-sm">
        © {new Date().getFullYear()} LocalServe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
