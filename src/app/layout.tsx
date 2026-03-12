import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './navbar'
import './globals.css'
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'kOPCArq | Arquitectura y Construccion',
  description: 'Transformamos espacios con dedicacion y creatividad. Arquitectura, construccion y remodelacion en Rosario, Santa Fe.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
  manifest: '/site.webmanifest',
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
