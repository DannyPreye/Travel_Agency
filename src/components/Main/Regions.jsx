import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import mountain from "../../images/Region/Optimized-mountain_fuji (2).jpg";
import fuji from "../../images/Region/Optimized-mountain_fuji (1).jpg";
import freeze from "../../images/Region/Optimized-mountain_fuji (3).jpg";

const Regions = () => {
  return (
    <div className="w-screen h-[1024px] mt-[73px] bg-[#fff] flex">
      <div className="relative  w-[480px] h-[1024px] ">
        <div className="absolute top-0 left-0 pic w-full h-full z-50"></div>
        <LazyLoadImage
          src={mountain}
          alt="mountain resort"
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
        <h2 className=" text-[72px]  leading-[108px] tracking-[-0.02em]  rotate-[-90deg] font-[600] z-[1000] w-[592px] h-[87px] absolute top-[600px] left-[90px]  text-[#fff]">
          Mountain Resort
        </h2>
      </div>

      <div className=" relative  w-[480px] h-[1024px] bg-[url()] ">
        <div className="absolute top-0 left-0 pic w-full h-full z-50"></div>
        <LazyLoadImage
          src={fuji}
          alt="mountain resort"
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
        <h2 className=" text-[72px]  leading-[108px] tracking-[-0.02em]  rotate-[-90deg] font-[600] z-[1000] w-[592px] h-[87px] absolute top-[600px] left-[90px]  text-[#fff]">
          Fuji Mountain
        </h2>
      </div>

      <div className="relative  w-[480px] h-[1024px] ">
        <div className="absolute top-0 left-0 pic w-full h-full z-50"></div>
        <LazyLoadImage
          src={freeze}
          alt="mountain resort"
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
        <h2 className=" text-[72px]  leading-[108px] tracking-[-0.02em]  rotate-[-90deg] font-[600] z-[1000] w-[738px] h-[87px] absolute top-[500px] left-[5px]  text-[#fff]">
          Freezing WinterLake
        </h2>
      </div>
    </div>
  );
};

export default Regions;
