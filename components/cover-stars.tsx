"use client";

import { useEffect, useState } from "react";

import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

export const CoverStars = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    init && (
      <div className="w-[0px] ">
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },

              links: {
                enable: false,
              },

              move: {
                enable: true,
                speed: 0.2,
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                  default: "out",
                },
              },

              number: {
                density: {
                  enable: true,
                },
                value: 180,
              },

              opacity: {
                value: { min: 0.2, max: 1 },
              },

              shape: {
                type: "circle",
              },

              size: {
                value: { min: 1, max: 2 },
              },
            },
            twinkle: {
              particles: {
                enable: true,
                frequency: 0.05,
                opacity: 1,
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    )
  );
};
