"use client"

import { itemsNavbar, socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";
import { usePathname } from "next/navigation";
// import Navbar from "./navbar";


const Header = () => {
    const router = usePathname()
    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
            <header>
                {/* <Navbar/> */}
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <Link href='/'>
                        <div className="my-3 text-4xl font-bold text-center md:text-left">
                            Fantom Hat{" "} 
                            <span className="text-secondary">FTMH</span>
                            
                        </div>
                    </Link>
                    <MotionTransition position="right">
                    <nav className="mt-2">
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
                    {itemsNavbar.map((item) => (
                        <div
                            key={item.id}
                            className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${router === item.link && 'bg-secondary'}`}
                            data-tooltip-target="tooltip-default">
                            <Link href={item.link}>{item.icon} </Link>
                        </div>
                    ))}
                </div>
            </nav></MotionTransition>
                    
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link
                                key={id}
                                href={src}
                                target="_blank"
                                className="transition-all duration-300 hover:text-secondary"
                            >
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;