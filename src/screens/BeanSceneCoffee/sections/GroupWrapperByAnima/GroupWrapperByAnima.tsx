import React from "react";

export const GroupWrapperByAnima = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1198px] mx-auto py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h1 className="font-['Playfair_Display',Helvetica] font-bold text-backgroundsprimary text-5xl md:text-6xl lg:text-[80px] leading-tight">
            Discover the best Path
          </h1>
        </div>
        <div className="md:w-1/2">
          <p className="font-['Platypi',Helvetica] font-normal text-white text-xl md:text-[25px] tracking-[0.50px] leading-[34px]">
            Choosing a career can be confusing — we make it easy.
            <br /> Our smart career navigator uses AI to match your interests,
            strengths, and goals with the right paths.
            <br /> Explore careers, sharpen your skills, and get real-world
            advice — all in one place.
          </p>
        </div>
      </div>
    </section>
  );
};
