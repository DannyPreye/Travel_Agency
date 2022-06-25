import React from "react";

// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

import RegionComponent from "./RegionComponent";

import mountain from "../../images/Region/Optimized-mountain_fuji (2).jpg";
import fuji from "../../images/Region/Optimized-mountain_fuji (1).jpg";
import freeze from "../../images/Region/Optimized-mountain_fuji (3).jpg";

const Regions = () => {
  return (
    <div className="w-screen h-[1024px] mt-[73px] bg-[#fff] flex lg:flex-row flex-col">
      <RegionComponent img={mountain} desc="Mountain Resort" />
      <RegionComponent img={fuji} desc="Fuji Mountain" />
      <RegionComponent img={freeze} desc="Freezing WinterLake" />
    </div>
  );
};

export default Regions;
