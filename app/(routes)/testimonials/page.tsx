"use client";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import { dataTestimonials } from "@/data";
import Image from "next/image";
import * as React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialsPage = () => {
  return (
    <>
      <TransitionPage />
      <div className="flex flex-col justify-center h-lvh">
        <CircleImage />
        <h1 className="text-2xl leading-tight text-center md:text-xl md:mb-5">
          Satisfied
          <span className="text-secondary font-bold block">Clients</span>
        </h1>

        <div className="flex items-center justify-center">
          <div>
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="h-[380px] md:h-[300px] w-[270px] md:w-[550px]"
            >
              {dataTestimonials.map(({ id, name, description, imageUrl }) => (
                <SwiperSlide key={id}>
                  <Image
                    src={imageUrl}
                    alt={name}
                    width={100}
                    height={100}
                    className="mx-auto rounded-full"
                  />
                  <h4 className="text-center">{name}</h4>
                  <p className="mt-5 text-center">{description}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
