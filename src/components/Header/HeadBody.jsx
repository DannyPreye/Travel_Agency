import React from "react";

const HeadBody = () => {
  return (
    <div className="w-[90%] relative top-[200px]">
      <h1 className="capitalize font-[700] text-[56px] leading-[130%] tracking-[-0.03em] text-[#fff]">
        Plan the perfect winter trip
      </h1>
      <p className="w-[529px] leading-[155%] font-[400] text-[22px] text-[#fff] tracking-[-0.01em] tex">
        Easily plan your ideal ski trip from home with the help of professionals
      </p>
      <button className=" leading-[24px] relative top-[88px] text-[#fff] w-[183px] bg-[#3E86F5] grid place-items-center h-[64px] rounded-xl text-[16px] font-[600]">
        Book Here
      </button>
    </div>
  );
};

export default HeadBody;
