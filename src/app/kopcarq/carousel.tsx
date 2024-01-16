'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Carousel({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    };

    const handlePrevSlide = () => {
        let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
    };

    useEffect(() => {
        // Auto-slide every 5 seconds (adjust the interval as needed)
        const interval = setInterval(() => {
            handleNextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className="flex flex-col relative w-screen h-screen">

            <AiOutlineLeft
                onClick={handlePrevSlide}
                className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
            />

            <div className="w-full h-[50vh] flex overflow-hidden relative m-auto">
                {images.map((image, index) => (
                    <div key={index} className={`w-full h-full ${index === currentSlide ? '' : 'hidden'}`}>
                        <Image
                            src={image.src}
                            alt="image"
                            layout="fill"
                            objectFit="cover"
                            className="animate-fadeIn transition-all duration-75"
                        />
                    </div>
                ))}
            </div>

            <AiOutlineRight
                onClick={handleNextSlide}
                className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
            />

            <div className="relative flex justify-center p-2">
                {images.map((_, index) => (
                    <div
                        className={
                            index === currentSlide
                                ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                                : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
                        }
                        key={index}
                        onClick={() => {
                            setCurrentSlide(index);
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
