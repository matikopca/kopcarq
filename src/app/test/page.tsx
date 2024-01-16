// Carousel.jsx
'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';


const images = [
    '/int1.png',
    '/int2.png',
    '/kopcarqlogo.png',
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
        <div className="relative w-screen h-4/6 overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`w-full h-full absolute transition-transform ${index === currentSlide ? 'transform translate-x-0 opacity-100' : 'transform translate-x-full opacity-0 pointer-events-none'
                        }`}
                    style={{ animation: index === currentSlide ? 'slideInAnimation 1s ease-in-out' : 'slideOutAnimation 1s ease-in-out' }}
                >
                    <Image
                        src={image}
                        alt={`image-${index}`}
                        className="w-full h-full object-cover"
                        layout='fill'
                    />
                </div>
            ))}
        </div>
    );
};

export default Carousel;
