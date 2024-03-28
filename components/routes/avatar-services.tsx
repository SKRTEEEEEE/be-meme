import Image from "next/image";
import { MotionTransition } from "../main/transition-component";

const HatAvatar = () => {
    return (
        <MotionTransition position='right' className="bottom-0 left-0 hidden xl:inline-block xl:absolute">
            <Image src="/hat-cat-ftmh.png" width="400" height="400" className="w-[350px] h-full " alt="Particles " />
        </MotionTransition>
    );
}

export default HatAvatar;