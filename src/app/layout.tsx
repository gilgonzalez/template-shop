import type { Metadata } from "next";
import { inter } from "@/config/font";

import "./globals.css";



export const metadata: Metadata = {
  title: "Algámitas | Online Store",
  description: "Algámitas es un sitio web de comercio electrónico para comprar algún producto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
