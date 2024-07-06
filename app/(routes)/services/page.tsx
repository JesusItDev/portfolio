import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div className="flex flex-col items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid md:grid-cols-2 md:px-20">
        <div className="max-w-[450px]">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl mb-5">
            My <span className="font-bold text-secondary"> services</span>
          </h1>
          <p className="mb-3 text-xl text-gray-300 p-6">
            Computer Systems Engineer with a great interest in software
            development. I&apos;m capable of applying my knowledge in the
            professional ambit, where i&apos;m an avid learner. I&apos;m looking
            for an opportunity to further develop my technical abilities and
            soft skills.
          </p>
        </div>

        <div>
          <SliderServices />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
