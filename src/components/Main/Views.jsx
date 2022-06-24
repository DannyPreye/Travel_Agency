import React from "react";
import passes from "../../images/Optimized-passes.jpg";
const Views = () => {
  return (
    <div className="h-[750px] w-screen relative">
      <div className="w-full h-full absolute top-0 left-0 z-[100] view"></div>
      <img
        src={passes}
        alt=""
        className="absolute top-0 left-0 w-full object-cover h-full "
      />
      <div className="z-[3000] absolute top-[152px] left-[120px] text-[#fff]">
        <h1 className="w-[1017px] h-[203px] text-[72px] leading-[108px] tracking-[-0.02em] font-[600]">
          View Passes We’ve Made Available For You
        </h1>
        <button className="top-[71px] relative font-[600] text-[16px] leading-[24px] w-[285px] bg-[#3E86F5] h-[72px] rounded-[10px]">
          View Passes
        </button>
      </div>
    </div>
  );
};

export default Views;
