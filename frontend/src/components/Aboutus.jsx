import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 text-center">About Us</h2>
        <p className="text-lg mb-4">
          This project is developed by Raja Usama using the MERN stack with JWT
          authentication.
        </p>
        <p className="text-lg mb-4">
          The MERN stack includes MongoDB, Express.js, React, and Node.js,
          providing a robust foundation for building full-stack web
          applications.
        </p>
        <p className="text-lg mb-4">
          JWT authentication is used to secure routes and manage user sessions
          effectively.
        </p>
        <p className="text-lg">
          For more details, feel free to contact us at{" "}
          <span className="font-semibold">wiserfeed@gmail.com</span>.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
