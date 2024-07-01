"use-client";
import Image from "next/image";

const CircleImage = () => {
  return (
    <div className="bottom-0 right-0 hidden md:absolute md:inline-block">
      <Image
        src="/circles.png"
        width={300}
        height={300}
        alt={"Circle"}
        className="h-full w-full"
      />
    </div>
  );
};

export default CircleImage;
