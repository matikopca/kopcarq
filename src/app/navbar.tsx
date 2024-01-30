'use client'
import Image from "next/image"
import React, { useRef } from "react";
export default function Navbar() {

    // const headerRef = useRef(null);
    // const nosotrosRef = useRef(null);
    // const trabajosRef = useRef(null);
    // const contactoRef = useRef(null);

    // const scrollToSection = (ref) => {
    //     if (ref.current) {
    //         ref.current.scrollIntoView();
    //     } else {
    //         console.error(`Ref is null for section: ${ref}`);
    //     }
    // };

    return (
        <div className="z-50 grid grid-cols-4 h-20 w-full bg-gradient-to-b border-b-2 outline-black outline-1.5 outline border-b-amber-500 from-red-950 bg-red-600 text-white sticky overflow-hidden">

            <a href='#headerRef' className="col-span-1 flex items-center justify-center overflow-hidden hover:scale-110">
                <div>
                    <Image src="/kopcarqlogo.png" alt="Kopcarq Logo" width={200} height={200} className="max-h-full max-w-full" />
                </div>
            </a>

            <a href='#nosotrosRef' className="col-span-1 flex items-center justify-center font-bold 
            hover:ease-in-out hover:bg-red-950 hover:rounded-b-2xl hover:border-solid hover:border-collapse  duration-300 
            hover:scale-110 hover:ring-1 hover:ring-amber-500"
            >NOSOTROS</a>
            <a href='#trabajosRef' className="col-span-1 flex items-center justify-center font-bold 
            hover:ease-in-out hover:bg-red-950 hover:rounded-b-2xl hover:border-solid hover:border-collapse  duration-300 
            hover:scale-110 hover:ring-1 hover:ring-amber-500"
            >TRABAJOS</a>
            <a href='#contactoRef' className="col-span-1 flex items-center justify-center font-bold 
            hover:ease-in-out hover:bg-red-950 hover:rounded-b-2xl hover:border-solid hover:border-collapse  duration-300 
            hover:scale-110 hover:ring-1 hover:ring-amber-500"
            >CONTACTO</a>
        </div >
    )
}
