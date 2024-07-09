import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">
              Custom Web Development
            </h3>
            <p className="text-lg">
              We specialize in creating custom web applications tailored to your
              specific needs and requirements.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">
              MERN Stack Development
            </h3>
            <p className="text-lg">
              Harnessing the power of MongoDB, Express.js, React, and Node.js to
              build scalable and efficient applications.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Shopify Development</h3>
            <p className="text-lg">
              We create custom Shopify e-commerce stores that are user-friendly,
              scalable, and visually appealing.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">
              WordPress E-commerce Development
            </h3>
            <p className="text-lg">
              Transforming your WordPress site into a powerful e-commerce
              platform with customized solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
