"use client"

import { CoverParticles } from "@/components/main/cover-particles";
import TransitionPage from "@/components/main/transition-page";

import Image from "next/image";
import Link from "next/link";


export default function DefiPage() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <section className="z-20 w-full bg-darkBg/20">
            <div className="z-20 flex items-center justify-around h-full p-6 py-20">
                <Image src="/pixel-cat-ftmh.png" priority width="260" height="600" className="hidden md:flex" alt="Avatar" />
                <div className="flex flex-col justify-center md:w-3/4">
                    <h1 className="mt-10 sm:mt-8 sm:mb-4 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Adquiera Fantom Hat
                    </h1>
                   
                    <div className="flex flex-col items-center justify-center gap-3 md:justify-start md:gap-10">
                        <Link href="#" target="_blank" className="xl:text-4xl text-center w-2/3 py-2 my-2 transition-all border-2 cursor-pointer text-md rounded-xl hover:shadow-xl hover:shadow-white/50">
                            💱 DEX
                        </Link>
                        <Link href="#Al PDF" target="_blank" className="xl:text-3xl text-center w-2/3 py-2 my-5 transition-all border-2 cursor-pointer text-md text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                            📄 Mint
                        </Link>
                       
                    </div>
                </div>
            </div>
        </section>
      </div>
    </main>
  );
}
