'use client'
import React, { useRef, useEffect, useState } from 'react';
import Carousel from './carousel';
import Image from 'next/image';
import { InView } from 'react-intersection-observer';
import Coverflow from './sliderworks';
import Link from 'next/link';

export default function Home() {

    const imagestst = [
        '/int1.png',
        '/int2.png',
        '/kopcarqlogo.png',
        '/int2.png',
    ];


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
                        <section id="contactoRef" className='flex flex-col relative h-full bg-gradient-to-br from-red-600 to bg-red-950 bg-opacity-1 overflow-hidden snap-end'>
                            <div className={`z-10 flex-1 relative md:absolute top-0 right-0 w-full items-center justify-center md:w-1/3
                             ${inView ? 'animate-fadeBottomAnimation 2s ease-in-out visible' : 'hidden'}`}>
                                <div className="absolute top-6 md:relative md:top-0 text-light text-white" id="header">
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

                            <div className='z-20 md:z-0 flex-[3-0-0] px-4 justify-center align-bottom relative items-end h-screen w-screen md:w-2/3 bg-transparent md:bg-white '>
                                <form className='flex flex-col items-center text-white md:text-red-950 text-2xl  rounded-md w-full h-full'>
                                    <div className='flex flex-1 flex-col w-full h-auto align-middle'>
                                        {/* <div className='flex flex-col w-full h-full flex-1'> */}
                                        <div className='flex flex-col md:flex-row'>
                                            <label className='flex-1 h-10' htmlFor="nombre">Nombre:</label>
                                            <input className='flex-[3-0-0] border-red-950 border-2 text-black rounded-md h-10' type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
                                        </div>
                                        <div className='flex flex-col md:flex-row'>
                                            <label className='flex-1 h-10' htmlFor="email">Email:</label>
                                            <input className='flex-[3-0-0] border-red-950 border-2 text-black rounded-md h-10' type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                        </div>
                                        <div className='flex flex-col md:flex-row'>
                                            <label className='flex-1 h-10' htmlFor="necesito">Necesito:</label>
                                            <select className='flex-[3-0-0] border-red-950 border-2 text-black rounded-md h-10' id="necesito" name="necesito" onChange={handleChange}>
                                                <option value="">Choose an option</option>
                                                <option value="Planos">Planos</option>
                                                <option value="Obra">Obra</option>
                                            </select>
                                        </div>
                                        <div className='flex flex-col md:flex-row'>
                                            {formData.necesito === "Obra" && (
                                                <label className='flex-1 h-10' htmlFor="necesito2">Tipo:</label>
                                            )
                                            }
                                            {formData.necesito === "Obra" && (
                                                <select id="necesito2" name="necesito2" onChange={handleChange}
                                                    className='flex-[3-0-0] border-red-950 border-2 text-black rounded-md h-10'>
                                                    <option value="">Choose an option</option>
                                                    <option value="Construcción">Construcción</option>
                                                    <option value="Remodelación">Remodelación</option>
                                                    <option value="Reparación">Reparación</option>
                                                </select>
                                            )
                                            }
                                        </div>
                                    </div>
                                    <div className='flex flex-[2-0-0] flex-col h-auto w-full '>
                                        <label className='relative left-0 h-10' htmlFor="descripcion">Contanos mas!:</label>
                                        <div className='flex justify-center w-full h-[70%]'>
                                            <textarea className='align-text-top border-red-950 border-2 text-black h-auto resize-y overflow-y-auto w-full rounded-md'
                                                id="descripcion" name="descripcion" value={formData.descripcion} onChange={handleChange} />
                                        </div>
                                        <div className='hidden justify-center w-full h-auto'>
                                            <textarea className='align-text-top border-red-950 border-2 h-auto resize-y overflow-y-auto w-full rounded-md'
                                                id="descripcion" name="message" value={formData.message} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className='relative justify-end items-baseline'>
                                        {/* <input className='border-red-950 border-2 rounded-md' type="submit" value="Enviar" onClick={handleSubmit} /> */}
                                        <a className='border-red-950 border-2 rounded-md'
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
