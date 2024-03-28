import { HomeIcon,  Github, Mail, Link, PackageSearch, ZoomIn, Bitcoin, UserRoundSearch } from "lucide-react";
import { IoBusinessOutline } from "react-icons/io5";

export const socialNetworks = [
    {
        id: 3,
        logo: <Github  size={30} strokeWidth={1} />,
        src: "https://github.com/SKRTEEEEEE",
    },
    {
        id: 1,
        logo: <UserRoundSearch size={30} strokeWidth={1} />,
        src: "https://profile-skrt.vercel.app/",
    },
    {
        id: 2,
        logo: <Mail size={30} strokeWidth={1} />,
        src: "mailto:adanreh.m@gmail.com",
    },

];


export const itemsNavbar = [

    // {
    //     id: 2,
    //     title: "Services",
    //     icon: <IoBusinessOutline 
    //     size={25} color="#fff" strokeWidth={1} />,
    //     link: "/services",
    // },
    {
        id: 1,
        title: "Project",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/project",
        
    },
    // {
    //     id: 4,
    //     title: "Link",
    //     icon: < Link   size={25} color="#fff" strokeWidth={1} />,
    //     link: "/link",
    // },
    {
        id: 2,
        title: "Buy",
        icon: <Bitcoin size={25} color="#fff" strokeWidth={1} />,
        link: "/buy",
    },
    {
        id: 3,
        title: "More",
        icon: <ZoomIn  size={25} color="#fff" strokeWidth={1} />,
        link: "/mas",
    },
];

export const dataStudiesPage = [
    {
        id: 1,
        title: "Contratos inteligentes",
        description: 
            "Los contratos inteligentes son programas informáticos auto ejecutables que se ejecutan en la blockchain cuando se cumplen ciertas condiciones predefinidas. Las empresas pueden utilizar contratos inteligentes para automatizar procesos comerciales, lo que reduce la necesidad de intermediarios y minimiza los errores humanos.",
    },
    {
        id: 2,
        title: "Registro y seguimiento de activos",
        description: "Permite crear registros inmutables y transparentes de activos como productos, materias primas, propiedad intelectual, etc. Esto puede ayudar a rastrear la procedencia de los productos, garantizar la autenticidad, combatir la falsificación...",
    },
    {
        id: 3,
        title: "Gestión de la cadena de suministro",
        description: "Mejora la transparencia y la trazabilidad en la cadena de suministro al permitir que las empresas y los consumidores rastreen el origen y el recorrido de los productos.",
    },
    {
        id: 4,
        title: "Gestión de identidad y autenticación",
        description: "Proporciona un registro seguro y verificable de identidades, para gestionar la identidad digital de los clientes, empleados y otros actores dentro de una empresa. Ayudando a prevenir el fraude y mejorando la seguridad en línea.",
    },
    {
        id: 5,
        title: "Finanzas y pagos",
        description: "Simplifican y agilizan los procesos de pago, eliminando la necesidad de intermediarios como bancos y reduciendo los costos de transacción. Se pueden utilizar para facilitar pagos transfronterizos, micropagos, remesas internacionales, como medio de inversion, etc...",
    },
    {
        id: 6,
        title: "Gestión de derechos de autor y propiedad intelectual",
        description: "Registra y protege los derechos de autor y la propiedad intelectual de manera segura y transparente. Esto puede ayudarle a proteger sus activos digitales y garantizar una compensación justa por su trabajo.",
    },
];

export const serviceData = [
    {
        image: "/compromiso.png",
        title: "Aumento del compromiso",
        description: "Los juegos y herramientas interactivas mantendrán a los usuarios comprometidos con la marca, ya que buscarán participar en las actividades relacionadas con sus NFTs.",
    },
    {
        image: "/competencia.png",
        title: "Diferenciación de la competencia",
        description: "La integración de juegos y herramientas interactivas en los NFTs destacará la marca frente a la competencia, ofreciendo una experiencia única y atractiva.",
    },
    {
        image: "/fidelizacion-clientes.png",
        title: "Finalización de clientes",
        description: "Los usuarios se sentirán más apegados a la marca al disfrutar de actividades entretenidas a través de sus NFTs, lo que aumentará la fidelidad hacia los productos reales asociados..",
    },
    {
        image: "/visibilidad.png",
        title: "Mayor visibilidad de la marca",
        description: "Al ofrecer una experiencia interactiva, la marca ganará mayor visibilidad en plataformas digitales, lo que atraerá a nuevos clientes potenciales.",
    },
    {
        image: "/ingresos-ad.png",
        title: "Generación de ingresos adicionales",
        description: "La implementación de juegos y herramientas interactivas puede abrir nuevas oportunidades de ingresos a través de la venta de productos virtuales relacionados con los NFTs. ",
    },
    {
        image: "/potencial-interes.png",
        title: "Potencial viral",
        description: "Los juegos y herramientas interactivas pueden ser compartidos en redes sociales, generando interés y viralidad en torno a la marca y sus productos asociados.",
    },
    {
        image: "/fidelizacion-clientes.png",
        title: "Experiencia de usuario mejorada",
        description: "Los usuarios disfrutarán de una experiencia más enriquecedora al interactuar con sus NFTs a través de juegos y herramientas, lo que potenciará su satisfacción.",
    },
    {
        image: "/comunidad.png",
        title: "Ampliación de la comunidad",
        description: "La implementación de actividades interactivas atraerá a nuevos miembros a la comunidad de usuarios de los NFTs, fortaleciendo la red de seguidores de la marca.",
    },
    {
        image: "/posicionamiento.png",
        title: "Posicionamiento como marca innovadora",
        description: "La adopción de tecnologías como los NFTs con funciones adicionales posicionará a la marca como innovadora y a la vanguardia en su industria.",
    },
    {
        image: "/colaboraciones.png",
        title: "Oportunidades de colaboración",
        description: "La integración abrirá oportunidades de colaboración con desarrolladores de juegos, aplicaciones, blockchains existentes, etc... Enriqueciendo la oferta de la marca y mejorando en engangment.",
    },
];
