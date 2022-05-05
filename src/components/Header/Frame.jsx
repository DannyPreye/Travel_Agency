import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsCalendar, BsCalendar4, BsPerson } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { RiPlaneLine } from "react-icons/ri";

const Frame = () => {
  return (
    <div className="absolute bg-[#fff] w-[1200px] grid place-items-center h-[140px] top-[714px] left-[49%] translate-x-[-50%] rounded-[16px] frame">
      <div className="w-[90%] justify-around  flex items-center">
        <div className="w-fit">
          {/* ********************************* Location *********************************************  */}
          <div className="flex items-center ">
            <HiOutlineLocationMarker className="w-[18px] h-[22px]" />
            <h4 className="tracking-[0.08em] mx-[12px] leading-[24px] text-[#929191] w-[90px] h-[24px] text-[16px] font-[500]">
              LOCATION
            </h4>
          </div>
          <div className="flex items-center mt-[12px] gap-2">
            <h4 className="w-[68px] h-[27px] text-[18px] font-[500] text-[#000] leading-[24px]">
              Iceland
            </h4>
            <FaChevronDown className="w-[12px] h-[12px] mx-[4px] relative -left-3" />
          </div>
        </div>
        {/* ********************************* Person *********************************************  */}
        <div className="w-fit">
          <div className="flex items-center gap-2">
            <BsPerson className="w-[18px] h-[22px]" />
            <h4 className="tracking-[0.08em] mx-[12px] leading-[24px] text-[#929191] w-[90px] h-[24px] text-[16px] font-[500]">
              PERSONS
            </h4>
          </div>
          <div className="flex items-center mt-[12px]">
            <h4 className="w-[88px] h-[27px] text-[18px] font-[500] text-[#000] leading-[24px]">
              4 Persons
            </h4>
            <FaChevronDown className="w-[12px] h-[12px] mx-[4px]" />
          </div>
        </div>
        {/* ********************************* Check In *********************************************  */}
        <div className="w-fit">
          <div className="flex items-center gap-2">
            <BsCalendar4 className="w-[18px] h-[22px] text-[#CC0024]" />
            <h4 className="tracking-[0.08em] mx-[12px] leading-[24px] text-[#929191] w-[90px] h-[24px] text-[16px] font-[500]">
              CHECK IN
            </h4>
          </div>
          <div className="flex items-center mt-[12px]">
            <h4 className="w-[146px] h-[27px] text-[18px] font-[500] text-[#000] leading-[24px]">
              12 January 2022
            </h4>
            <FaChevronDown className="w-[12px] h-[12px] mx-[4px]" />
          </div>
        </div>
        {/* ********************************* Check Out *********************************************  */}
        <div className="w-fit">
          <div className="flex items-center gap-2">
            <BsCalendar4 className="w-[18px] h-[22px] text-[#CC0024]" />
            <h4 className="tracking-[0.08em] mx-[12px] leading-[24px] text-[#929191] w-[102px] h-[24px] text-[16px] font-[500]">
              CHECK OUT
            </h4>
          </div>
          <div className="flex items-center mt-[12px]">
            <h4 className="w-[146px] h-[27px] text-[18px] font-[500] text-[#000] leading-[24px]">
              12 January 2022
            </h4>
            <FaChevronDown className="w-[12px] h-[12px] mx-[4px]" />
          </div>
        </div>
        <button className="w-[213px] h-[64px] bg-[#3E86F5] rounded-xl flex  items-center justify-center gap-2 text-[#fff] text-[16px] leading-[24px] font-[600]">
          Book Trip
          <RiPlaneLine className="rotate-[90deg]" />
        </button>
      </div>
    </div>
  );
};

export default Frame;
