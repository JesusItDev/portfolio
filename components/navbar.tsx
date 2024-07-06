"use client";
import { itemsNavbar } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MotionTransition } from "./transition-component";

const Navbar = () => {
  const router = usePathname();

  return (
    <MotionTransition
      position="right"
      //className="fixed bottom-10 flex h-max w-full flex-col items-center justify-center"
      className="fixed bottom-10 z-40 mt-auto flex h-max w-full flex-col items-center justify-center"
    >
      <nav>
        <div className="background-blur-sm flex items-center justify-center gap-2 rounded-full bg-white/15 px-4 py-1">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`cursor-pointer rounded-full px-3 py-2 transition duration-150 hover:bg-secondary ${router === item.link && "bg-secondary"}`}
            >
              <Link href={item.link}>{item.icon}</Link>
            </div>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;
