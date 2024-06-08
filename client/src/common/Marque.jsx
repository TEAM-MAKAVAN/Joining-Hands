
import React from 'react';
import './Marque.css';

const Marque = () => {
  return (
    <div className="marquee-container bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-4 overflow-hidden">
      <div className="marquee-content">
        <p className="text-2xl text-gray-900 font-bold tracking-wider">
          Welcome to Our Decentralized Loan Application! Join us in empowering financial freedom.
        </p>
      </div>
    </div>
  );
};

export default Marque;
