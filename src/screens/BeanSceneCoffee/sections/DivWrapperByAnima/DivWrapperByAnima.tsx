import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivWrapperByAnima = (): JSX.Element => {
  return (
    <section className="w-full py-16 px-4">
      <Card className="bg-transparent border-0">
        <CardContent className="p-0">
          <div className="flex flex-col gap-8 max-w-[927px] mx-auto">
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-bold text-white text-[54px] leading-tight">
              Get a chance to have an Amazing Opportunity
            </h2>

            <p className="[font-family:'Platypi',Helvetica] font-normal text-white text-[25px] leading-[34px]">
              We are giving you are one time opportunity to
              <br />
              experience a better opportunity
            </p>

            <div className="mt-4">
              <Button className="w-[215px] h-[55px] bg-[#f9c06a] rounded-3xl shadow-[0px_6px_12px_#f9c06a38] hover:bg-[#f9c06a]/90">
                <span className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#1e1e1e] text-lg">
                  Learn More
                </span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
