import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

// import "../globals.css";
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// import Navbar from "@/components/main/navbar";
import Header from "@/components/main/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FTMH",
  description: "Fantom Hat project",
  keywords: ["Blockchain", "NFT", "Fantom", "Memecoin", "Bitcoin", "Ethereum", "Revolucion", "Tecnologia", "Tecnología", "Revolución", "Inversión", "Inversión", "Inversión", "Inversión", "Inversion"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-ES">
      <body className={urbanist.className}>
        {/* <Navbar /> */}
        <Header />
        {children}
      </body>
    </html>
  );
}
