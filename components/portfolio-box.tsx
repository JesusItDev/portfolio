import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
  };
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const { id, title, image, urlGithub, urlDemo } = data;
  return (
    <div className="rounded-xl border-teal-50 px-4">
      <h3>{title}</h3>
      <Image
        src={image}
        alt="Image Product"
        width={200}
        height={200}
        className="h-auto w-full rounded-2xl md:w-[200px]"
      />
      <div className="mt-5 flex gap-5">
        <Link
          href={urlGithub}
          target="_blank"
          className="rounded-lg bg-slate-500 p-2 transition duration-150 hover:bg-slate-500/80"
        >
          GitHub
        </Link>
        <Link
          href={urlDemo}
          target="_blank"
          className="rounded-lg bg-secondary p-2 transition duration-150 hover:bg-secondary/80"
        >
          GitHub
        </Link>
      </div>
    </div>
  );
};

export default PortfolioBox;
