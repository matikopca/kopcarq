'use client'
import React, { useEffect, useRef, useState } from "react";
import { Turn as Hamburger } from 'hamburger-react'

export default function Navbar() {
    const [isOpen, setOpen] = useState(false)
    const toggleNav = () => { setOpen(false) }

    const [currentSection, setCurrentSection] = useState('');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCurrentSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.7 }
        );
        document.querySelectorAll('section').forEach((section) => {
            observer.observe(section);
        });

        const scrollContainer = document.querySelector('.snap-y');
        const handleScroll = () => {
            if (scrollContainer) {
                setScrolled(scrollContainer.scrollTop > 50);
            }
        };
        scrollContainer?.addEventListener('scroll', handleScroll);

        return () => {
            observer.disconnect();
            scrollContainer?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isLight = currentSection === 'trabajosRef' || currentSection === 'contactoRef';

    return (
        <nav className={`z-50 fixed top-0 left-0 right-0 flex items-center justify-between px-4 md:px-8 transition-all duration-500 ease-in-out
            ${isOpen ? 'h-screen bg-white flex-col' : 'h-16'}
            ${!isOpen && scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : !isOpen ? 'bg-transparent' : ''}
        `}>
            {/* Top bar */}
            <div className={`flex items-center justify-between w-full ${isOpen ? 'h-16 flex-shrink-0' : 'h-full'}`}>
                {/* Logo */}
                <a href='#headerRef' onClick={toggleNav} className="relative h-10 w-40 flex items-center">
                    <div className={`h-full w-full bg-contain bg-no-repeat bg-left transition-all duration-300
                        ${isLight || scrolled || isOpen ? 'bg-kopcarqnegro' : 'bg-kopcarqrosroj'}
                    `} />
                </a>

                {/* Desktop nav links */}
                <div className="hidden md:flex items-center gap-8">
                    <a href='#trabajosRef'
                        className={`text-sm font-semibold tracking-wide transition-colors duration-300 hover:text-red-500
                        ${isLight || scrolled ? 'text-zinc-800' : 'text-white'}
                        ${currentSection === 'trabajosRef' ? 'text-red-500' : ''}
                    `}>
                        TRABAJOS
                    </a>
                    <a href='#nosotrosRef'
                        className={`text-sm font-semibold tracking-wide transition-colors duration-300 hover:text-red-500
                        ${isLight || scrolled ? 'text-zinc-800' : 'text-white'}
                        ${currentSection === 'nosotrosRef' ? 'text-red-500' : ''}
                    `}>
                        NOSOTROS
                    </a>
                    <a href='#contactoRef'
                        className="text-sm font-semibold tracking-wide bg-red-500 text-white px-5 py-2 rounded-full transition-all duration-300 hover:bg-red-600 hover:shadow-lg">
                        CONTACTO
                    </a>
                </div>

                {/* Mobile hamburger */}
                <div className="md:hidden z-50">
                    <Hamburger
                        toggled={isOpen}
                        toggle={setOpen}
                        direction="left"
                        size={24}
                        color={isOpen ? '#ef4444' : (isLight || scrolled ? '#18181b' : '#ffffff')}
                    />
                </div>
            </div>

            {/* Mobile menu overlay */}
            {isOpen && (
                <div className="flex flex-col items-center justify-center flex-1 gap-10 w-full md:hidden">
                    <a href='#headerRef' onClick={toggleNav}
                        className="text-3xl font-light text-zinc-800 tracking-widest transition-colors duration-300 hover:text-red-500">
                        INICIO
                    </a>
                    <a href='#trabajosRef' onClick={toggleNav}
                        className="text-3xl font-light text-zinc-800 tracking-widest transition-colors duration-300 hover:text-red-500">
                        TRABAJOS
                    </a>
                    <a href='#nosotrosRef' onClick={toggleNav}
                        className="text-3xl font-light text-zinc-800 tracking-widest transition-colors duration-300 hover:text-red-500">
                        NOSOTROS
                    </a>
                    <a href='#contactoRef' onClick={toggleNav}
                        className="text-xl font-semibold tracking-widest bg-red-500 text-white px-8 py-3 rounded-full transition-all duration-300 hover:bg-red-600">
                        CONTACTO
                    </a>

                    <div className="absolute bottom-10 flex flex-col items-center gap-2 text-zinc-400 text-sm">
                        <span>kopcarq.com</span>
                        <div className="w-8 h-0.5 bg-red-500 rounded-full" />
                    </div>
                </div>
            )}
        </nav>
    )
}
