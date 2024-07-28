import { titleFont } from '@/config/font'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className='flex w-full justify-center text-xs mb-10 px-2'>
      <Link
        href="/"
        className='space-x-2'
      >
        <span className={`${titleFont.className} antialiased font-bold`}>Algámitas Aventura S.L.</span>
        <span>© 2023 Algámitas | Todos los derechos reservados</span>
      </Link>
      <Link href="/" className='space-x-2 mx-3'>
        <span>Privacidad & Legal</span>
      </Link>
      <Link href="/" className='space-x-2 mx-3'>
        <span>Contacto</span>
      </Link>
    </div>
  )
}

