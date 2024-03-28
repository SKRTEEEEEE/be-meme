
"use client"

import Image from "next/image";

import { MotionTransition } from "../main/transition-component";

export function Avatar() {
    return (
        <MotionTransition position="bottom" className="top-14 right-2 hidden xl:inline-block xl:absolute ">
            <Image src="/hero-empresas.png" width="400" height="400" className="" alt="Particles " />
        </MotionTransition>
    )
}
