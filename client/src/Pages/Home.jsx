
import React from 'react';

import './Home.css';

const Home = () => {
  return (
    <div
    className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-gray-600"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg')" }}

    >
      
      <main className="bg-gray-100 min-h-screen py-10">
        <section className="container mx-auto px-6">
          <div className="flex flex-col items-center space-y-10">
            <div className="home-section">
              {/* <div className="image-container from-left">
                <img src="https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg" alt="Placeholder 1" className="rounded shadow-lg" />
              </div> */}
              <div className="text-container">
                <h2 className="text-3xl font-bold mb-2">Welcome to Our Decentralized Loan Application</h2>
                <p className="text-lg text-white">Join us in empowering financial freedom. Our platform offers secure and transparent loan services, ensuring that you have control over your financial decisions.</p>
              </div>
            </div>
            <div className="home-section">
              {/* <div className="image-container from-right">
                <img src="https://via.placeholder.com/300" alt="Placeholder 2" className="rounded shadow-lg" />
              </div> */}
              <div className="text-container">
                <h2 className="text-3xl font-bold mb-2">Our Mission</h2>
                <p className="text-lg text-gray-700">We aim to create a decentralized and transparent loan ecosystem where users can access loans without the hassle of traditional financial institutions. Your privacy and security are our top priorities.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default Home;