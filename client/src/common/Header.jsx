
import React from 'react';


const Header = ({ isLoggedIn }) => {
  
  return (
    <div>
      
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Left side: Logo and Title */}
        <div className="flex items-center space-x-4 pl-5">
          <img src="https://images.pexels.com/photos/19936067/pexels-photo-19936067/free-photo-of-woman-sitting-on-rock-with-clouds-below-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Logo" className="h-8 w-8 transition-transform duration-300 hover:scale-110" />
          <span className="text-xl font-bold transition-colors duration-300 hover:text-gray-400">Joining Hands for Rising Heads</span>
        </div>
        
        {/* Center: Navigation Links */}
        <nav className="hidden md:flex space-x-8 pr-10">
          <a href="/" className="transition-colors duration-300 hover:text-gray-400">Home</a>
          <a href="/about" className="transition-colors duration-300 hover:text-gray-400">About</a>
          <a href="/user" className="transition-colors duration-300 hover:text-gray-400">User</a>
          <a href="/manager" className="transition-colors duration-300 hover:text-gray-400">Manager</a>
        </nav>
        
        {/* Right side: Get Started Button */}
        <div className="hidden md:block">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform duration-300 hover:scale-110 pr-8">
            <a href="/register"> {isLoggedIn ? 'Logout' : 'Sign Up'}</a>
          </button>
        </div>
      </div>
    </header>
    </div>
  );
};

export default Header;
