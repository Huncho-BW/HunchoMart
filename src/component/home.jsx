import React from "react";
import HeroSection from "../pages/hero";
import Categories from "../pages/Categories";
import EmailLongin from "../pages/emailLogin";
import FlashDeal from "../pages/FlashDeal";
import Trading from "../pages/Trading";
import HomeBueaty from "../pages/HomeBeauty";
import HomeFashion from "../pages/HomeFashion";

import HomeSneankers from "../pages/HomeSneakers";
import HomeTech from "../pages/HomeTech";
import HomeDivider from "../pages/HomeDivider";
export default function Home() {
  return (
    <div className=" ">
      <HeroSection />
      <HomeDivider />
      <Categories />
      <FlashDeal />
      <Trading />
      <HomeFashion />
      <HomeSneankers />
      <HomeTech />
      <HomeBueaty />
      <div className="p-[40px]">
        <EmailLongin />
      </div>
    </div>
  );
}
