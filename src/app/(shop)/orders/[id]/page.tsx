import { ProductCart } from "@/components";
import { initialData } from "@/seed/seed";
import { cn } from "@/utils/cn";
import { IoCartOutline, IoTicket } from "react-icons/io5";
import { Title } from "@/components";

const productsInCart = initialData.products.slice(0, 3);

interface Props {
  params: {
    id: string;
  };
}

export default function OrderPage({ params: { id } }: Props) {

  // TODO : verificar id con redirect


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
            title={`Orden #${id}`}
            className="mb-10"
          />
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-10 lg:gap-20">
          <div className="flex flex-col gap-5">
            <div className={cn("flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
              true && "bg-red-400",
              true && "bg-sky-500"
            )}>
              <IoCartOutline size={30} />
              <span className="mx-2">Pendiente de pago</span>
              <span className="mx-2">Pagado</span>
            </div>

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
            <div className=" mt-4 w-full ">
              <div className="flex mb-4 justify-between">
                <span className="text-2xl mt-5 ">Total</span>
                <span className="text-2xl mt-5 text-right">{formatPrice}</span>
              </div>
              <div className={cn("flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white",
              true && "bg-red-400",
              true && "bg-sky-500"
            )}>
              <IoCartOutline size={30} />
              <span className="mx-2">Pendiente de pago</span>
              <span className="mx-2">Pagado</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}