
import Link from "next/link";
import Image from "next/image";
import TransitionPage from '@/components/main/transition-page';
import HatAvatar from "@/components/routes/avatar-services";



const MorePage = () => {
    return (
        <main>
            <TransitionPage />
            <section>
              {/* <Image src="/pixel-cat-ftmh.png" width="300" height="500" className="bottom-0 right-0 hidden md:inline-block md:absolute  " alt="Particles " /> */}
            <div className='flex flex-col justify-center h-lvh'>
                <HatAvatar />
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Un gorro {" "}
                    <span className="block font-bold text-secondary">lo cambio todo.</span>
                </h1>
                <div className="flex items-center justify-center">
                    <div>
                         <div className="flex justify-between gap-5 mt-5">
                                             <Link
                                                href={"mailto:adanreh.m@gmail.com"}
                                                target="_blank"
                                                className="p-2 transition duration-150 rounded-lg bg-slate-500/10 hover:bg-slate-500/80"
                                            >🙋‍♂️
                                                <span className='hidden lg:inline'>Información</span> Contrato 
                                            </Link>

                                            <Link
                                                href={"https://profile-skrt.vercel.app"}
                                            
                                                className="p-2 transition duration-150 rounded-lg bg-secondary/10 hover:bg-secondary/80"
                                            >❤️ 
                                                <span className='hidden lg:inline'>Web </span>Desarrollador 
                                            </Link>
                                            <Link
                                                href={"https://drive.google.com/file/d/1vk9IEbVqTQybKiD-Xvt7efs6pjKJr2zt/view?usp=drive_link"}
                                                target="_blank"
                                                className="p-2 transition duration-150 rounded-lg bg-slate-500/10 hover:bg-slate-500/80"
                                            >🧑‍💻 FTMH 
                                                <span className='hidden lg:inline'> Precio </span> 
                                            </Link> 
                                        </div>
                    </div>
                </div>
            </div>
        </section>
        </main>
    );
}

export default MorePage;