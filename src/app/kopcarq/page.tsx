'use client'
import React, { useRef, useEffect } from 'react';
import Carousel from './carousel';
import Image from 'next/image';
import { InView } from 'react-intersection-observer';
import Coverflow from './sliderworks';

export default function Home() {

    const imagestst = [
        '/int1.png',
        '/int2.png',
        '/kopcarqlogo.png',
        '/int2.png',
    ];

    return (
        <div className='block h-screen max-h-screen relative overflow-y-scroll snap-y snap-mandatory'>

            <InView>
                {({ inView, ref }) => (
                    <div ref={ref} className='h-full mb-0.5'>
                        <section id="headerRef" className="h-full relative overflow-hidden snap-start">
                            <div className="h-full relative top-0 z-0">
                                <Carousel />
                            </div>

                            <div className={`z-10 bg-gradient-to-br from-red-950 to bg-red-700 bg-opacity-90 absolute top-0 left-0 w-full h-full flex items-center justify-center md:w-1/3
                             ${inView ? 'animate-fadeUpAnimation 3s ease-in-out visible' : 'hidden'}`}>
                                <div className="text-light text-white text-2xl p-2 " id="header">

                                    <div className="letter-spacing-xs font-extrabold text-5xl md:text-3xl lg:6xl">
                                        Transformamos espacios
                                    </div>
                                    <div className='letter-spacing-xs mb-8 font-extralight text-5xl md:text-3xl'>
                                        con dedicación y creatividad.</div>

                                    <div className="mt-6 font-bold pt-8 md:flex-row lg:justify-left gap-x-3 gap-y-3">
                                        <a className="btn btn-primary btn-lg text-white" href="#nosotrosRef">Conoce mas sobre nosotros! ➔</a>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>
                )
                }
            </InView >

            <InView>
                {({ inView, ref }) => (
                    <div ref={ref} className='h-full mb-0.5'>
                        <section id="trabajosRef" className='flex relative h-full bg-white overflow-hidden snap-end justify-center items-baseline'>
                            <div className={` bg-white bg-opacity-1 absolute top-0 right-0 w-full h-full flex items-center justify-center md:w-1/3
                                         ${inView ? 'animate-fadeToRightAnimation 3s ease-in-out visible' : 'hidden'}`}>
                                <div className="text-light text-red-700 top-20 absolute p-8 row items-center" id="header">
                                    {/* <div className="p-8 row items-center"> */}
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
                                    {/* </div> */}
                                </div>
                            </div>

                            <Coverflow imagestst={imagestst} />

                        </section >
                    </div>
                )}
            </InView>


            <InView>
                {({ inView, ref }) => (
                    <div ref={ref} className='h-full mb-0.5'>
                        <section id="nosotrosRef" className='flex h-full relative bg-nosotrosimg bg-cover overflow-hidden snap-end'>
                            <div className={`bg-black bg-opacity-90 p-8 absolute md:relative top-0 right-0 w-full h-full flex items-center justify-center md:w-1/3
                                        ${inView ? 'animate-fadeRightAnimation 3s ease-in-out visible' : 'hidden'}`}>
                                <div className="text-light text-white top-20 absolute p-8 row items-center" id="header">
                                    <h1 className="letter-spacing-xs mb-8 font-extrabold text-4xl lg:text-6xl">
                                        Nosotros
                                    </h1>
                                    <h3 className='text-2xl font-medium flex'>
                                        Somos una empresa familiar con gran trayectoria en el rubro.
                                    </h3>
                                    <p className="mt-8 h5">
                                        Con mas de 10 años en el mercado nos caracterizamos por brindar soluciones a medida y de calidad.
                                        Queremos que nuestros clientes se sientan acompañados desde el dia 0.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                )
                }
            </InView >

            <InView>
                {({ inView, ref }) => (
                    <div ref={ref} className='h-full mb-0.5'>
                        <section id="contactoRef" className='flex relative h-full overflow-hidden snap-end'>
                            <div className='z-0 absolute h-screen w-screen bg-white '>
                            </div>
                            <div className={`z-10 bg-gradient-to-br from-red-600 to bg-red-950 bg-opacity-1 absolute top-0 right-0 w-full h-full flex items-center justify-center md:w-1/3
                             ${inView ? 'animate-fadeBottomAnimation 2s ease-in-out visible' : 'hidden'}`}>
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
                )}
            </InView>

        </div >
    );
}
