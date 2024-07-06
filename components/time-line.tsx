import { dataAboutPage } from "@/data";
import * as React from "react";

interface ITimeLineProps {}

const TimeLine = () => {
  return (
    <div className="flex flex-col justify-center divide-y divide-slate-200">
      <div className="mx-auto w-full max-w-3xl md:pb-40 md:pt-10">
        <div className="my-6">
          {dataAboutPage.map((data) => (
            <div key={data.id} className="group relative py-6 pl-8 sm:pl-32">
              <h3 className="mb-1 text-2xl font-bold sm:mb-0">{data.title}</h3>
              <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
                <time className="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-600 sm:absolute sm:mb-0">
                  {data.date}
                </time>
                <p className="text-xl font-bold text-gray-400">
                  {data.subtitle}
                </p>
              </div>
              <p className="max-w-xl whitespace-pre-line text-slate-400">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
