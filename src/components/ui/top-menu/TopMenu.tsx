'use client'
import { titleFont } from '@/config/font'
import { useSidebarStore } from '@/store'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { IoIosMenu } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'

const TopMenu = () => {
  const openSidebar = useSidebarStore((state) => state.openSidebar)
  const {id} = useParams()
  return (
    <nav className='flex px-5 justify-between items-center w-full'>
      {/* Logo */}
      <div>
        <Link href="/">
        <span className={`${titleFont.className} text-2xl antialiased font-bold`}>Algámitas</span>
        <span > | Online Store</span>
        </Link>
      </div>
      {/* Menu */}
      <div className='items-center gap-5 hidden sm:flex'>
        <Link href="/category/men" 
          className={cn('m-2 p-2 rounded-md transition-all hover:bg-sky-200',id === "men" && "rounded bg-sky-200 transition-all ")}
        >
          <span className='text-black'>Hombres</span>
        </Link>
        <Link href="/category/women"
          className={cn('m-2 p-2 rounded-md transition-all hover:bg-sky-200',id === "women" && "rounded bg-sky-200 transition-all ")}
        >
          <span className='text-black'>Mujeres</span>
        </Link>
        <Link href="/category/child"
          className={cn('m-2 p-2 rounded-md transition-all hover:bg-sky-200',id === "child" && "rounded bg-sky-200 transition-all ")}
        >
          <span className='text-black'>Niños</span>
        </Link>
      </div>
      <div className='flex items-center gap-4'>
        {/* Search */}
        <Link href={"/search"}>
          <IoSearch size={32} className='text-black' />
        </Link>
        <Link href={"/cart"}>
        <div className='relative '>
          <div className='absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-sky-500 rounded-full '>
            <span className='text-white text-xs'>{0}</span>
          </div>
          <FiShoppingCart size={32} className='text-black' />
        </div>
        </Link>
        <button className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'>
        <IoIosMenu onClick={openSidebar} size={32} className='text-black' />
        </button>
      </div>
    </nav>
  )
}

export default TopMenu