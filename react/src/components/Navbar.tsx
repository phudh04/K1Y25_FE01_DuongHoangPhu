import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-center items-center">
      <ul className="flex space-x-5 m-0 p-0 list-none">
        <li className="menu-item">
          <a href="#" className="text-white text-base px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-red-600 hover:text-white hover:underline">Home</a>
        </li>
        <li className="menu-item">
          <a href="#" className="text-white text-base px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-red-600 hover:text-white hover:underline">Có sẵn</a>
        </li>
        <li className="menu-item">
          <a href="circle" className="text-white text-base px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-red-600 hover:text-white hover:underline">Circle</a>
        </li>
        <li className="menu-item">
          <a href="shape" className="text-white text-base px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-red-600 hover:text-white hover:underline">Hình thang</a>
        </li>
        <li className="menu-item">
          <a href="about" className="text-white text-base px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-red-600 hover:text-white hover:underline">About</a>
        </li>
      </ul>
    </nav>
  );
}
