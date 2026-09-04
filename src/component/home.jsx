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
      <div className="home">
        <HeroSection />
      </div>
      <div>
        <HomeDivider />
      </div>
      <div>
        <div className="home">
          <Categories />
        </div>

        <div>
          <FlashDeal />
        </div>
        <div className="home">
          <Trading />
        </div>
        <div className="home">
          <HomeFashion />
        </div>
        <div className="home">
          <HomeSneankers />
        </div>
        <div className="home">
          <HomeTech />
        </div>
        <div className="home">
          <HomeBueaty />
        </div>
      </div>

      <div className="home">
        <EmailLongin />
      </div>
    </div>
  );
}
