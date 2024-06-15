import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ImageCarousel from "./ImageCrousel";

const Home = () => {
  return (
    <div>
      <div className="home-section">
        <div className="text-container">
          <h2 className="text-4xl font-bold mb-2">
            Welcome to Our Decentralized Loan Application
          </h2>
          <p className="text-lg text-white">
            Join us in empowering financial freedom. Our platform offers secure
            and transparent loan services, ensuring that you have control over
            your financial decisions.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <ImageCarousel />
      </div>


      <div className="bg-blue-500 min-h-screen py-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg text-white mb-8">
          We aim to create a decentralized and transparent loan ecosystem where users can access loans without the hassle of traditional financial institutions. Your privacy and security are our top priorities.
        </p>
      </div>
      <div className="text-center text-white py-4 mb-8">
        <p className="text-2xl">Three main parties that interact with each other:</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center text-white space-y-4 md:space-y-0 md:space-x-4">
        <div className="bg-purple-600 hover:bg-purple-700 transition-colors duration-300 rounded-lg px-6 py-4 w-64 text-center">
          <p>Borrower: Who will raise Demand.</p>
        </div>
        <div className="bg-purple-600 hover:bg-purple-700 transition-colors duration-300 rounded-lg px-6 py-4 w-64 text-center">
          <p>Lenders: Who will contribute in loan.</p>
        </div>
        <div className="bg-purple-600 hover:bg-purple-700 transition-colors duration-300 rounded-lg px-6 py-4 w-64 text-center">
          <p>Manager: Who will manage all Transactions.</p>
        </div>
      </div>
    </div>

      <Link to={"/users"}>All Users</Link>
    </div>
  );
};

export default Home;
