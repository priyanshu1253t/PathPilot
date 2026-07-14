import React from "react";
import { Button } from "../../../../components/ui/button";

export const GroupByAnima = (): JSX.Element => {
  return (
    <div className="relative w-full max-w-[1082px] mx-auto py-2.5">
      <h2 className="text-center text-white text-[32px] font-bold font-['Playfair_Display',Helvetica] mb-[577px]">
        For Student
      </h2>

      <div className="flex flex-wrap justify-between">
        <Button className="w-[164px] h-[72px] bg-[url(/rectangle-1.svg)] bg-[100%_100%] font-['Playfair_Display',Helvetica] font-bold text-black text-[19px] rounded-none">
          Sign In
        </Button>

        <Button className="w-[164px] h-[72px] bg-[url(/rectangle-3.svg)] bg-[100%_100%] font-['Playfair_Display',Helvetica] font-bold text-black text-[19px] rounded-none">
          Sign Up
        </Button>

        <Button className="w-[164px] h-[72px] bg-[url(/rectangle-4.svg)] bg-[100%_100%] font-['Playfair_Display',Helvetica] font-bold text-black text-[19px] rounded-none">
          Sign Up
        </Button>
      </div>
    </div>
  );
};
