import { Product } from "@/interfaces"
import Image from "next/image";
import { QuantitySelector } from "..";





export const ProductCart = ({product, editable = true}: {product: Product, editable?: boolean}) => {
  const formatPrice = Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.price)
  return (
    <div className="flex gap-2 bg-slate-100 p-2 shadow-lg rounded-md ">
    <Image
      src={`/products/${product.images[0]}`}
      alt={product.title}
      width={75}
      height={75}
      className="mr-5 object-cover aspect-square rounded"
    />
    <div className="flex flex-col">
      <p>{product.title}</p>
      <p className="text-sm">{formatPrice}</p>
    </div>
    <div className="flex flex-1"/>
    {
      editable && (
        <span className="flex flex-col items-end gap-2">
          <QuantitySelector quantity={1}/>
          <button className="underline text-sky-500 mt-3">Eliminar</button>
        </span>
      )
    }
  </div>
  )
}

