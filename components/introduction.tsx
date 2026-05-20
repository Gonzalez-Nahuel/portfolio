import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { TechstackBacground } from "./tech-stack-background";

const Introduction = () => {
  return (
    <div className="flex flex-col justify-start z-20 w-full">
      <div className="z-20 grid items-end content-end md:gap-4 md:place-items-center md:content-center justify-items-center h-fit px-6 md:py-0 md:grid-cols-2">
        <div className="flex flex-col justify-center max-w-md ">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            Construyendo, <br />
            <TypeAnimation
              sequence={[
                "aplicaciones completas",
                1000,
                "sistemas optimizados",
                1000,
                "productos escalables",
                1000,
                "ideas reales",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-secondary"
            />
          </h1>

          <p className="mx-auto mb-2 text-base md:text-xl md:mx-0 md:mb-8">
            Me apasiona crear tecnología útil y entender cómo funcionan las
            cosas en profundidad. Como desarrollador Full Stack autodidacta,
            disfruto trabajar en todo el proceso de construcción de una
            aplicación: desde la interfaz y la experiencia de usuario hasta el
            backend, la infraestructura y el despliegue. Siempre estoy
            aprendiendo nuevas herramientas y buscando formas de crear
            soluciones con impacto real.
          </p>

          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
            <a
              href="/portfolio"
              className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              Ver proyectos
            </a>
            <a
              href="/contact"
              className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
            >
              Contacta conmigo
            </a>
          </div>
        </div>

        <Image
          src="/home-4.png"
          priority
          width="750"
          height="750"
          alt="Avatar"
          className="w-80 h-72 md:w-auto md:h-auto "
        />
      </div>
    </div>
  );
};

export default Introduction;
