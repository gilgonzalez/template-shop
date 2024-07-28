import { Product } from '@/interfaces'
import React from 'react'
import ProductGridItem from './ProductGridItem'

interface Props {
  products: Product[]
}

const ProductGrid = ({products}: Props) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
      {
        products.map((product, index) => {
          return (
            <ProductGridItem key={product.slug} product={product} />
          )
        })
      }

    </div>
  )
}

export default ProductGrid