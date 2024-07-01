"use-client";

import Image from "next/image";
import { MotionTransition } from "./transition-component";

const AvatarServices = () => {
  return (
    <MotionTransition
      position="right"
      className="bottom-0 left-0 hidden md:absolute md:inline-block"
    >
      <Image
        src="/services.png"
        width={100}
        height={100}
        className="h-full w-[200px]"
        alt="AvatarServices"
      ></Image>
    </MotionTransition>
  );
};

export default AvatarServices;
