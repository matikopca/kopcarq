'use client'
import React, { useRef, useEffect } from 'react';
import Carousel from './carousel';
import Image from 'next/image';

export default function Home() {

    const nosotrosRef = useRef(null);
    const trabajosRef = useRef(null);
    const contactoRef = useRef(null);


    return (
        <div className='block h-screen max-h-screen relative overflow-y-scroll snap-y snap-mandatory'>
            <section id="header" className="h-screen relative overflow-hidden snap-start">

                <div className="h-full relative top-0 z-0">
                    <Carousel />
                </div>

                {/* <div className="z-10 bg-black bg-opacity-60 absolute top-0 left-0 w-full h-full flex items-center justify-center md:w-1/3"
                    style={{ animation: 'fadeUpAnimation 2s ease-in-out' }}> */}
                <div className="z-10 bg-black bg-opacity-60 absolute top-0 left-0 w-full h-full flex items-center justify-center md:w-1/3 animate-fadeUpAnimation">
                    <section className="text-light text-white" id="header">
                        <div className="p-8 row items-center">
                            <h1 className="letter-spacing-xs mb-8 font-extrabold text-4xl lg:text-6xl">
                                KOPCArq.
                            </h1>
                            <h3 className='text-2xl font-medium flex'>
                                Transformamos espacios con dedicación y creatividad.
                            </h3>

                            <p className="mt-8 h5">
                                Nuestros servicios incluyen:
                            </p>

                            <ul className="list-disc pl-4">
                                <li>Remodelaciones integrales de hogares y comercios</li>
                                <li>Reparaciones estructurales y estéticas</li>
                                <li>Diseño arquitectónico personalizado</li>
                                <li>Asesoramiento en selección de materiales y colores</li>
                                {/* Add more specific services as needed */}
                            </ul>
                            <div className="mt-6 font-bold text-2xl md:flex-row lg:justify-left gap-x-3 gap-y-3">
                                <a className="btn btn-primary btn-lg" href="#">Conocenos ➔</a>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <section id="nosotros" className='flex h-screen relative overflow-hidden snap-start' ref={nosotrosRef}>
                <div className='z-0 absolute w-screen h-screen'>
                    <Image
                        src="/nosotrospic.jpg"
                        alt="nosotrospic"
                        className="w-full h-full object-cover"
                        layout='cover'
                        width={3000}
                        height={3000}
                    />
                </div>
                <div className="z-10 bg-red-950 bg-opacity-80 absolute top-0 right-0 w-full h-full flex items-center justify-center md:w-1/3">
                    {/* // style={{ animation: 'fadeUpAnimation 2s ease-in-out' }}> */}
                    <div className="text-light text-white" id="header">
                        <div className="p-8 row items-center">
                            <h1 className="letter-spacing-xs mb-8 font-extrabold text-4xl lg:text-6xl">
                                Nosotros
                            </h1>
                            <h3 className='text-2xl font-medium flex'>
                                Somos una empresa familiar con mucha experiencia en el rubro.
                            </h3>

                            <p className="mt-8 h5">
                                Con mas de 10 años en el mercado nos caracterizamos por brindar soluciones a medida y de calidad.
                                Queremos que nuestros clientes se sientan acompañados desde el dia 0.
                            </p>


                        </div>
                    </div>
                </div>
            </section>

            <section id="trabajos" className='flex h-screen relative overflow-hidden snap-start'>
                <div className='z-0 absolute w-screen h-screen'>
                    <Image
                        src="/nosotrospic.jpg"
                        alt="nosotrospic"
                        className="w-full h-full object-cover"
                        layout='cover'
                        width={3000}
                        height={3000}
                    />
                </div>
                <div className="z-10 bg-white bg-opacity-50 relative top-0 right-0 w-full h-full flex items-center justify-center md:w-1/3">
                    {/* // style={{ animation: 'fadeUpAnimation 2s ease-in-out' }}> */}
                    <div className="text-light text-red-900" id="header">
                        <div className="p-8 row items-center">
                            <h1 className="letter-spacing-xs mb-8 font-extrabold text-4xl lg:text-6xl">
                                Trabajos
                            </h1>
                            <h3 className='text-2xl font-medium flex'>
                                Encontra la solución que buscas.
                            </h3>

                            <ul className="list-disc pl-4">
                                <li>Remodelaciones integrales de hogares y comercios</li>
                                <li>Reparaciones estructurales y estéticas</li>
                                <li>Diseño arquitectónico personalizado</li>
                                <li>Asesoramiento en selección de materiales y colores</li>
                                {/* Add more specific services as needed */}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contacto" className='flex h-screen relative overflow-hidden snap-start'>
                <div className='z-0 absolute h-screen w-screen bg-zinc-600'>

                </div>
                <div className="z-10 bg-gradient-to-br from-red-600 to bg-red-950 bg-opacity-1 absolute top-0 right-0 w-full h-full flex items-center justify-center md:w-1/3">
                    {/* // style={{ animation: 'fadeUpAnimation 2s ease-in-out' }}> */}
                    <div className="text-light text-white" id="header">
                        <div className="p-8 row items-center">
                            <h1 className="letter-spacing-xs mb-8 font-extrabold text-4xl lg:text-6xl">
                                Contacto
                            </h1>
                            <h3 className='text-2xl font-medium flex'>
                                Dejanos tu mensaje, te respondemos a la brevedad.
                            </h3>

                            <ul className="list-disc pl-4">
                                <li>Remodelaciones integrales de hogares y comercios</li>
                                <li>Reparaciones estructurales y estéticas</li>
                                <li>Diseño arquitectónico personalizado</li>
                                <li>Asesoramiento en selección de materiales y colores</li>
                                {/* Add more specific services as needed */}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}
