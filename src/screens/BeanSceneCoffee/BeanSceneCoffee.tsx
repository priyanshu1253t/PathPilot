import React from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { DivByAnima } from "./sections/DivByAnima";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima";
import { GroupByAnima } from "./sections/GroupByAnima";
import { GroupWrapperByAnima } from "./sections/GroupWrapperByAnima";
import { OverlapWrapperByAnima } from "./sections/OverlapWrapperByAnima/OverlapWrapperByAnima";
import { SectionComponentNodeByAnima } from "./sections/SectionComponentNodeByAnima/SectionComponentNodeByAnima";

export const BeanSceneCoffee = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Dashboard", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  // Footer sections data
  const aboutLinks = ["Menu", "Features", "News & Blogs", "Help & Supports"];
  const companyLinks = ["How we work", "Terms of service", "Pricing", "FAQ"];

  return (
    <div className="bg-black flex flex-col items-center w-full">
      <div className="bg-black w-full max-w-[1377px] relative">
        {/* Header/Navigation */}
        <header className="w-full flex items-center justify-between px-6 py-4">
          <div className="[font-family:'Cinzel',Helvetica] font-normal text-[35px] tracking-[0]">
            <span className="text-white">Path</span>
            <span className="text-[#fcb346]">Pilot</span>
          </div>

          <NavigationMenu>
            <NavigationMenuList className="flex gap-8">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={item.href}
                    className="[font-family:'Platypi',Helvetica] font-medium text-white text-base tracking-[0.16px]"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </header>

        {/* Hero Section */}
        <section className="w-full flex flex-col md:flex-row mt-12">
          <div className="flex-1">
            <OverlapWrapperByAnima />
          </div>
          <div className="flex-1">
            <div className="relative w-[428px] h-[676px]">
              <img
                className="w-[299px] h-[552px] relative"
                alt="Image"
                src="/image-24.png"
              />
              <img
                className="w-[301px] h-[676px] absolute top-0 right-0 object-cover"
                alt="Img"
                src="/6d16bbda9edcd672c4f2ecda9e33038ed4eab81d-1.png"
              />
            </div>
          </div>
        </section>

        {/* Content Section 1 */}
        <section className="w-full mt-20">
          <div className="w-full">
            <GroupWrapperByAnima />
            <div className="relative">
              <img
                className="w-[590px] h-[344px] object-cover"
                alt="Oip picsart"
                src="/oip-picsart-aiimageenhancer-now-1.png"
              />
            </div>
          </div>
        </section>

        {/* Content Section 2 */}
        <section className="w-full mt-20">
          <SectionComponentNodeByAnima />
        </section>

        {/* Mentor Section */}
        <section className="w-full mt-20 flex flex-col md:flex-row gap-8 px-6">
          <div className="flex-1 bg-[#ffbf00db] rounded-[17px] p-6 flex flex-col items-center">
            <div className="relative w-[332px]">
              <div className="relative">
                <img
                  className="w-[170px] h-[453px] mx-auto"
                  alt="Body"
                  src="/body.png"
                />
                <img
                  className="w-[111px] h-[37px] mx-auto mt-2"
                  alt="Shoes btm"
                  src="/shoes-btm.png"
                />
                <img
                  className="w-28 h-[39px] mx-auto"
                  alt="Shoes"
                  src="/shoes.png"
                />
                <img
                  className="w-[98px] h-[60px] mx-auto"
                  alt="Socks"
                  src="/socks.png"
                />
                <img
                  className="w-[117px] h-[132px] mx-auto"
                  alt="Pants"
                  src="/pants.png"
                />
                <img
                  className="w-[175px] h-[148px] mx-auto"
                  alt="T shirt"
                  src="/t-shirt.png"
                />

                <div className="w-[95px] h-[133px] mx-auto rotate-[-11.58deg]">
                  <div className="relative">
                    <img
                      className="w-[121px] h-[149px] rotate-[11.58deg]"
                      alt="Base"
                      src="/base.png"
                    />
                    <img
                      className="w-[87px] h-[90px] rotate-[11.58deg]"
                      alt="Charts"
                      src="/charts.png"
                    />
                    <img
                      className="w-4 h-[46px] rotate-[11.58deg]"
                      alt="Chart color"
                      src="/chart-color-2.png"
                    />
                    <img
                      className="w-[25px] h-[90px] rotate-[11.58deg]"
                      alt="Chart color"
                      src="/chart-color-1.png"
                    />
                    <img
                      className="w-[72px] h-[18px] rotate-[11.58deg]"
                      alt="Text"
                      src="/text.png"
                    />
                  </div>
                </div>

                <div className="w-[231px] h-[233px] mx-auto rotate-[47.97deg]">
                  <div className="relative rotate-[75.05deg]">
                    <img
                      className="w-[39px] h-[39px] rotate-[-75.05deg]"
                      alt="Eraser"
                      src="/eraser.png"
                    />
                    <img
                      className="w-[235px] h-[228px] rotate-[-75.05deg]"
                      alt="Base"
                      src="/base-1.png"
                    />
                    <img
                      className="w-10 h-[39px] rotate-[-75.05deg]"
                      alt="Top"
                      src="/top.png"
                    />
                  </div>
                </div>

                <img
                  className="w-[137px] h-28 mx-auto"
                  alt="Arms"
                  src="/arms.png"
                />

                <div className="w-[68px] h-[66px] mx-auto">
                  <img className="w-4 h-[5px]" alt="Mouth" src="/mouth.png" />
                  <div>
                    <img
                      className="w-[19px] h-[7px]"
                      alt="Eyes"
                      src="/eyes.png"
                    />
                    <img
                      className="w-[27px] h-2.5"
                      alt="Eyebrows"
                      src="/eyebrows.png"
                    />
                    <img
                      className="w-[67px] h-[35px]"
                      alt="Hair"
                      src="/hair.png"
                    />
                    <img
                      className="w-[66px] h-[29px]"
                      alt="Glasses"
                      src="/glasses.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            <GroupByAnima />
          </div>

          <div className="flex-1 bg-[#ffbf00db] rounded-[17px] p-6 flex flex-col items-center">
            <div className="[font-family:'Playfair_Display',Helvetica] font-bold text-white text-[32px] text-center tracking-[0] mb-6">
              For Mentor
            </div>

            <img
              className="w-full max-w-[456px] h-auto object-cover"
              alt="Image"
              src="/image-48.png"
            />

            <Button className="mt-8 bg-[#f9c06a] text-[#1e1e1e] hover:bg-[#f9c06a]/90 rounded-[32px] shadow-[0px_6px_12px_#f9c06a38]">
              <span className="[font-family:'Playfair_Display',Helvetica] font-bold text-[19px]">
                Sign In
              </span>
            </Button>
          </div>
        </section>

        {/* Additional Content */}
        <section className="w-full mt-20">
          <DivWrapperByAnima />
        </section>

        {/* More Content */}
        <section className="w-full mt-20">
          <DivByAnima />
        </section>

        {/* Footer */}
        <footer className="w-full mt-20 px-6 pb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="[font-family:'Playfair_Display',Helvetica] font-bold text-white text-[26px] mb-6">
              About
            </h3>
            <ul className="[font-family:'Platypi',Helvetica] font-normal text-white text-lg space-y-2">
              {aboutLinks.map((link, index) => (
                <li key={index} className="leading-[42px]">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="[font-family:'Playfair_Display',Helvetica] font-bold text-white text-[26px] mb-6">
              Company
            </h3>
            <ul className="[font-family:'Platypi',Helvetica] font-normal text-white text-lg space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index} className="leading-[42px]">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="[font-family:'Playfair_Display',Helvetica] font-bold text-white text-[26px] mb-6">
              Contact Us
            </h3>
            <div className="[font-family:'Platypi',Helvetica] font-normal text-white text-lg space-y-4">
              <p>Lloyd College of Engineering</p>
              <p>+91 9654839097</p>
              <p>
                <span className="[font-family:'Platypi',Helvetica]">
                  rishabhgiri054
                </span>
                <span className="[font-family:'Playfair_Display',Helvetica]">
                  @gmail.com
                </span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
