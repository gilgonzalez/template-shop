import ProductGrid from "@/components/products/product-grid/ProductGrid";
import { titleFont } from "@/config/font";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: Category;
  };
}

const categories = ["men", "women", "child"]
const products = initialData.products


export default function CategoryPage({ params: { id } }: Props) {

  const filterProducts = products.filter(product => product.gender === id)
  const labels : Record<Category, string> = {
    men: 'Hombres',
    women: 'Mujeres',
    child: 'Niños',
    unisex: 'Unisex'
  }
  
  if( !categories.includes(id)) {
    notFound()
  }
  
  return (
    <>
      <h1 className={`${titleFont.className} antialiased text-xl font-semibold my-4 capitalize`}>Sección {labels[id]}</h1>
      <ProductGrid products={filterProducts} />
    </>
  );
}