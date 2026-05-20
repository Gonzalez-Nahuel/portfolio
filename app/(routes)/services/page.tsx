import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import { CoverStars } from "@/components/cover-stars";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CoverStars />
      <CircleImage />
      <AvatarServices />
      <div className="flex flex-col items-center justify-start md:justify-center gap-14 mx-auto w-full max-w-7xl">
        <div className="flex w-full px-10 justify-center md:justify-start">
          <div className="max-w-[450px]">
            <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
              Mis <span className="font-bold text-secondary"> servicios.</span>
            </h1>
            <p className="mb-6 text-xl text-gray-300">
              Ofrezco servicios de desarrollo web frontend especializados en la
              creación de sitios web y aplicaciones atractivas y funcionales.
              Utilizando las últimas tecnologías, como HTML, CSS y JavaScript,
              diseño interfaces de usuario intuitivas y responsivas que reflejan
              la identidad de marca de mis clientes y mejoran su presencia en
              línea.
            </p>
            <a
              href="/contact"
              className="px-3 py-3 rounded-lg bg-secondary hover:bg-secondary/65"
            >
              Contacta conmigo
            </a>
          </div>
        </div>

        <div className="w-full px-10 flex justify-center md:justify-end">
          <SliderServices />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
