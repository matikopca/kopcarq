'use client'
import Image from "next/image"
import React, { useRef, useState } from "react";
import { Turn as Hamburger } from 'hamburger-react'

export default function Navbar() {


    const [isOpen, setOpen] = useState(false)

    const toggleNav = () => { setOpen(false) }

    return (
        // <div className="z-50 grid grid-cols-4 h-20 w-full bg-gradient-to-b border-b-2 outline-black outline-1.5 outline border-b-amber-500 from-red-950 bg-red-600 text-white sticky overflow-hidden">
        <div className={`z-50 visible flex justify-between items-center w-full text-white absolute overflow-hidden
        ${isOpen ? "h-screen" : "transition-all ease-out duration-700 h-[80px]"}`}>

            <a href='#headerRef' onClick={toggleNav} className="">
                <Image src="/kopcarqlogo.png" alt="Kopcarq Logo" width={150} height={150} className="h-min w-min max-h-[40px] max-w-[75px] md:h-[80px] md:w-[150px] top-0 left-0 absolute rounded-br-md" />
            </a>

            <div className="bg-red-950 flex m-0 h-min w-min top-0 right-0 absolute pl-3 justify-center items-center rounded-bl-md">
                <Hamburger toggled={isOpen} toggle={setOpen} direction="left" />
            </div>

            <div className={`-z-10 bg-gradient-to-b from-red-950 to bg-red-500 flex h-0 w-0 overflow-hidden absolute justify-center items-center rounded-bl-[50px]
            ${isOpen ? "transition-all ease-in duration-700 top-0 right-0 h-screen w-screen rounded-bl-none" :
                    "transition-all ease-out duration-700 -top-5 -right-5"}`} >
                <ul className="w-full h-[30%] flex flex-col justify-between">
                    <li className="items-center text-center text-[30px] transition-all ease-linear duration-400 hover:text-amber-500 hover:scale-125">
                        <a href='#trabajosRef' onClick={toggleNav} className="flex-1 font-bold hover:ease-in-out hover:rounded-b-2xl hover:border-solid hover:border-collapse  duration-300 hover:scale-110">
                            TRABAJOS
                        </a>
                    </li>
                    <li className="items-center text-center text-[30px] transition-all ease-linear duration-400 hover:text-amber-500 hover:scale-125">
                        <a href='#nosotrosRef' onClick={toggleNav} className="flex-1 font-bold hover:ease-in-out hover:rounded-b-2xl hover:border-solid hover:border-collapse  duration-300 hover:scale-110">
                            NOSOTROS
                        </a>
                    </li>
                    <li className="items-center text-center text-[30px] transition-all ease-linear duration-400 hover:text-amber-500 hover:scale-125">
                        <a href='#contactoRef' onClick={toggleNav} className="flex-1 font-bold hover:ease-in-out hover:rounded-b-2xl hover:border-solid hover:border-collapse  duration-300  hover:scale-110">
                            CONTACTO
                        </a>
                    </li>
                </ul>

            </div >
        </div >
    )
}
