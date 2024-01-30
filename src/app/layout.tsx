import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './navbar'
import './globals.css'
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'kOPCArq',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth bg-black'>
      <body className={`${inter.className} flex flex-col h-screen w-screen scroll-smooth bg-black`}>
        <Navbar />
        {children}
      </body>
    </html >
  )
}
