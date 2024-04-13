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
                                        con dedicación y creatividad.
                                    </div>
                                    <div className="mt-6 font-bold md:flex-row lg:justify-left gap-x-3 gap-y-3">
                                        <a className="btn btn-primary btn-lg text-red-500" href="#nosotrosRef">Conoce mas sobre nosotros!  </a>
                                        <span className='bg-red-500 px-2 text-center align-middle content-center'>➔</span>
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
                        <section id="trabajosRef" className='h-full relative overflow-hidden snap-start'>
                            <div className={`z-10 bg-white absolute top-0 left-0 w-full h-full flex items-center justify-start`}>
                                <div className="text-light absolute top-[10%] ml-2 text-black text-2xl p-2 ">
                                    <div className="letter-spacing-xs font-bold text-4xl md:text-6xl lg:6xl">
                                        Trabajos
                                    </div>
                                    <div className='letter-spacing-xs mb-8 font-light text-4xl md:text-6xl'>
                                        Encontra la solución que buscas.
                                    </div>
                                </div>

                                <div className={`flex relative flex-col h-full w-full md:flex-row  ${inView ? 'animate-fadeToRightAnimation 4s ease-in-out visible' : 'hidden'}`}>
                                    <Coverflow />
                                    <ul className="flex flex-col relative justify-center mt-4 ml-6 w-full md:w-2/4 lg:w-2/3 list-disc text-black">
                                        <li>Remodelaciones integrales de hogares y comercios</li>
                                        <li>Reparaciones estructurales y estéticas</li>
                                        <li>Diseño arquitectónico personalizado</li>
                                        <li>Asesoramiento en selección de materiales y colores</li>
                                    </ul>
                                </div>
                            </div>
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
                        <section id="contactoRef" className='flex flex-col relative h-full bg-red-500 bg-opacity-1 overflow-hidden overflow-y-scroll snap-end'>
                            <div className={`z-10 flex-1 relative md:absolute top-0 right-0 w-full items-center justify-center md:w-[15%] md:h-full
                             ${inView ? 'animate-fadeBottomAnimation 4s ease-in-out visible' : 'hidden'}`}>

                                <div className="hidden md:flex absolute bottom-10 md:ml-4 md:relative text-light text-white h-full" id="header">
                                    <div className='bg-kopcarqnegro bg-contain bg-no-repeat absolute bottom-0 right-0 h-[110px] w-[600px] -rotate-90 translate-x-full origin-bottom-left' />
                                </div>
                            </div>
                            {/* <div className='z-20 md:z-0 flex flex-col md:mt-0 relative box-border px-4 md:content-around h-screen w-screen md:items-center md:w-[85%] bg-white'> */}
                            <div className='z-20 md:z-0 flex flex-col justify-end md:mt-0 relative box-border md:content-around h-auto md:h-screen w-screen md:items-center md:w-[85%] bg-white'>
                                <h1 className="self-start px-6 pt-16 md:pt-8 letter-spacing-xs box-border font-extrabold text-4xl lg:text-6xl text-zinc-900">
                                    Contacto
                                </h1>
                                <h3 className='self-start px-6 text-2xl md:text-3xl text-zinc-800 font-medium flex'>
                                    Dejanos tu mensaje, te respondemos a la brevedad.
                                </h3>
                                <form className='flex flex-col box-border pt-3 px-6 md:pt-4 items-center justify-center text-red-500 text-2xl  rounded-md w-full h-auto'>
                                    <div className='flex flex-1 flex-col w-full h-auto align-middle'>
                                        <div className='flex flex-col py-2 md:flex-row'>
                                            <label className='flex-1 max-w-[120px] h-10 text-xl font-medium content-center' htmlFor="nombre">NOMBRE:</label>
                                            <input className='flex-[4-0-0] border-red-500 border-b-4 text-xl text-black rounded-md h-10 outline-none md:max-w-[600px] md:ml-2'
                                                type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} placeholder='Ingresa tu nombre' required />
                                        </div>
                                        <div className='flex flex-col py-2 md:flex-row'>
                                            <label className='flex-1 max-w-[120px] h-10 text-xl font-medium content-center' htmlFor="email">EMAIL:</label>
                                            <input className='flex-[4-0-0] border-red-500  border-b-4 text-xl text-black rounded-md h-10 outline-none md:max-w-[600px] md:ml-2 '
                                                type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder='Ingresa tu correo' required />
                                        </div>
                                        <div className='flex flex-col py-2 md:flex-row'>
                                            <label className='flex-1 max-w-[120px] h-10 text-xl font-medium content-center' htmlFor="necesito">NECESITO:</label>
                                            <select id="necesito" name="necesito" onChange={handleChange}
                                                className={`flex-[4-0-0] border-red-500 border-b-4 text-xl text-black rounded-md h-10 outline-none md:max-w-[600px] md:ml-2 
                                            ${formData.necesito === "" ? 'text-gray-400' : 'text-black'}`}>
                                                <option value="" disabled selected hidden>Seleccione</option>
                                                <option value="Planos" className='text-black'>Planos</option>
                                                <option value="Obra" className='text-black'>Obra</option>
                                            </select>
                                        </div>

                                        {formData.necesito === "Obra" && (
                                            <div className='flex flex-col box-border py-2 md:flex-row'>

                                                <label className='flex-1 max-w-[120px] h-10 text-xl font-medium content-center' htmlFor="necesito2">TIPO:</label>
                                                <select id="necesito2" name="necesito2" onChange={handleChange}
                                                    className={`flex-[4-0-0] border-red-500 border-b-4 text-xl text-black rounded-md h-10 outline-none md:max-w-[600px] md:ml-2 
                                                ${formData.necesito2 === "" ? 'text-gray-400' : 'text-black'}`}>
                                                    <option value="" disabled selected hidden>Seleccione</option>
                                                    <option value="Construcción" className='text-black'>Construcción</option>
                                                    <option value="Remodelación" className='text-black'>Remodelación</option>
                                                    <option value="Reparación" className='text-black'>Reparación</option>
                                                </select>
                                            </div>
                                        )
                                        }

                                    </div>
                                    <div className='flex flex-[2-0-0] box-border py-4 flex-col h-auto w-full '>
                                        <label className='relative left-0 h-10 font-medium' htmlFor="descripcion">Contanos mas!:</label>
                                        <div className='flex justify-center w-full h-[70%]'>
                                            <textarea
                                                className='align-text-top border-red-500 border-2 text-xl text-black h-auto resize-none min-h-40 outline-none overflow-y-auto w-full rounded-md'
                                                id="descripcion" name="descripcion" value={formData.descripcion} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className='relative pt-2 pb-4'>
                                        <a className=' text-white border-2 border-white rounded-md font-medium box-border   bg-red-500 px-7 py-1 align-middle'
                                            href={`https://wa.me/+5493416289174/?text=${encodeURIComponent(formData.message)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >Enviar</a>
                                    </div>
                                </form>

                                <div className='flex flex-col relative h-auto w-full py-6 md:py-2 box-border md:flex-row bg-zinc-900 justify-around items-center shadow-[0px -5px 20px 4px]  shadow-black  text-white'>
                                    <h3 className='text-lg font-medium flex h-full items-center'>
                                        <svg viewBox="0 0 24 24" fill="rgb(239 68 68)" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                                                    className='fill-red-500' >
                                                </path>
                                                <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                                                    className='fill-red-500 stroke-red-500'>
                                                </path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                                                    className='fill-red-500'>
                                                </path>
                                            </g>
                                        </svg>
                                        instagram.com/kopcarq
                                    </h3>
                                    <h3 className='text-lg font-medium flex h-full items-center'>
                                        <svg version="1.1" id="Layer_1" viewBox="0 0 308 308" className="mr-1 h-[30px] w-[30px] fill-red-500" >
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g> <g id="SVGRepo_iconCarrier"> <g id="XMLID_468_">
                                                <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"></path>
                                                <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"></path>
                                            </g></g>
                                        </svg>
                                        +54 341 6 289174
                                    </h3>
                                    <h3 className='text-lg font-medium flex h-full items-center'>
                                        <svg viewBox="0 0 24 24" fill="transparent" height="35px" width="35px" xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                                                <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="rgb(239 68 68)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="rgb(239 68 68)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </g>
                                        </svg>
                                        Rosario, Santa Fe. Argentina
                                    </h3>
                                </div>
                            </div>

                        </section>
                    </div>
                )
                }
            </InView >

        </div >
    );
}
