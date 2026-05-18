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
      className={`flex flex-col  md:flex-row ${position === "end" ? "md:flex-row-reverse" : ""} p-4 rounded-2xl md:border-none md:rounded-none gap-4 w-full lg:gap-12 max-w-[550px] md:max-w-none`}
    >
      <div className="flex flex-col justify-between items-center p-4 border border-teal-50 rounded-xl">
        <h3 className="mb-4 text-xl font-bold">{title}</h3>
        <Image
          src={image}
          alt="Image"
          width={200}
          height={200}
          className="w-full md:w-[200px] rounded-2xl h-auto mb-6 md:mb-0"
        />

        <div className=" md:hidden flex flex-col justify-around max-w-96">
          <h3 className="font-bold text-base text-secondary mb-4 md:mb-0">
            {stack}
          </h3>
          <p>{description}</p>
        </div>

        <div className="flex justify-center md:justify-start gap-5 mt-5 z-50">
          <Link
            href={urlGithub}
            target="_blank"
            className="p-2 text-sm font-bold transition duration-150  border-2 border-transparent border-b-slate-600 hover:bg-slate-600 hover:text-black"
          >
            Github
          </Link>

          <Link
            href={urlDemo}
            target="_blank"
            className="p-2 font-bold text-sm  transition duration-150 text-secondary border border-transparent border-b-secondary hover:bg-secondary hover:text-white"
          >
            Live demo
          </Link>
        </div>
      </div>
      <div className="md:flex flex-col justify-around max-w-96 hidden">
        <h3 className="font-bold text-base text-secondary">{stack}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PortfolioBox;
