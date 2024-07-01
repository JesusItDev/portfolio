"use-client";

import Image from "next/image";
import { MotionTransition } from "./transition-component";

const Avatar = () => {
  return (
    <MotionTransition
      position="bottom"
      className="bottom-0 right-0 hidden md:absolute md:inline-block"
    >
      <Image
        src="/avatar-1.png"
        width={200}
        height={200}
        className="h-full w-full"
        alt="Avatar"
      ></Image>
    </MotionTransition>
  );
};

export default Avatar;
