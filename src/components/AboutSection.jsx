import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-16 px-10 bg-blue-50 scroll-mt-15">
        <h2 className="text-center text-3xl font-bold mb-10 text-gray-800 ">About Us</h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold  text-gray-800 mb-4">
            Trust Local Service
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our Advanced Local Service Discovery Platform connects users with
            trusted local professionals such as electricians, plumbers,
            carpenters, and other essential service providers.
          </p>
          <p className="text-gray-600 leading-relaxed">
            By using location-based search and a simple user interface, we aim
            to make finding reliable local services fast, easy, and transparent
            for everyone.
          </p>
        </div>

        {/* Right Highlights */}
        <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-md">
          <ul className="space-y-4 text-gray-700">
            <li>✔ Location-based service discovery</li>
            <li>✔ Verified local professionals</li>
            <li>✔ Fast and reliable search</li>
            <li>✔ Multiple service categories</li>
            <li>✔ User-friendly interface</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
