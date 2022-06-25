import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import React from "react";
import map from "../../images/map.png";
import arrow from "../../images/Arrow.png";
const Map = () => {
  return (
    // <div className=" w-screen flex flex-col items-center  lg:h-[693px] h-[1802px]">
    //   <div className="mt-[111px]">
    //     <h3 className="w-[351px] lg:w-[791px] h-[108px] text-center text-[24px] lg:text-[40px] font-[40px] leading-[135%] font-[600]">
    //       Creating the best <span className="text-[#3E86F5]">ice-cold!</span>
    //       experience you would never forget.
    //     </h3>
    //     <p className="w-fit h-[72px] text-center text-[24px] font-[400] leading-[150%] relative top-[37px]">
    //       Would you explore nature paradise in the world, find the best
    //       destination in the world with us.
    //     </p>
    //   </div>
    // </div>
    <div className="lg:h-[693px] h-[422px]  w-screen bg-[#F8F9FC] relative  ">
      <div className=" w-full relative    grid place-items-center">
        <h3 className="w-[351px]  lg:mt-[118px] mt-[128.75px] lg:w-[791px] h-[108px] text-center text-[24px] lg:text-[40px] font-[40px] leading-[135%] font-[600]">
          Creating the best
          <span className="text-[#3E86F5]"> ice-cold! </span>
          experience you would never forget.
        </h3>
        <p className="w-fit lg:w-[697px] h-[72px] text-center text-[14px] lg:text-[24px] font-[400] leading-[150%] mt-[30px] lg:relative lg:top-[37px]">
          Would you explore nature paradise in the world, find the best
          destination in the world with us.
        </p>

        <LazyLoadImage
          src={arrow}
          alt="arrow"
          className="absolute left-[50%] translate-x-[50%] lg:top-[399px] top-[380.99px] lg:h-40 h-20"
        />
        <p className="w-[454px] h-[50px] absolute top-[400px] lg:top-[455px] left-[50%] translate-x-[-50%] text-[24px] lg:text-[40px] text-center tracking-[-0.02em] leading-[60px]  font-[600]">
          View Regions available
        </p>
      </div>
      <LazyLoadImage
        src={map}
        alt="map"
        className="absolute top-[145px] lg:top-[178.69px] w-full  lg:w-[1400px] left-[40px] h-[491.8px]"
      />
    </div>
  );
};

export default Map;
