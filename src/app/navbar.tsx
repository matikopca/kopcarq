'use client'
import Image from "next/image"
import React, { useRef, useState } from "react";
import { Turn as Hamburger } from 'hamburger-react'

export default function Navbar() {


    const [isOpen, setOpen] = useState(false)

    const toggleNav = () => { setOpen(false) }

    return (
        // <div className="z-50 grid grid-cols-4 h-20 w-full bg-gradient-to-b border-b-2 outline-black outline-1.5 outline border-b-amber-500 from-red-950 bg-red-600 text-white sticky overflow-hidden">
        <div className={`z-50 visible flex justify-between items-center w-full absolute overflow-hidden text-white md:h-16  md:bg-black md:bg-opacity-60
        ${isOpen ? "absolute top-0 h-screen bg-black transition-all ease-in duration-700" : "transition-all ease-out duration-500 w-0 h-16"}`}>

            <a href='#headerRef' onClick={toggleNav}
                className={`h-24 relative md:h-20 flex justify-center pl-3 md:p-0 md:flex-1 md:w-10/12 text-center
            ${isOpen ? "absolute top-0 p-0" : ""} `}>
                <Image src="/kopcarqblanco.png" alt="Kopcarq Logo" width={150} height={150}
                    className={`h-min w-fit md:h-full md:w-fit top-0 left-0 relative rounded-br-md`} />
            </a>

            <div className={`bg-red-500 flex m-0 top-0 right-0 absolute pl-3 justify-center items-center rounded-bl-md md:hidden 
            ${isOpen ? "absolute h-16 top-0 right-0" : "h-16"} `}>
                <Hamburger toggled={isOpen} toggle={setOpen} direction="left" />
            </div>

            <div className={`-z-10  flex flex-col h-0 w-0 overflow-hidden relative text-center justify-center items-center rounded-bl-[50px]
            md:w-screen md:h-16 md:top-0 md:right-0 md:rounded-none md:flex-row md:flex-[5-0-0] 
            ${isOpen ? "transition-none ease-in duration-300 top-0 right-0 h-screen w-screen rounded-bl-none" :
                    "transition-none ease-out duration-700 -top-5"}`} >

                <a href='#trabajosRef' onClick={toggleNav}
                    className="flex-1 max-h-14 md:h-auto font-bold hover:text-red-500 hover:ease-in-out hover:rounded-b-2xl hover:border-solid hover:border-collapse transition-all duration-400 hover:scale-150">
                    TRABAJOS
                </a>

                <a href='#nosotrosRef' onClick={toggleNav}
                    className="flex-1 max-h-14 md:h-auto font-bold hover:text-red-500 hover:ease-in-out hover:rounded-b-2xl hover:border-solid hover:border-collapse transition-all duration-400 hover:scale-150">
                    NOSOTROS
                </a>

                <a href='#contactoRef' onClick={toggleNav} className="flex-1 max-h-14 md:h-auto font-bold transition-all duration-400 hover:scale-150">
                    <span className="md:py-1 px-3 md:bg-red-500 hover:ease-in-out hover:border-solid hover:border-collapse ">
                        CONTACTO
                    </span>
                </a>

            </div >
        </div >
    )
}
