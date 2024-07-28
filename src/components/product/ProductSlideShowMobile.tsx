'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import './slideshow.css';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductSlideShowMobile = ({images, title, className}:Props) => {

  
  return (
    <div className={className}>
      <Swiper
      style={{
        width: '100vw',
        height: '500px',
      }}
        pagination
        autoplay={{
          delay: 2500,
        }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper2"
      >
        {
          images.map(image => (
            <SwiperSlide key={image}>
              <Image 
                src={`/products/${image}`}
                alt={title} 
                width={600} 
                height={500}
                className='object-fill bg-sky-100'
              />
            </SwiperSlide>
          ))
        }
        
      </Swiper>
    </div>
  )
}
