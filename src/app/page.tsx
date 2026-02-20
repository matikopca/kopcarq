'use client'
import React, { useRef, useEffect, useState } from 'react';
import Carousel from './carousel';
import Image from 'next/image';
import { InView } from 'react-intersection-observer';
import Coverflow from './sliderworks';
import Link from 'next/link';

export default function Home() {

    const [selection, setSelection] = useState('');
    const [showSecondSelect, setShowSecondSelect] = useState(false);
    const TRABAJOS_KEYS = ['diseno', 'visualizacion', 'soluciones', 'remodelaciones'] as const;
    const [expandedTrabajos, setExpandedTrabajos] = useState<Record<string, boolean>>({
        diseno: false,
        visualizacion: false,
        soluciones: false,
        remodelaciones: false,
    });
    const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);

    const handleTrabajosExpand = (key: string) => {
        const index = TRABAJOS_KEYS.indexOf(key as typeof TRABAJOS_KEYS[number]);
        const isCurrentlyExpanded = expandedTrabajos[key];
        setExpandedTrabajos({ diseno: false, visualizacion: false, soluciones: false, remodelaciones: false, [key]: !isCurrentlyExpanded });
        if (!isCurrentlyExpanded) setActiveCarouselIndex(index);
    };

    const handleCarouselIndexChange = (index: number) => {
        setActiveCarouselIndex(index);
        const key = TRABAJOS_KEYS[index];
        setExpandedTrabajos({ diseno: false, visualizacion: false, soluciones: false, remodelaciones: false, [key]: true });
    };

    const handleFirstSelectChange = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        setSelection(value);
        setShowSecondSelect(value === 'Obra');
    };

    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        necesito: '',
        necesito2: '',
        descripcion: '',
        message: '',
    });

    useEffect(() => {
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

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEnviarClick = () => {
        if (!formData.nombre) {
            alert('Por favor, complete su nombre.');
            return
        }
        if (!formData.email) {
            alert('Por favor, complete su email.');
            return
        }
        else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('Por favor, ingrese un correo electronico valido.')
                return;
            }
        }
        if (!formData.necesito) {
            alert('Por favor, indique que tipo de servicio necesita.');
            return
        }
        if (formData.necesito === "Obra" && !formData.necesito2) {
            alert('Por favor, especifique el tipo de obra.');
            return
        }
        if (!formData.descripcion) {
            alert('Por favor, completa la descripcion para que podamos asesorarte mejor.');
            return
        }

        const message = `Hola, mi nombre es ${formData.nombre}. Necesito ${formData.necesito}.`;
        const whatsappLink = `https://wa.me/+5493416289174/?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    };

    return (
        <div className='block h-screen max-h-screen relative overflow-y-scroll snap-y snap-mandatory'>

            {/* HERO */}
            <InView>
                {({ inView, ref }) => (
                    <div ref={ref} className='h-full'>
                        <section id="headerRef" className="h-full relative overflow-hidden snap-start">
                            <div className="h-full relative top-0 z-0">
                                <Carousel />
                            </div>
                            <div className={`z-10 bg-black/50 absolute top-0 left-0 w-full h-full flex items-center justify-center md:items-center md:justify-start
                             ${inView ? 'animate-fadeUpAnimation 4s ease-in-out visible' : 'hidden'}`}>
                                <div className="ml-6 md:ml-16 text-white max-w-2xl">
                                    <h1 className="text-balance font-bold text-4xl md:text-6xl leading-tight">
                                        Transformamos espacios
                                    </h1>
                                    <p className='text-pretty font-light text-2xl md:text-4xl mt-2 text-white/80'>
                                        con dedicacion y creatividad.
                                    </p>
                                    <div className="mt-8">
                                        <a className="inline-flex items-center gap-2 bg-red-500 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/25"
                                            href="#nosotrosRef">
                                            Conoce mas sobre nosotros
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )}
            </InView>

            {/* TRABAJOS */}
            <InView>
                {({ inView, ref }) => (
                    <div ref={ref} className='h-full'>
                        <section id="trabajosRef" className='h-full relative overflow-hidden snap-start'>
                            <div className="z-10 bg-white absolute top-0 left-0 w-full h-full flex flex-col overflow-hidden">
                                <div className="flex-shrink-0 pt-20 md:pt-24 pb-2 px-6 md:px-16 text-zinc-900">
                                    <h2 className="font-bold text-3xl md:text-5xl text-balance">
                                        Trabajos
                                    </h2>
                                    <p className='font-light text-lg md:text-xl mt-1 text-zinc-500'>
                                        Encontra la solucion que buscas.
                                    </p>
                                </div>

                                <div className={`flex-1 min-h-0 flex flex-col md:flex-row gap-2 md:gap-4 px-6 md:px-16 ${inView ? 'animate-fadeToRightAnimation 4s ease-in-out visible' : 'hidden'}`}>
                                    <div className="flex-shrink-0 flex justify-center items-center w-full md:w-2/5 lg:w-1/2 min-h-[200px] md:min-h-[240px]">
                                        <Coverflow activeIndex={activeCarouselIndex} onIndexChange={handleCarouselIndexChange} />
                                    </div>
                                    <div className="flex-1 overflow-y-auto py-2 w-full md:w-2/4 lg:w-2/3 min-h-0">
                                        <div className="flex flex-col gap-2 text-zinc-700">
                                            {[
                                                { key: 'diseno', title: 'Diseño y documentación', items: ['Anteproyecto y proyecto ejecutivo', 'Dirección de obra', 'Cómputo y presupuesto', 'Planos municipales y gestión de permisos', 'Regularización de planos', 'Modelado BIM', 'Planos para PH / subdivisiones'] },
                                                { key: 'visualizacion', title: 'Visualización y marketing inmobiliario', items: ['Renders hiperrealistas', 'Recorridos virtuales 360°', 'Animaciones 3D', 'Home staging virtual', 'Diseño para inmobiliarias / desarrolladores'] },
                                                { key: 'soluciones', title: 'Soluciones técnicas', items: ['Diagnóstico estructural', 'Patologías edilicias (grietas, humedad, filtraciones)', 'Informes técnicos para reclamos', 'Asesoramiento pre-compra de propiedades'] },
                                                { key: 'remodelaciones', title: 'Remodelaciones y mejoras', items: ['Reformas integrales', 'Ampliaciones', 'Diseño de interiores', 'Diseño de iluminación', 'Diseño de cocinas y baños', 'Paisajismo y diseño de exteriores', 'Quinchos y piletas'] },
                                            ].map(({ key, title, items }) => (
                                                <div key={key} className="border-b border-zinc-200 last:border-0 pb-2">
                                                    <button
                                                        type="button"
                                                        onClick={() => handleTrabajosExpand(key)}
                                                        className="flex items-center gap-2 w-full text-left hover:opacity-90"
                                                    >
                                                        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-red-500 text-white text-sm font-bold rounded">
                                                            {expandedTrabajos[key] ? '−' : '+'}
                                                        </span>
                                                        <h4 className="font-bold text-red-600 text-base">{title}</h4>
                                                    </button>
                                                    {expandedTrabajos[key] && (
                                                        <ul className="mt-2 ml-8 space-y-1 list-disc list-inside marker:text-red-500/70 text-base md:text-lg">
                                                            {items.map((item) => (
                                                                <li key={item}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )}
            </InView>

            {/* NOSOTROS */}
            <InView>
                {({ inView, ref }) => (
                    <div ref={ref} className='h-full'>
                        <section id="nosotrosRef" className='flex h-full relative bg-nosotrosimg bg-cover overflow-hidden snap-end'>
                            <div className={`bg-white/95 backdrop-blur-sm p-10 md:p-16 absolute md:relative top-0 right-0 w-full h-full flex items-center justify-center md:w-2/5
                                ${inView ? 'animate-fadeRightAnimation 4s ease-in-out visible' : 'hidden'}`}>
                                <div className="max-w-md">
                                    <div className="w-12 h-1 bg-black rounded-full mb-6" />
                                    <h2 className="font-bold text-4xl lg:text-5xl text-red-500 text-balance">
                                        Calidad
                                    </h2>
                                    <p className="mt-3 text-zinc-600 leading-relaxed text-base md:text-lg">
                                        Buscamos la máxima calidad y la resolución óptima de cada problema.
                                    </p>
                                    <p className="mt-6 text-zinc-500 leading-relaxed text-base md:text-lg italic">
                                        Cada proyecto tiene un alma. Detrás de cada plano hay un arquitecto que piensa el espacio, lo habita en su mente antes de que exista, y trabaja hasta que cada detalle respire esa misma pasión. No diseñamos solo metros cuadrados: diseñamos hogares donde vivir, lugares donde crecer, espacios que cuenten historias. La excelencia no es opcional; es el único camino que conocemos.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                )}
            </InView>

            {/* CONTACTO + FOOTER */}
            <InView>
                {({ inView, ref }) => (
                    <div ref={ref} className='h-full'>
                        <section id="contactoRef" className='flex flex-col relative h-full bg-white overflow-hidden overflow-y-scroll snap-end'>
                            <div className={`flex flex-col flex-1 w-full max-w-4xl mx-auto px-6 md:px-12 pt-20 pb-32
                                ${inView ? 'animate-fadeBottomAnimation 4s ease-in-out visible' : 'hidden'}`}>
                                
                                <div className="mb-6">
                                    <div className="w-12 h-1 bg-red-500 rounded-full mb-4" />
                                    <h2 className="font-bold text-4xl lg:text-5xl text-zinc-900 text-balance">
                                        Contacto
                                    </h2>
                                    <p className='text-lg md:text-xl text-zinc-500 mt-2'>
                                        Dejanos tu mensaje, te respondemos a la brevedad.
                                    </p>
                                </div>

                                <form className='flex flex-col gap-5 w-full'>
                                    {/* Nombre */}
                                    <div className='flex flex-col gap-1.5'>
                                        <label className='text-xs font-semibold tracking-wider text-zinc-400 uppercase' htmlFor="nombre">Nombre</label>
                                        <input
                                            className='border border-zinc-200 focus:border-red-500 text-base text-zinc-900 rounded-lg h-12 px-4 outline-none transition-colors duration-200 bg-zinc-50 focus:bg-white'
                                            type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} placeholder='Tu nombre completo' required
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className='flex flex-col gap-1.5'>
                                        <label className='text-xs font-semibold tracking-wider text-zinc-400 uppercase' htmlFor="email">Email</label>
                                        <input
                                            className='border border-zinc-200 focus:border-red-500 text-base text-zinc-900 rounded-lg h-12 px-4 outline-none transition-colors duration-200 bg-zinc-50 focus:bg-white'
                                            type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder='tu@email.com' required
                                        />
                                    </div>

                                    {/* Necesito */}
                                    <div className='flex flex-col gap-1.5'>
                                        <label className='text-xs font-semibold tracking-wider text-zinc-400 uppercase' htmlFor="necesito">Necesito</label>
                                        <select id="necesito" name="necesito" onChange={handleChange}
                                            className={`border border-zinc-200 focus:border-red-500 text-base rounded-lg h-12 px-4 outline-none transition-colors duration-200 bg-zinc-50 focus:bg-white appearance-none
                                            ${formData.necesito === "" ? 'text-zinc-400' : 'text-zinc-900'}`}>
                                            <option value="" disabled selected hidden>Seleccione un servicio</option>
                                            <option value="Planos" className='text-zinc-900'>Planos</option>
                                            <option value="Obra" className='text-zinc-900'>Obra</option>
                                        </select>
                                    </div>

                                    {/* Tipo (conditional) */}
                                    {formData.necesito === "Obra" && (
                                        <div className='flex flex-col gap-1.5'>
                                            <label className='text-xs font-semibold tracking-wider text-zinc-400 uppercase' htmlFor="necesito2">Tipo de obra</label>
                                            <select id="necesito2" name="necesito2" onChange={handleChange}
                                                className={`border border-zinc-200 focus:border-red-500 text-base rounded-lg h-12 px-4 outline-none transition-colors duration-200 bg-zinc-50 focus:bg-white appearance-none
                                                ${formData.necesito2 === "" ? 'text-zinc-400' : 'text-zinc-900'}`}>
                                                <option value="" disabled selected hidden>Seleccione tipo</option>
                                                <option value="Construccion" className='text-zinc-900'>Construccion</option>
                                                <option value="Remodelacion" className='text-zinc-900'>Remodelacion</option>
                                                <option value="Reparacion" className='text-zinc-900'>Reparacion</option>
                                            </select>
                                        </div>
                                    )}

                                    {/* Descripcion */}
                                    <div className='flex flex-col gap-1.5'>
                                        <label className='text-xs font-semibold tracking-wider text-zinc-400 uppercase' htmlFor="descripcion">Contanos mas</label>
                                        <textarea
                                            className='border border-zinc-200 focus:border-red-500 text-base text-zinc-900 rounded-lg min-h-32 p-4 outline-none transition-colors duration-200 bg-zinc-50 focus:bg-white resize-none'
                                            id="descripcion" name="descripcion" value={formData.descripcion} onChange={handleChange}
                                            placeholder='Describinos tu proyecto o necesidad...'
                                        />
                                    </div>

                                    {/* Submit */}
                                    <div className='pt-2 flex justify-center'>
                                        <button type="button"
                                            className='bg-red-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/25 active:scale-95'
                                            onClick={handleEnviarClick}
                                        >
                                            Enviar mensaje
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Footer */}
                            <footer className='flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12 py-6 bg-zinc-50 border-t border-zinc-100 gap-4'>
                                <div className="flex items-center gap-6 flex-wrap justify-center">
                                    <a href="https://instagram.com/kopcarq" target="_blank" rel="noopener noreferrer"
                                        className='flex items-center gap-2 text-base text-red-500 hover:text-red-700 transition-colors duration-200'>
                                        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                                            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/>
                                            <circle cx="18" cy="6" r="1" fill="currentColor"/>
                                        </svg>
                                        @kopcarq
                                    </a>
                                    <a href="https://wa.me/+5493416289174" target="_blank" rel="noopener noreferrer"
                                        className='flex items-center gap-2 text-base text-red-500 hover:text-red-700 transition-colors duration-200'>
                                        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="1.5"/>
                                            <path d="M12.0371 18.792C10.8838 18.792 9.77025 18.5095 8.77588 18.0011L5.20801 19L6.23213 15.583C5.64551 14.5391 5.31543 13.3442 5.31543 12.0742C5.31543 8.36426 8.32715 5.35254 12.0371 5.35254C15.7471 5.35254 18.7588 8.36426 18.7588 12.0742C18.7588 15.7842 15.7471 18.792 12.0371 18.792Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M14.8 13.6C14.5 13.9 14.1 13.9 13.8 13.7L12.5 12.8C12.2 12.6 12 12.2 12 11.8V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                        </svg>
                                        +54 341 6 289174
                                    </a>
                                    <span className='flex items-center gap-2 text-sm text-zinc-500'>
                                        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
                                        </svg>
                                        Rosario, Santa Fe
                                    </span>
                                </div>
                                <div className="text-xs text-zinc-400">
                                    kOPCArq - Arquitectura y Construccion
                                </div>
                            </footer>
                        </section>
                    </div>
                )}
            </InView>

        </div>
    );
}
