"use client";

import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import { CoverStars } from "@/components/cover-stars";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
  return (
    <>
      <TransitionPage />
      <CoverStars />
      <ContainerPage>
        <Avatar />
        <h1 className="text-2xl leading-tight text-center mb- md:text-left md:text-5xl md:mt-10">
          Mi camino en el dessarrollo{" "}
          <span className="font-bold text-secondary">y la tecnología</span>
        </h1>

        <CounterServices />

        <TimeLine />
      </ContainerPage>
    </>
  );
};

export default AboutMePage;
