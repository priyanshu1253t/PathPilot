import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const DivByAnima = (): JSX.Element => {
  return (
    <div className="w-full py-16 flex flex-col items-center">
      <div className="max-w-[863px] mb-8">
        <h2 className="font-['Playfair_Display',Helvetica] font-bold text-white text-[54px] leading-normal text-center">
          Subscribe to get the Latest updates
        </h2>
      </div>

      <div className="max-w-[644px] w-full mt-6">
        <Card className="border-none shadow-none bg-transparent">
          <CardContent className="p-0">
            <div className="flex">
              <Input
                className="h-[66px] bg-[#fff9f1] rounded border border-solid border-[#f9c06a6b] px-6 py-4 font-['Playfair_Display',Helvetica] text-xl text-[#00000057] focus-visible:ring-0"
                placeholder="Enter your mail"
              />
              <Button className="h-[66px] w-[139px] ml-[-2px] bg-[#f9c06a] hover:bg-[#f9c06a]/90 rounded font-['Playfair_Display',Helvetica] font-bold text-coffee text-[22px] shadow-[0px_6px_12px_#f9c06a38]">
                Suscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
