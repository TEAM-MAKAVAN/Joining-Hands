// ./src/ImageCarousel.js
import React, { useState, useEffect } from 'react';

const images = [
    "https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3856027/pexels-photo-3856027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="relative w-full h-80 overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index} 
                    className={`absolute inset-0 transition-opacity duration-1000 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded">
                        <p>Image {index + 1} Text</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageCarousel;
