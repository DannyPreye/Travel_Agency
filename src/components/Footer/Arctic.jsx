import React from "react";
import { MdAirplanemodeActive } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import facebook from "../../images/social/facebook.png";
import twitter from "../../images/social/Vector.png";

const Arctic = () => {
  return (
    <div>
      <div className="mt-[80px]  flex flex-col gap-2">
        <div className="w-[40px] h-[40px] grid place-items-center rounded-full relative border-dashed border-[0.5px] p-4 border-[#bebebe]">
          <MdAirplanemodeActive className="rotate-45 text-xl text-[#3E86F5] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
        </div>
        <div className="grid gap-2">
          <h1 className="w-[122px] h-[26px] font-[600] leading-[30px] text-[20px] tracking-[-0.02em]">
            Artic Travels
          </h1>
          <p className="w-[217.63px] h-[40px] font-[500] text-[12px] leading-[170%]">
            Book your trip in minutes, get full control for much longer.
          </p>
        </div>
        <div className="flex gap-[25px]">
          <div className="w-[41.69px] h-[41px] border-[0.3px] grid place-items-center border-[#C1C0C0] rounded-full">
            <img src={facebook} alt="" />
          </div>
          <div className="w-[41.69px] h-[41px] border-[0.3px] grid place-items-center border-[#C1C0C0] rounded-full">
            <img src={twitter} alt="" />
          </div>
          <div className="w-[41.69px] h-[41px] border-[0.3px] grid place-items-center border-[#C1C0C0] rounded-full">
            <FaInstagramSquare className="text-[#3E86F5]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arctic;
