import Image from "next/image";
import Link from "next/link";
import { BiLogoTailwindCss } from "react-icons/bi";
import {
  RiNextjsFill,
  RiNextjsLine,
  RiTailwindCssFill,
  RiTailwindCssLine,
} from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
    position: string;
    description: string;
    stack: string;
  };
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const { id, title, image, urlDemo, urlGithub, position, description, stack } =
    data;

  return (
    <div
      key={id}
      className={`relative flex flex-col md:min-h-80 md:flex-row ${position === "end" ? "md:flex-row-reverse" : ""} border border-slate-500 p-4 rounded-2xl md:border-none md:rounded-none items-stretch gap-4 w-full lg:gap-12 max-w-[550px] md:max-w-none`}
    >
      <div
        className={`hidden md:block relative aspect-video md:aspect-auto w-full max-w-[500px] overflow-hidden  border-[40px] ${position === "start" ? "border-l-0" : "border-r-0"}   border-purple-950 mb-4`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="w-full md:w-1/2 z-10 flex flex-col items-center md:items-start">
        <h3 className="md:mb-8 mb-4 font-extrabold md:text-3xl text-xl">
          {title}
        </h3>
        <div className="md:hidden relative aspect-video md:aspect-auto w-full max-w-[500px] overflow-hidden  border-[15px] border-purple-950 mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center"
          />
        </div>
        <p className="md:text-lg mb-4 text-sm max-w-[500px]">{description}</p>

        <span className="md:text-lg text-sm">{stack}</span>

        <div className="flex justify-center md:justify-start gap-5 mt-5 z-50">
          <Link
            href={urlGithub}
            target="_blank"
            className="p-2 text-sm md:text-lg font-bold transition duration-150  border-2 border-transparent border-b-slate-600 hover:bg-slate-600 hover:text-black"
          >
            Github
          </Link>

          <Link
            href={urlDemo}
            target="_blank"
            className="p-2 font-bold text-sm md:text-lg transition duration-150 text-secondary border border-transparent border-b-secondary hover:bg-secondary hover:text-white"
          >
            Live demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBox;
