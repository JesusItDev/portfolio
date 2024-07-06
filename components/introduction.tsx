"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 flex h-full flex-col items-center p-6 pt-28 md:grid md:grid-cols-2 md:py-0">
        <Image
          src="/home-4.png"
          priority
          width="800"
          height="800"
          alt="Profile pic"
        ></Image>
        <div className="flex max-w-screen-md flex-col justify-center">
          <h1 className="mb-5 text-center text-2xl leading-tight md:text-left">
            <TypeAnimation
              sequence={["Web ", 1000, "Mobile ", 1000, "Software ", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-secondary"
            />
            <br />
            Developer
          </h1>
          <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-0">
            Computer Systems Engineer with a great interest in software
            development. I&apos;m capable of applying my knowledge in the
            professional ambit, where i&apos;m an avid learner. I&apos;m looking
            for an opportunity to further develop my technical abilities and
            soft skills.
          </p>
          <br />
          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
            <Link
              href="/portfolio"
              className="text-md w-fit cursor-pointer rounded-xl border-2 px-3 py-2 transition-all hover:shadow-xl hover:shadow-white/50"
            >
              View projects
            </Link>
            <Link
              href="/about-me"
              className="text-md w-fit cursor-pointer rounded-xl border-2 border-secondary px-3 py-2 text-secondary transition-all hover:shadow-xl hover:shadow-secondary"
            >
              Contact me!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
