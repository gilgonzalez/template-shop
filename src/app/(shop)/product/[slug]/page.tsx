import { notFound } from "next/navigation";
import { initialData } from "@/seed/seed";
import { titleFont } from "@/config/font";
import { ProductSlideShow, ProductSlideShowMobile, QuantitySelector, SizeSelector } from "@/components";




const products = initialData.products

interface Props {
  params: {
    slug: string;
  };
}

export default function ProductPage( { params: { slug } }: Props) {

  const product = products.find(product => product.slug === slug)

  if( !product) {
    notFound()
  }
  const formatPrice = Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.price)


  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">
      
      <div className="col-span-1 md:col-span-2 ">
        {/**Desktop */}
        <ProductSlideShow 
          images={product.images}
          title={product.title}
          className="hidden md:block"
        />
        {/**Mobile */}
        <ProductSlideShowMobile 
          images={product.images}
          title={product.title}
          className="block md:hidden"
        />
      </div>

      <div className="col-span-1 px-8 md:px-5">
        <h1 className={`${titleFont} antialiased text-xl capitalize font-semibold my-4`}>{product.title}</h1>
        <p className="text-lg mb-5">{formatPrice}</p>
        <SizeSelector
          selectedSize={product.sizes[0]}
          availableSizes={product.sizes}
        />
        <QuantitySelector quantity={1}/>
        <button className="btn-primary my-5">Agregar al carrito</button>   
        <h3 className="font-bold text-sm">Descripción</h3> 
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}