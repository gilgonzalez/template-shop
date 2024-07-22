import { titleFont } from "@/config/font";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <h1 className="font-bold">Shop</h1>
      <h2 className={titleFont.className}>Página de inicio</h2>
    </main>
  );
}
