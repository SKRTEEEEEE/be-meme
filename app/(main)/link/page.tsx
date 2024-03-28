import { serviceData } from "@/data"
import AvatarServices from "@/components/routes/avatar-services"
import CircleImage from "@/components/routes/circle-image"
import SliderDoble from "@/components/routes/slider-doble"
import TransitionPage from "@/components/main/transition-page";


const FunctionsPage = () => {
    return (
        <main>
            <TransitionPage />
            <section>
              <CircleImage />
            <AvatarServices />
            <div className="md:grid flex flex-col items-center justify-center h-screen max-w-5xl md:gap-6 gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    {/* <h1 className="text-xl leading-tight text-center sm:text-left xl:text-4xl xl:mb-5">Mis <span className="font-bold text-secondary"> skills.</span></h1> */}

                    <div className="md:mb-3 xl:text-3xl 
                    text-gray-300">
                        <div className="mb-4 px-8 xl:mb-8">A estos NFTs, se podrán <br /><h1 className="text-secondary"> integrar funciones adicionales como juegos o herramientas interactivas</h1><br />para que los usuarios puedan disfrutar plenamente de su marca.
                        </div>
                    </div>
                    {/*                         
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button> */}
                </div>

                {/* SLIDER */}
                <div>
                <p className="text-sm mb-2">
                            <i>Algunas de las ventajas de incluir dichas funciones son:</i>
                        </p>
                    <SliderDoble data={serviceData} />
                </div>
            </div>
        </section>
        </main>
    );
}

export default FunctionsPage;