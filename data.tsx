import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Crop,
  Pencil,
  Computer,
  Book,
  Mail,
} from "lucide-react";
import { title } from "process";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export const socialNetworks = [
  {
    id: 1,
    logo: <FiGithub size={30} strokeWidth={1} />,
    src: "https://github.com/Gonzalez-Nahuel",
  },
  {
    id: 2,
    logo: <FiLinkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/francisco-nahuel-gonzalez-534905265",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 4,
    title: "Contact",
    icon: <Mail size={25} color="#fff" strokeWidth={1} />,
    link: "/contact",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Inicio en programación",
    subtitle: "JavaScript y desarrollo web",
    description:
      "Comencé mi camino autodidacta aprendiendo JavaScript, HTML y CSS, construyendo pequeños proyectos para entender las bases del desarrollo web.",
    date: "2022",
  },
  {
    id: 2,
    title: "Desarrollo Full Stack",
    subtitle: "React, Next.js y Backend",
    description:
      "Empecé a desarrollar aplicaciones completas utilizando React, Next.js, TypeScript, APIs, autenticación y bases de datos.",
    date: "2024",
  },
  {
    id: 3,
    title: "Colaboración freelance",
    subtitle: "Trabajo en equipo y flujo profesional",
    description:
      "Participé durante 3 meses en un proyecto freelance colaborando en el desarrollo frontend junto a otros desarrolladores. Trabajé utilizando GitHub y un flujo de trabajo colaborativo basado en ramas, commits y revisión de cambios.",
    date: "Abr 2025",
  },
  {
    id: 4,
    title: "Infraestructura y despliegue",
    subtitle: "Docker, Cloud y sistemas",
    description:
      "Actualmente profundizando en despliegues, contenedores, redes, Linux, CI/CD e infraestructura para comprender el ciclo completo de una aplicación.",
    date: "Actualidad",
  },
];

export const dataCounter = [
  {
    id: 0,
    title: "Frontend",
    text: "React · Next.js · TypeScript · Tailwind",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    title: "Backend",
    text: "Node.js · APIs · Auth · PostgreSQL",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    title: "Infraestructura",
    text: "Docker · Linux · CI/CD · AWS",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    title: "En curso",
    text: "Kubernetes · Cloud · Networking",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const serviceData = [
  {
    icon: <Crop />,
    title: "Branding",
    description:
      "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
  },
  {
    icon: <Pencil />,
    title: "Diseño web",
    description:
      "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
  {
    icon: <Computer />,
    title: "Desarrollo web",
    description:
      "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
  },
  {
    icon: <Book />,
    title: "Copywriting",
    description:
      "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Crypto tracker",
    image: "/Captura desde 2026-05-13 15-55-02.png",
    urlGithub: "https://github.com/Gonzalez-Nahuel/crypto-tracker",
    urlDemo: "https://crypto-tracker-alpha-jet.vercel.app/",
    position: "start",
    description:
      "Plataforma de seguimiento de criptomonedas desarrollada con Next.js y TypeScript, integrando APIs externas, autenticación, manejo de estado y persistencia de datos. El proyecto incluye funcionalidades full stack, despliegue y optimización responsive.",
    stack: "Next.js, TypeScript, Tailwind, PostgreSQL, Prisma",
  },
  {
    id: 2,
    title: "Ejercicios DOM",
    image: "/porfolio-box/Captura desde 2026-05-17 14-15-02.png",
    urlGithub: "https://github.com/Gonzalez-Nahuel/manipulacion-dom-js",
    urlDemo: "https://manipulacion-dom-js.vercel.app/#seccion1",
    position: "end",
    description:
      "Proyecto frontend construido sin frameworks para profundizar en fundamentos de JavaScript, manejo del DOM, eventos, renderizado dinámico y lógica de interfaces interactivas.",
    stack: "JavaScript, CSS",
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "George Snow",
    description:
      "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
    imageUrl: "/profile1.png",
  },
  {
    id: 2,
    name: "Juan Pérez",
    description:
      "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
    imageUrl: "/profile2.png",
  },
  {
    id: 3,
    name: "María García",
    description:
      "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
    imageUrl: "/profile3.png",
  },
  {
    id: 4,
    name: "Laura Snow",
    description:
      "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    imageUrl: "/profile4.png",
  },
  {
    id: 5,
    name: "Carlos Sánchez",
    description:
      "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    imageUrl: "/profile5.png",
  },
  {
    id: 6,
    name: "Antonio Martínez",
    description:
      "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    imageUrl: "/profile6.png",
  },
];

export const dataStackIcons = {
  left: [
    {
      id: 1,
      title: "HTML",
      logo: "/logos/html.png",
      width: 55,
      height: 55,
    },
    {
      id: 2,
      title: "REACT",
      logo: "/logos/react.png",
      width: 55,
      height: 55,
    },
    {
      id: 3,
      title: "EXPRESS.JS",
      logo: "/logos/express.png",
      width: 55,
      height: 55,
    },
  ],
  center: [
    {
      id: 1,
      title: "JAVASCRIPT",
      logo: "/logos/js.png",
      width: 55,
      height: 55,
    },
    {
      id: 2,
      title: "PYTHON",
      logo: "/logos/py.png",
      width: 55,
      height: 55,
    },
    {
      id: 3,
      title: "MONGODB",
      logo: "/logos/mongo.png",
      width: 55,
      height: 55,
    },
    {
      id: 4,
      title: "GIT",
      logo: "/logos/git.png",
      width: 55,
      height: 55,
    },
  ],
  right: [
    {
      id: 1,
      title: "CSS",
      logo: "/logos/css.png",
      width: 55,
      height: 55,
    },
    {
      id: 2,
      title: "NEXT.JS",
      logo: "/logos/nextjs.png",
      width: 55,
      height: 55,
    },
    {
      id: 3,
      title: "NODE:JS",
      logo: "/logos/node.png",
      width: 55,
      height: 55,
    },
  ],
};
