import React from "react";
import { Button } from "../../../../components/ui/button";

export const OverlapWrapperByAnima = (): JSX.Element => {
  return (
    <section className="w-full max-w-[758px] mx-auto py-16">
      <div className="relative w-full">
        <header>
          <h1 className="text-[35px] [font-family:'Platypi',Helvetica] font-medium text-white mb-8">
            Welcome&nbsp;&nbsp;to our platform
          </h1>
        </header>

        <div className="w-full">
          <p className="text-[25px] [font-family:'Platypi',Helvetica] font-normal text-white leading-[34px] max-w-[591px] mb-4">
            Pathpilot is best to start with the roadmap that provides you
            direction at the right time
          </p>

          <div className="[font-family:'Clicker_Script',Helvetica] font-normal text-white text-[220px] leading-normal">
            here you go
          </div>
        </div>

        <div className="mt-6">
          <Button className="w-[135px] h-12 bg-[#f9c06a] rounded-3xl shadow-[0px_6px_12px_#f9c06a38] hover:bg-[#f9c06a]/90">
            <span className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#1e1e1e] text-[19px]">
              Explore
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
