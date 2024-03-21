'use client'
import React, { useRef, useEffect, useState } from 'react';
import Carousel from './carousel';
import Image from 'next/image';
import { InView } from 'react-intersection-observer';
import Coverflow from './sliderworks';
import Link from 'next/link';
import Navbar2 from './kopcarq/page';

export default function Home() {

    const [selection, setSelection] = useState('');
    const [showSecondSelect, setShowSecondSelect] = useState(false);

    const handleFirstSelectChange = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        console.log("Selection:", value);
        setSelection(value);
        setShowSecondSelect(value === 'Obra');
    };


    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        necesito: '',
        necesito2: '', // Puedes establecer valores predeterminados según sea necesario
        descripcion: '',
        message: '',
    });

    useEffect(() => {
        // Cuando formData.nombre cambie, actualiza la descripción
        setFormData((prevFormData) => ({
            ...prevFormData,
            message: `${prevFormData.necesito ? `Hola Kopcarq! Necesito informacion sobre su servicio de` : ""} ${prevFormData.necesito} ${prevFormData.necesito === 'Obra' ? `para una ${prevFormData.necesito2}.` : ''} 
Mas datos: 
${prevFormData.descripcion}

Muchas gracias,
${prevFormData.nombre}
${prevFormData.email}`,
        }));
    }, [formData.necesito, formData.necesito2, formData.descripcion]);

    // Función para manejar cambios en el formulario
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Aquí puedes enviar los datos del formulario a donde sea necesario
        console.log(formData);
    };


    return (
        <div className='block h-screen max-h-screen relative overflow-y-scroll snap-y snap-mandatory'>

            {/* <Navbar2 /> */}

            <InView>
                {({ inView, ref }) => (
                    <div ref={ref} className='h-full'>
                        <section id="headerRef" className="h-full relative overflow-hidden snap-start">
                            <div className="h-full relative top-0 z-0">
                                <Carousel />
                            </div>

                            <div className={`z-10 bg-black bg-opacity-70 absolute top-0 left-0 w-full h-full flex items-center justify-start
                             ${inView ? 'animate-fadeUpAnimation 4s ease-in-out visible' : 'hidden'}`}>
                                <div className="text-light ml-2 text-white text-2xl p-2 " id="header">

                                    <div className="letter-spacing-xs font-bold text-4xl md:text-6xl lg:6xl">
                                        Transformamos espacios
                                    </div>
                                    <div className='letter-spacing-xs mb-8 font-light text-4xl md:text-6xl'>
                                        con dedicación y creatividad.</div>

                                    <div className="mt-6 font-bold pt-8 md:flex-row lg:justify-left gap-x-3 gap-y-3">
                                        <a className="btn btn-primary btn-lg text-red-500" href="#nosotrosRef">Conoce mas sobre nosotros! ➔</a>
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
                    <div ref={ref} className='h-full'>
                        <section id="trabajosRef" className='flex relative h-full bg-white overflow-hidden snap-end justify-center items-baseline'>
                            <div className={` bg-white bg-opacity-1 relative top-0 right-0 w-full h-full flex items-center justify-center
                                         ${inView ? 'animate-fadeToRightAnimation 4s ease-in-out visible' : 'hidden'}`}>
                                <div className="text-light text-red-500 absolute top-20 md:left-10 p-8 row items-center" id="header">
                                    {/* <div className="p-8 row items-center"> */}
                                    <h1 className="letter-spacing-xs font-bold text-4xl md:text-6xl lg:6xl">
                                        Trabajos
                                    </h1>
                                    <h3 className='letter-spacing-xs mb-8 font-light text-4xl md:text-4xl'>
                                        Encontra la solución que buscas.
                                    </h3>
                                </div>
                                <div className='flex flex-col h-full w-full md:flex-row'>
                                    <Coverflow />

                                    <ul className="flex flex-col flex-1 absolute bottom-24 md:top-0 md:relative justify-center w-full list-disc text-red-500 pl-4">
                                        <li>Remodelaciones integrales de hogares y comercios</li>
                                        <li>Reparaciones estructurales y estéticas</li>
                                        <li>Diseño arquitectónico personalizado</li>
                                        <li>Asesoramiento en selección de materiales y colores</li>
                                        {/* Add more specific services as needed */}
                                    </ul>
                                    {/* </div> */}
                                </div>


                            </div>

                            {/* <Coverflow imagestst={imagestst} /> */}
                            {/* <Coverflow /> */}

                        </section >
                    </div>
                )}
            </InView>


            <InView>
                {({ inView, ref }) => (
                    <div ref={ref} className='h-full'>
                        <section id="nosotrosRef" className='flex h-full relative bg-nosotrosimg bg-cover overflow-hidden snap-end'>
                            <div className={`bg-black bg-opacity-90 p-8 absolute md:relative top-0 right-0 w-full h-full flex items-center justify-center md:w-1/3
                                        ${inView ? 'animate-fadeRightAnimation 4s ease-in-out visible' : 'hidden'}`}>
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
                    <div ref={ref} className='h-full'>
                        <section id="contactoRef" className='flex flex-col relative h-full bg-red-500 bg-opacity-1 overflow-hidden snap-end'>
                            <div className={`z-10 flex-1 relative md:absolute top-0 right-0 w-full items-center justify-center md:w-1/3
                             ${inView ? 'animate-fadeBottomAnimation 4s ease-in-out visible' : 'hidden'}`}>
                                <div className="absolute top-20 md:relative text-light text-white" id="header">
                                    <div className="p-4 row items-center justify-center">
                                        <h1 className="letter-spacing-xs mb-8 font-extrabold text-4xl lg:text-6xl">
                                            Contacto
                                        </h1>
                                        <h3 className='text-2xl font-medium flex'>
                                            Dejanos tu mensaje, te respondemos a la brevedad.
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className='z-20 md:z-0 flex flex-[3-0-0] px-4 justify-center align-bottom relative items-end h-screen w-screen md:w-2/3 bg-transparent md:bg-white'>
                                <form className='flex flex-col items-center justify-center text-white md:text-red-500 text-2xl  rounded-md w-full h-auto'>
                                    <div className='flex flex-1 flex-col w-full h-auto align-middle'>
                                        {/* <div className='flex flex-col w-full h-full flex-1'> */}
                                        <div className='flex flex-col my-2 md:my-4 md:flex-row'>
                                            <label className='flex-1 h-10 font-bold' htmlFor="nombre">Nombre:</label>
                                            <input className='flex-[3-0-0] border-red-500 border-2 text-black rounded-md h-10' type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
                                        </div>
                                        <div className='flex flex-col my-2 md:my-4 md:flex-row'>
                                            <label className='flex-1 h-10 font-bold' htmlFor="email">Email:</label>
                                            <input className='flex-[3-0-0] border-red-500 border-2 text-black rounded-md h-10' type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                        </div>
                                        <div className='flex flex-col my-2 md:my-4 md:flex-row'>
                                            <label className='flex-1 h-10 font-bold' htmlFor="necesito">Necesito:</label>
                                            <select className='flex-[3-0-0] border-red-500 border-2 text-black rounded-md h-10' id="necesito" name="necesito" onChange={handleChange}>
                                                <option value="">Choose an option</option>
                                                <option value="Planos">Planos</option>
                                                <option value="Obra">Obra</option>
                                            </select>
                                        </div>
                                        <div className='flex flex-col my-2 md:my-4 md:flex-row'>
                                            {formData.necesito === "Obra" && (
                                                <label className='flex-1 h-10 font-bold' htmlFor="necesito2">Tipo:</label>
                                            )
                                            }
                                            {formData.necesito === "Obra" && (
                                                <select id="necesito2" name="necesito2" onChange={handleChange}
                                                    className='flex-[3-0-0] border-red-500 border-2 text-black rounded-md h-10'>
                                                    <option value="">Seleccione</option>
                                                    <option value="Construcción">Construcción</option>
                                                    <option value="Remodelación">Remodelación</option>
                                                    <option value="Reparación">Reparación</option>
                                                </select>
                                            )
                                            }
                                        </div>
                                    </div>
                                    <div className='flex flex-[2-0-0] my-2 md:my-4 flex-col h-auto w-full '>
                                        <label className='relative left-0 h-10 font-bold' htmlFor="descripcion">Contanos mas!:</label>
                                        <div className='flex justify-center w-full h-[70%]'>
                                            <textarea
                                                className='align-text-top border-red-500 border-2 text-black h-auto resize-none min-h-40 overflow-y-auto w-full rounded-md'
                                                id="descripcion" name="descripcion" value={formData.descripcion} onChange={handleChange} />
                                        </div>
                                        <div className='hidden justify-center w-full h-auto'>
                                            <textarea className='align-text-top border-red-500 border-2 h-auto resize-y overflow-y-auto w-full rounded-md'
                                                id="descripcion" name="message" value={formData.message} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className='relative justify-end items-baseline mt-8 bg-white'>
                                        {/* <input className='border-red-950 border-2 rounded-md' type="submit" value="Enviar" onClick={handleSubmit} /> */}
                                        <a className='border-red-500 text-red-500 border-2 rounded-md font-bold px-6 py-3'
                                            href={`https://wa.me/+5493416289174/?text=${encodeURIComponent(formData.message)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >Enviar</a>
                                    </div>
                                </form>
                            </div>

                        </section>
                    </div>
                )
                }
            </InView >

        </div >
    );
}
