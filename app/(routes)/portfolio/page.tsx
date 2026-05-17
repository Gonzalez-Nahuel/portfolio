import Image from "next/image";
import Link from "next/link";

import { dataPortfolio } from "@/data";

import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";
import { CoverParticles } from "@/components/cover-particles";

const PortfolioPage = () => {
  return (
    <ContainerPage>
      <TransitionPage />
      <CoverParticles />
      {/*<AvatarPortfolio />*/}
      {/*<CircleImage />*/}
      <div className="flex flex-col justify-center h-full">
        <h1 className="text-2xl leading-tight text-center mb-8 md:text-4xl md:mb-16">
          Mis últimos{" "}
          <span className="font-bold text-secondary">proyectos realizados</span>
        </h1>

        <div className="relative z-10 flex flex-col items-center mx-auto w-full gap-16">
          {dataPortfolio.map((data) => (
            <PortfolioBox key={data.id} data={data} />
          ))}
        </div>
      </div>
    </ContainerPage>
  );
};

export default PortfolioPage;
