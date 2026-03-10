import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './navbar'
import './globals.css'
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'kOPCArq | Arquitectura y Construccion',
  description: 'Transformamos espacios con dedicacion y creatividad. Arquitectura, construccion y remodelacion en Rosario, Santa Fe.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className='!scroll-smooth bg-white'>
      <body className={`${inter.className} flex flex-col h-screen w-screen scroll-smooth bg-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
