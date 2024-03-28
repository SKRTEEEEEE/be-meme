import TransitionPage from "@/components/main/transition-page";
import ContainerPage from "@/components/main/container-page";
import Image from "next/image"
import Link from "next/link"
import AvatarPortfolio from "@/components/routes/avatar-portfolio"
import PopupImage from "@/components/main/popup";




const PortfolioPage = () => {



    return (
        <ContainerPage>
            <TransitionPage />
            <section>

                {/* <CircleImage /> */}
                <AvatarPortfolio />
                
                <div className="md:grid flex flex-col h-2/3 items-center justify-center max-w-5xl md:gap-6 gap-6 mx-auto md:grid-cols-2">
                    <div className="max-w-[450px]">

                    <div className="text-xl text-center sm:text-left xl:text-xl xl:mb-5"><h1 className="xl:text-4xl font-bold inline ">Ponto gorro</h1> y te veras mejor.  </div>

                        <ul className="xl:text-xl 
            text-gray-300">
                            <li className="mb-2 border-secondary/10 hover:bg-secondary/10 hover:border-secondary/50 border-4 rounded-md">
                                <Link href="/buy">
                                    ➡️ Un fantasma con sombrero.</Link>
                            </li>
                            <li className="mb-2 ">
                                📥 <i className="text-sm"> Sigue siendo un fantasma.</i>
                            </li>
                            <li className="mb-2 p-1">Pero ahora tiene sombrero. </li>
                            <li className="mb-2"></li>
                        </ul>

                        {/* <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button> */}
                    </div>

                    {/* SLIDER */}
                    <PopupImage imageUrl="/hat-meme.jpg">

                        <Image src="/hat-meme.jpg" alt="Vinculación de los productos físicos a los NFT" height={600} width={600} className="border-4 rounded-md border-white" />
                    </PopupImage>
                </div>
            </section >
        </ContainerPage>
    );
}

export default PortfolioPage;