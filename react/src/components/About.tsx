import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-2xl bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 mb-4">
          Welcome to our website! We are dedicated to providing the best services
          and ensuring customer satisfaction. Our team is passionate about
          delivering high-quality solutions tailored to your needs.
        </p>
        <p className="text-gray-600">
          Feel free to explore our site and get in touch with us for more
          information. We are always here to help!
        </p>
      </div>
    </div>
  );
}
