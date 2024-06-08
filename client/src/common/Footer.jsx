// src/components/Footer.js
import React, { useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      document.querySelectorAll('.footer-content').forEach((el) => {
        el.classList.add('slide-in-bottom');
      });
    }
  }, [inView]);

  return (
    <footer ref={ref} className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 footer-content opacity-0 transform translate-y-20 transition-all duration-700 ease-in-out pl-40">
        <div>
          <h3 className="text-lg font-bold mb-2">ABOUT COMPANY</h3>
          <ul>
            <li className="mb-1 hover:text-gray-400 transition-colors duration-300">About Creaters</li>
            <li className="mb-1 hover:text-gray-400 transition-colors duration-300">Impact</li>
            <li className="mb-1 hover:text-gray-400 transition-colors duration-300">Reach & Presence</li>
            <li className="mb-1 hover:text-gray-400 transition-colors duration-300">Smilestones</li>
            <li className="mb-1 hover:text-gray-400 transition-colors duration-300">Privacy Policy</li>
          </ul>
        </div>
        {/* <div>
          <h3 className="text-lg font-bold mb-2">OUR WORK</h3>
          <ul>
            <li className="mb-1 hover:text-gray-400 transition-colors duration-300">Education</li>
            <li className="mb-1 hover:text-gray-400 transition-colors duration-300">Health</li>
            <li className="mb-1 hover:text-gray-400 transition-colors duration-300">Livelihood</li>
            <li className="mb-1 hover:text-gray-400 transition-colors duration-300">Women Empowerment</li>
            <li className="mb-1 hover:text-gray-400 transition-colors duration-300">Disaster Response</li>
          </ul>
        </div> */}
        {/* <div>
          <h3 className="text-lg font-bold mb-2">CAMPAIGNS</h3>
          <ul>
            <li className="mb-1 hover:text-gray-400 transition-colors duration-300">Shiksha Na Ruke</li>
            <li className="mb-1 hover:text-gray-400 transition-colors duration-300">Health Cannot Wait</li>
            <li className="mb-1 hover:text-gray-400 transition-colors duration-300">She Can Fly</li>
            <li className="mb-1 hover:text-gray-400 transition-colors duration-300">Swabhiman</li>
            <li className="mb-1 hover:text-gray-400 transition-colors duration-300">Tayyari Kal Ki</li>
          </ul>
        </div> */}
        <div>
          <h3 className="text-lg font-bold mb-2">GET INVOLVED</h3>
          <ul>
            <li className="mb-1 hover:text-gray-400 transition-colors duration-300">Individual Support</li>
            <li className="mb-1 hover:text-gray-400 transition-colors duration-300">Corporate Partnerships</li>
            <li className="mb-1 hover:text-gray-400 transition-colors duration-300">Volunteer</li>
            <li className="mb-1 hover:text-gray-400 transition-colors duration-300">School Partnerships</li>
            <li className="mb-1 hover:text-gray-400 transition-colors duration-300">Careers</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">RESOURCE CENTRE</h3>
          <ul>
            <li className="mb-1 hover:text-gray-400 transition-colors duration-300">Annual Report</li>
            <li className="mb-1 hover:text-gray-400 transition-colors duration-300">Newsletter</li>
            <li className="mb-1 hover:text-gray-400 transition-colors duration-300">Stories of Change</li>
            <li className="mb-1 hover:text-gray-400 transition-colors duration-300">The Smile Blog</li>
            <li className="mb-1 hover:text-gray-400 transition-colors duration-300">Films</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 footer-content opacity-0 transform translate-y-20 transition-all duration-700 ease-in-out pl-40">
        <div className="text-center md:text-left">
          <p className="mb-2">Joining Hands for Rising Heads</p>
          <p className="mb-2">NIT Patna, Bihar 800001</p>
          <p className="mb-2">Contact Us: Tel: +91-11-43123700 | E-mail: info@smilefoundationindia.org</p>
          <p className="mb-2"></p>
        </div>
        <div className="flex justify-center mt-4 space-x-4 pl-40">
          <a href="#" className="hover:text-gray-400 transition-colors duration-300"><FaFacebookF /></a>
          <a href="#" className="hover:text-gray-400 transition-colors duration-300"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-400 transition-colors duration-300"><FaYoutube /></a>
          <a href="#" className="hover:text-gray-400 transition-colors duration-300"><FaInstagram /></a>
          <a href="#" className="hover:text-gray-400 transition-colors duration-300"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
