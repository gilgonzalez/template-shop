'use client'
import { useSidebarStore } from '@/store'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import React from 'react'
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from 'react-icons/io5'

const Sidebar = () => {

  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen)
  const closeSidebar = useSidebarStore((state) => state.closeSidebar)

  return (
    <div >
      {/* BACKGROUND */}
      {
        isSidebarOpen && (
          <div className='fixed top-0 left-0 w-full h-screen z-10 bg-gray-500 opacity-30'></div>
          
        )
      }
      {/* BLUR */}
      {
        isSidebarOpen && (
          <div onClick={closeSidebar} className='fade-in fixed top-0 left-0 w-full h-screen z-10 backdrop-filter backdrop-blur-sm'/>
        )
      }
      {/* SIDEBAR */}
      {

      }
      <nav className={cn("fixed p-5 right-0 top-0 w-[300px] h-screen z-20 bg-slate-100 shadow-lg transform transition-all duration-500"
        , !isSidebarOpen && 'translate-x-full'
      )}>
        <IoCloseOutline 
          onClick={closeSidebar}
          size={32} 
          className='absolute top-5 right-2 cursor-pointer'
        />
        <div className='relative mt-14'>
          <IoSearchOutline size={20} className='absolute top-2 left-2 cursor-pointer' />
          <input type="text" 
            placeholder='Search ... '
            className='w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 border-gray-200 focus:outline-none focus:border-sky-500'
          />
        </div>
        {/**Opciones del menu */}
        <Link onClick={closeSidebar} href="/" className=" flex items-center mt-10 p-2 hover:bg-gray-200 rounded transition-all">
          <IoPersonOutline size={30} className='mr-2' />
          <span className='ml-3 text-xl'>Perfil</span>
        </Link>
        <Link onClick={closeSidebar}  href="/" className=" flex items-center mt-10 p-2 hover:bg-gray-200 rounded transition-all">
          <IoTicketOutline size={30} className='mr-2' />
          <span className='ml-3 text-xl'>Compras</span>
        </Link>
        <Link onClick={closeSidebar}  href="/" className=" flex items-center mt-10 p-2 hover:bg-gray-200 rounded transition-all">
          <IoLogInOutline size={30} className='mr-2' />
          <span className='ml-3 text-xl'>Ingresar</span>
        </Link>
        <Link onClick={closeSidebar}  href="/" className=" flex items-center mt-10 p-2 hover:bg-gray-200 rounded transition-all">
          <IoLogOutOutline size={30} className='mr-2' />
          <span className='ml-3 text-xl'>Salir</span>
        </Link>
        <div className='w-full h-px bg-gray-400 my-10 rounded' />
        <Link onClick={closeSidebar}  href="/" className=" flex items-center mt-10 p-2 hover:bg-gray-200 rounded transition-all">
          <IoShirtOutline size={30} className='mr-2' />
          <span className='ml-3 text-xl'>Productos</span>
        </Link>
        <Link onClick={closeSidebar}  href="/orders" className=" flex items-center mt-10 p-2 hover:bg-gray-200 rounded transition-all">
          <IoTicketOutline size={30} className='mr-2' />
          <span className='ml-3 text-xl'>Todas las compras</span>
        </Link>
        <Link onClick={closeSidebar}  href="/" className=" flex items-center mt-10 p-2 hover:bg-gray-200 rounded transition-all">
          <IoPeopleOutline size={30} className='mr-2' />
          <span className='ml-3 text-xl'>Usuarios</span>
        </Link>
      </nav>

    </div>
  )
}

export default Sidebar