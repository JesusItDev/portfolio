"use client";
import Image from "next/image";
import { MotionTransition } from "./transition-component";

const AvatarPortfolio = () => {
  return (
    <MotionTransition
      position="bottom"
      className="bottom-0 hidden md:absolute md:inline-block"
    >
      <Image
        src="/avatar-works.png"
        width={300}
        height={300}
        className="h-full w-full"
        alt="Avatar Portfolio"
      />
    </MotionTransition>
  );
};

export default AvatarPortfolio;
