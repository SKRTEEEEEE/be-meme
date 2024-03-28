
import ContainerPage from "@/components/main/container-page";
import { Avatar } from "@/components/routes/avatar"
import TimeLine from "@/components/routes/time-line"

import TransitionPage from "@/components/main/transition-page";

const ServicesPage = () => {
    return (

        <ContainerPage>
            <TransitionPage />
            <section>
            <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    <span className="font-bold text-secondary">
                        Posibilidades
                    </span>
                    {' '}para empresas
                </h1>
                <p className="text-sm">La tecnología blockchain<i> ofrece una amplia gama de posibilidades para empresas tradicionales en diversas industrias.</i></p>


                <TimeLine />
        </section>


        </ContainerPage>

    );
}

export default ServicesPage;