import { initialData } from "@/seed/seed";
import Link from "next/link";
import { IoTicket } from "react-icons/io5";
import { ProductCart} from "@/components";
import { Title } from "@/components";
import { redirect } from "next/navigation";

const productsInCart = initialData.products.slice(0, 3);

export default function CartPage() {

  if(productsInCart.length === 0) {
    redirect('/empty')
  }

  const total = productsInCart.reduce((acc, product) => {
    return acc + product.price;
  }, 0);
  const iva = total * 0.21;
  const formatIva = Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(iva)
  const formatPrice = Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(total)
  return (
    <div className="flex justify-center items-center mb-72 px-4 sm:px-0">
      <div className="flex flex-col w-full px-0 lg:px-20">
        <span>
          <Title
            title="Resumen de compra"
            subtitle="Listado de productos"
            className="mb-10"
          />
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-10 lg:gap-20">
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              className="flex flex-row items-center text-xl underline text-sky-500"
            >
              <IoTicket size={24} className="mr-2" />
              Continuar comprando
            </Link>

            {/** Items del carrito */}

            {productsInCart.map((product) => (
              <ProductCart key={product.slug} product={product} />
            ))}
          </div>
          <div className="bg-white rounded-xl shadow-xl p-7 flex flex-col justify-between ">
            <div className="">
              <span className="flex flex-row items-center mb-2 ">
                <IoTicket size={24} className="mr-2 text-sky-500" />
                <h2 className="text-2xl font-semibold">
                Total
                </h2>
              </span>
              <div className="grid grid-cols-2 gap-2">
                <span>No. de artículos</span>
                <span className="text-right">{productsInCart.length} artículos</span>
                <span>Impuestos (21%)</span>
                <span className="text-right">{formatIva}</span>

              </div>
            </div>
            <div className=" mt-4 w-full mb-2 ">
              <div className="flex justify-between mb-4">
                <span className="text-2xl mt-5 ">Total</span>
                <span className="text-2xl mt-5 text-right">{formatPrice}</span>
              </div>
              <Link
                className="flex btn-primary justify-center"
                href="/checkout/address"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
