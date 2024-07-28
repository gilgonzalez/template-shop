
import { initialData } from "@/seed/seed";
import Link from "next/link";
import { IoTicket } from "react-icons/io5";
import { ProductCart } from "@/components";
import { Title } from "@/components";

const productsInCart = initialData.products.slice(0, 3);

export default function CheackoutPage() {

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
            title="Verificar pedido"
            subtitle="Listado de productos"
            className="mb-10"
          />
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-10 lg:gap-20">
          <div className="flex flex-col gap-5">
            <Link
              href="/cart"
              className="flex flex-row items-center text-xl underline text-sky-500"
            >
              <IoTicket size={24} className="mr-2" />
              Editar pedido
            </Link>

            {/** Items del carrito */}

            {productsInCart.map((product) => (
              <ProductCart key={product.slug} product={product} editable={false} />
            ))}
          </div>
          <div className="bg-white rounded-xl shadow-xl p-7 flex flex-col justify-between">
            <h2 className="text-2xl mb-2 font-semibold">Dirección de entrega</h2>
            <div className="mb-4">
              <p className="text-xl">Francisco Javier Gil</p>
              <p>Calle de la Paz, 1</p>
              <p>28001 Madrid</p>
              <p>España</p>
              <p>Teléfono: +34 600 000 000</p>
            </div>
            <hr />
            <div className="mt-4">
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
              <div className="flex mb-4 justify-between">
                <span className="text-2xl mt-5 ">Total</span>
                <span className="text-2xl mt-5 text-right">{formatPrice}</span>
              </div>
              <p className="mb-5 text-xs">
                <span>
                  Al hacer click en &quot;Realizar pedido&quot;, aceptas nuestros <a href="/terms-and-conditions" className="underline">Términos y condiciones</a> y la <a href="/privacy-policy" className="underline">Política de privacidad</a>. 
                </span>
              </p>
              <Link
                className="flex btn-primary justify-center"
                href="/orders/123"
              >
                Realizar pedido
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
