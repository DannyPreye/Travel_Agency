import React from "react";
import island from "../../images/resort/Optimized-resort-island.jpg";
import nature from "../../images/resort/Optimized-resort-nature.jpg";
import sk from "../../images/resort/Optimized-resort-sk.jpg";
import winter from "../../images/resort/Optimized-resort-winter.jpg";

import ResortCard from "./ResortCard";

const Resort = () => {
  return (
    <div className=" h-fit lg:h-[1895px] w-screen ">
      <div className=" flex lg:flex-row flex-col gap-[32px] lg:relative lg:left-[225px] top-[85px]">
        <h1 className="lg:hidden block w-[302px] ml-[33px] lg:w-[570px] mt-[71px] lg:mt-0 h-[130px] text-[24px] lg:text-[48px] font-[600] leading-[135%] tracking-[-0.02em]">
          The best resorts to chill and relax
        </h1>
        <div className="flex flex-col items-center gap-[32px]">
          <h1 className="lg:block hidden w-[302px] lg:w-[570px] mt-[71px] lg:mt-0 h-[130px] text-[24px] lg:text-[48px] font-[600] leading-[135%] tracking-[-0.02em]">
            The best resorts to chill and relax
          </h1>
          <ResortCard img={nature} />
          {/* <div className="w-[90%] lg:w-[484px] h-[711px] rounded-[20px]  relative overflow-hidden">
            <img
              src={nature}
              alt="nature resort"
              className=" w-full h-full  absolute top-0 left-0 z-[1000]"
            />
          </div> */}
          <ResortCard img={island} />
          {/* <div className="w-[90%] lg:w-[484px] h-[711px] rounded-[20px]  relative overflow-hidden">
            <img
              src={island}
              alt="nature resort"
              className=" w-full h-full  absolute top-0 left-0 z-[1000]"
            />
          </div> */}
        </div>
        <div className="flex flex-col items-center gap-[32px]">
          <ResortCard img={winter} />
          {/* <div className="w-[90%] lg:w-[484px] h-[711px] rounded-[20px]  relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-[100] winter"></div>
            <img
              src={winter}
              alt="nature resort"
              className=" w-full h-full  absolute top-0 left-0 "
            />
            <div className="z-[1000] text-[#fff] absolute bottom-0 left-[15%] mb-[65px] w-[27px] h-[170px] ">
              <div>
                <h1 className="w-[355px] h-fit font-[600] text-[28px]  leading-[42px] mb-[16px]">
                  Winter landscape Chalet
                </h1>
                <p className="w-[98px] h-[27px] font-[500] text-[18px] leading-[27px]">
                  Cambodia
                </p>
              </div>
              <button className="w-[355px] h-[64px] mt-[28px] text-[16px] leading-[24px] font-[600] bg-[#3E86F5] rounded-[10px] grid place-items-center">
                Book Now
              </button>
            </div>
          </div> */}
          <ResortCard img={sk} />
          {/* <div className="w-[90%] lg:w-[484px] h-[711px] rounded-[20px]   relative overflow-hidden">
            <img
              src={sk}
              alt="nature resort"
              className=" w-full h-full  absolute top-0 left-0 z-[1000]"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Resort;
