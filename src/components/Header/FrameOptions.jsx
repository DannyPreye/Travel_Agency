import React from "react";

const FrameOptions = ({ FirstIcon, SecondIcon, mainWord, subWord, red }) => {
  return (
    <div className=" w-full lg:w-fit lg:mt-0  relative ">
      {/* ********************************* Location *********************************************  */}
      <div className="flex  lg:items-center justify-start relative">
        <div className="w-[54.68px] h-[56px] rounded-full grid place-items-center lg:block lg:bg-transparent lg:rounded-none bg-[#ECF3FE] lg:h-fit lg:w-fit">
          <FirstIcon
            className={`text-[#3E86F5] w-[20.51px] h-[25.67px] lg:w-[18px] lg:h-[22px]`}
          />
        </div>
        <div>
          <h4 className=" tracking-[0.08em] mx-[12px] leading-[24px] text-[#929191] w-fit h-[24px] text-[16px] font-[500]">
            {mainWord}
          </h4>
          <div className="flex lg:hidden items-center mt-[12px] gap-2">
            <h4 className="w-fit h-[27px] text-[18px]  mx-[12px] font-[500] text-[#000] leading-[24px]">
              {subWord}
            </h4>
            <SecondIcon className="h-[12px] mx-[4px] absolute right-0  " />
          </div>
        </div>
      </div>
      <div className="lg:flex  hidden items-center mt-[12px] gap-2 w-fit ">
        <h4 className="h-[27px] text-[18px] font-[500] text-[#000] leading-[24px]">
          {subWord}
        </h4>
        <SecondIcon className="w-[12px] h-[12px] mx-[4px] relative -left-3 " />
      </div>
    </div>
  );
};

export default FrameOptions;
