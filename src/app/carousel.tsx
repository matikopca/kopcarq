// Carousel.jsx
'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';


const images = [
    '/edif1.jpg',
    '/edif2.jpg',
    '/edif3.jpg',
];

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
        }, 5000); // Change the interval as needed (5000ms = 5 seconds)

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-screen h-full overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`w-full h-full absolute ${index === currentSlide ? 'animate-fadeRightAnimation' : 'opacity-0 pointer-events-none animate-fadeLeftAnimation'
                        }`}
                // style={{ animation: index === currentSlide ? 'slideInAnimation 4s ease-in-out' : 'slideOutAnimation 5s ease-in-out' }}
                >
                    <Image
                        src={image}
                        alt={`image-${index}`}
                        className="w-full h-full object-cover"
                        layout='cover'
                        width={3000}
                        height={3000}
                    />
                </div>
            ))}
        </div>
    );
};

export default Carousel;
