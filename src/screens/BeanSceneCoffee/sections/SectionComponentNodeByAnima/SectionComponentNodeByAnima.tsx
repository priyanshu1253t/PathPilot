import React from "react";

export const SectionComponentNodeByAnima = (): JSX.Element => {
  // Social media icons data for mapping
  const socialIcons = [
    { src: "/group-50.png", alt: "Social Media Icon 1" },
    { src: "/group-51.png", alt: "Social Media Icon 2" },
    { src: "/group-52.png", alt: "Social Media Icon 3" },
    { src: "/group-53.png", alt: "Social Media Icon 4" },
  ];

  return (
    <section className="w-full max-w-[389px] py-8">
      <h1 className="font-normal text-[54px] text-white tracking-[0] leading-normal [font-family:'Cinzel',Helvetica]">
        PathPilot
      </h1>

      <p className="mt-9 font-normal text-white text-sm tracking-[0] leading-4 [font-family:'Platypi',Helvetica] max-w-[380px]">
        Choosing the right career shouldn&#39;t be guesswork—it should be a
        journey powered by data, insights, and expert guidance. That&#39;s where
        we come in!
        <br />
        With cutting-edge AI, we analyze your uploaded resume, identifying your
        key skills and aspirations. Based on this, we craft a personalized
        career path tailored to your strengths, helping you take the next step
        with confidence.
      </p>

      <div className="flex space-x-5 mt-[36px]">
        {socialIcons.map((icon, index) => (
          <img
            key={index}
            className="w-6 h-[19px]"
            alt={icon.alt}
            src={icon.src}
          />
        ))}
      </div>
    </section>
  );
};
