import Link from "next/link";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

export default function EmptyCartPage() {

  // TODO : Redireccionar al carrito si el carrito no está vacío
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[800px]">
        <h1 className="text-3xl font-semibold">Tu carrito está vacío</h1>
        <MdOutlineRemoveShoppingCart size={150} className="text-red-400" />
        <Link href={"/"}
          className="btn-primary flex w-[90%] sm:w-1/2 justify-center "
        >
          Seguir comprando
        </Link>
    </div>
  );
}