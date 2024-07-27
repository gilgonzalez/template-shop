import { Title } from "@/components";
import ProductGrid from "@/components/products/product-grid/ProductGrid";
import { initialData } from "@/seed/seed";

const products = initialData.products;


export default function Home() {
  return (
    <>
      <Title title="Tienda Online" subtitle="Página de inicio" />
      <ProductGrid products={products} />
    </>

  );
}
