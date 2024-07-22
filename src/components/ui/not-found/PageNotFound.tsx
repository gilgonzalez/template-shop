import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { titleFont } from '@/config/font'

const PageNotFound = ({href, title = "Page"}: { href: string, title?:string }) => {
  return (
    <div className="flex  flex-col mt-20 gap-4 items-center justify-center">
    <h1 className={`${titleFont.className} antialiased font-semibold`}>404 | {title} not found</h1>
    <Image 
      src="https://media1.tenor.com/m/7y8046Mez14AAAAC/fine-alright.gif" 
      alt={""}
      width={550}
      height={550}
      className="rounded-md"
    />
    <Link href={href}>
      <button className="flex gap-4 p-4 text-white text-xl bg-amber-400 hover:bg-amber-800 transition-colors duration-300 rounded-md"><span>🛟</span> Be safe <span>🛟</span></button>
    </Link>
  </div>
  )
}

export default PageNotFound