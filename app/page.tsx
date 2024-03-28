"use client"

import { CoverParticles } from "@/components/main/cover-particles";
import TransitionPage from "@/components/main/transition-page";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MotionTransition } from "@/components/main/transition-component";


export default function Home() {
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLink(true);
    }, 12000); 

    return () => clearTimeout(timer);
  }, []);
  return (
    <main>
      <TransitionPage />

      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <section className="z-20 w-full bg-darkBg/60">
          <div className="z-20 flex items-center justify-around h-full p-6 py-20">
            <Image src="/realw-hat-cat-ftmh.png" priority width="300" height="800" className="hidden sm:flex" alt="Avatar" />

            <div className="flex flex-col justify-around h-screen w-3/4">
              <div className=""><span>
                <h1 className="animated-text text-8xl ">Fantom Hat 🏴‍☠️</h1>
                <p>Tecnología {" "}
                  <TypeAnimation
                    sequence={[
                      'eficiente',
                      2000,
                      'colaborativa',
                      2000,
                      'sostenible',
                      2000,
                      'blockchain.',
                      10000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="mb-5 text-xl leading-tight text-center md:text-left md:text-lg md:mb-10 font-bold text-secondary"
                  /></p></span>



                <ol className="text-sm mx-auto md:mx-0 md:mb-8 mt-2 sm:mt-8">
                  <li><i>Se libre </i>🤖</li>
                  <li className="xl:text-2xl">Con cada click 👇, somos más🤘 y la SEC 🤹‍♀️ llora 👌</li>
                </ol>
              </div>

              <div className="h-1/2 flex items-center justify-center gap-3 md:justify-start md:gap-10">

              {showLink && (
                <MotionTransition position="bottom">
                  <Link href="/buy" className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                    🧑‍💻📱 Descubre FTMH
                  </Link></MotionTransition>
                )}

              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
