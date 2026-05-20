"use client";

import { CoverParticles } from "@/components/cover-particles";
import { CoverStars } from "@/components/cover-stars";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <div className="flex items-start md:items-center flex-1">
      <TransitionPage />
      <CoverStars />
      <Introduction />
    </div>
  );
}
