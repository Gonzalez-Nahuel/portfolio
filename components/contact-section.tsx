"use client";

import { CoverParticles } from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page";
import { socialNetworks } from "@/data";
import { RiGithubFill, RiLinkedinBoxFill, RiMailFill } from "react-icons/ri";
import { CoverStars } from "./cover-stars";

const Contact = () => {
  return (
    <>
      <TransitionPage />

      <div className="relative flex items-center md:items-center justify-center [@media(max-height:700px)]:mb-24 overflow-hidden w-full">
        <CoverStars />

        <section className="relative z-20 w-full px-6">
          <div className="max-w-4xl p-8 mx-auto border backdrop-blur-sm rounded-3xl  bg-darkBg/60 md:p-14">
            <div className="flex flex-col gap-10 md:gap-16 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h1 className="mb-6 text-2xl font-bold leading-tight md:text-6xl">
                  Hablemos.
                </h1>

                <p className="text-base leading-relaxed text-gray-300 md:text-xl">
                  Estoy abierto a nuevas oportunidades, colaboraciones y
                  proyectos donde pueda seguir creciendo como desarrollador Full
                  Stack y crear soluciones con impacto real.
                </p>

                <div className="flex gap-4 mt-8 text-sm md:text-base">
                  <a
                    href="mailto:nahuelg976@gmail.com"
                    className="px-5 py-3 transition-all border rounded-xl border-secondary text-secondary hover:bg-secondary hover:text-white"
                  >
                    Enviar email
                  </a>

                  <a
                    href="/portfolio"
                    className="px-5 py-3 transition-all border rounded-xl border-white/20 hover:border-white hover:bg-white/10"
                  >
                    Ver proyectos
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <a
                  href="mailto:nahuelg976@gmail.com"
                  className="flex items-center gap-4 p-4 transition-all border group rounded-2xl border-white/10 hover:border-secondary hover:bg-white/5"
                >
                  <RiMailFill className="text-3xl transition-all text-secondary group-hover:scale-110" />

                  <div>
                    <p className="font-semibold text-sm md:text-base">Email</p>
                    <span className="text-sm text-gray-400">
                      Nahuelg976@gmail.com
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
