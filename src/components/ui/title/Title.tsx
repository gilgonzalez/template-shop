import { titleFont } from '@/config/font';
import React from 'react'

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

const Title = ({title, subtitle, className}: Props) => {
  return (
    <div className={`${className} mt-3`}>
      <h1 className={`${titleFont.className} antialiased text-5xl font-semibold my-4`}>{title}</h1>
      {subtitle && <h3 className={`${titleFont.className} antialiased text-xl mb.5`}>{subtitle}</h3>}
    </div>
  )
}

export default Title