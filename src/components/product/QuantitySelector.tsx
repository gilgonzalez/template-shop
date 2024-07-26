'use client'
import React, { useState } from 'react'
import { IoAddOutline,  IoRemoveOutline } from 'react-icons/io5';
import { Toaster, toast } from 'sonner'


interface Props {
  quantity: number;

}

export const QuantitySelector = ({quantity}: Props) => {

  const [count, setCount] = useState(quantity)

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const handleIncrement = () => {
    if (count >= 5){
      toast.error('El máximo de cantidad es 5', {duration:1500})
      return
    }
    setCount(count + 1)
  }

  return (
    <div className='flex'>
      <Toaster richColors/>
        <button onClick={handleDecrement}>
          <IoRemoveOutline size={24} />
        </button>
        <span className='text-lg mx-4 px-6 bg-gray-200 text-center flex items-center justify-center rounded-md py-2'>
          {count}
        </span>
        <button onClick={handleIncrement}>
          <IoAddOutline size={24} />
        </button>
    </div>
  )
}