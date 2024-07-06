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
        width={800}
        height={800}
        className="h-full w-full"
        alt="Avatar"
      ></Image>
    </MotionTransition>
  );
};

export default Avatar;
