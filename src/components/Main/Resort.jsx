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
          <ResortCard img={island} />
        </div>
        <div className="flex flex-col items-center gap-[32px]">
          <ResortCard img={winter} />
          <ResortCard img={sk} />
        </div>
      </div>
    </div>
  );
};

export default Resort;
