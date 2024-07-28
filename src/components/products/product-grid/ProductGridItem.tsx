'use client'
import { Product } from '@/interfaces';
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { cn } from '@/utils/cn';

interface Props {
  product: Product;
}

const ProductGridItem = ({product}: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0])
  return (
    <div className='rounded-md bg-sky-50  overflow-hidden fade-in'>
      <Link href={`/product/${product.slug}`} className='transition-all duration-300'>
        <Image
          src={`/products/${displayImage}`}
          alt={product.title}
          width={500}
          height={500}
          className={cn('w-full object-cover', displayImage === product.images[1] && 'fade-in')}
          onMouseEnter={() => setDisplayImage(product.images[1])}
          onMouseLeave={() => setDisplayImage(product.images[0])} 
        />
      </Link>
      <div className='p-4 flex flex-col'>
        <Link href={`/product/${product.slug}`} className='hover:text-sky-500'>
          {product.title}
        </Link>
        <span className="font-bold">${product.price}</span>
      </div>
    </div>
  )
}

export default ProductGridItem