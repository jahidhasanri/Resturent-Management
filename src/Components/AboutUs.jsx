import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg mt-28 md:mt-14">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        About Our Restaurant
      </h1>

      <p className="text-gray-600 text-lg leading-relaxed">
        Welcome to <strong>Resto</strong>, where we serve delicious food with passion. Our restaurant has been
        delighting customers with mouth-watering dishes and excellent service for over a decade. We take
        pride in using the freshest ingredients to create an unforgettable dining experience.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-700">Our Story</h2>
      <p className="text-gray-600">
        Founded in <strong>2012</strong>, <strong>Resto</strong> started as a small family-owned café. Over the years, we have grown into
        a beloved destination for food lovers. Our mission is simple: serve high-quality food that brings
        people together.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-700">Visit Us</h2>
      <div className="text-gray-600 space-y-2">
        <p>📍 <strong>Location:</strong> 123 Food Street, Dhaka, Bangladesh</p>
        <p>📞 <strong>Contact:</strong> <a href="tel:+8801731847198" className="text-blue-600 hover:underline">+880 1731-847198</a></p>
        <p>📧 <strong>Email:</strong> <a href="mailto:jahadhasanrifat@gmail.com" className="text-blue-600 hover:underline">jahadhasanrifat@gmail.com</a></p>
        <p>⏰ <strong>Opening Hours:</strong> Mon-Sun, 10 AM - 10 PM</p>
      </div>
    </div>
  );
};

export default AboutUs;
