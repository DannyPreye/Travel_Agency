import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsCalendar, BsCalendar4, BsPerson } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { RiPlaneLine } from "react-icons/ri";
import FrameOptions from "./FrameOptions";

const Frame = () => {
  return (
    <div className="absolute bg-[#fff] w-[90%] h-[525px] lg:w-[1200px] grid place-items-center lg:h-[140px] top-[467px] lg:top-[714px] left-[49%] translate-x-[-50%] rounded-[16px] frame">
      <div className="w-[90%] p-10 gap-[27px] lg:gap-[50px] lg:justify-around  flex lg:flex-row flex-col h-full items-center relative">
        <FrameOptions
          FirstIcon={HiOutlineLocationMarker}
          SecondIcon={FaChevronDown}
          mainWord="LOCATION"
          subWord="Iceland"
        />
        <FrameOptions
          FirstIcon={BsPerson}
          SecondIcon={FaChevronDown}
          mainWord="PERSONS"
          subWord="4 Persons"
        />
        <FrameOptions
          FirstIcon={BsCalendar4}
          SecondIcon={FaChevronDown}
          mainWord="CHECK IN"
          subWord=" 12 January 2022"
          check={true}
        />
        <FrameOptions
          FirstIcon={BsCalendar4}
          SecondIcon={FaChevronDown}
          mainWord="CHECK OUT"
          subWord=" 12 January 2022"
          check={true}
        />

        <div className="w-full flex items-center justify-center">
          <button className=" w-[332px] mt-[6px] lg:w-[213px] h-[64px] bg-[#3E86F5] rounded-xl flex  items-center justify-center gap-2 text-[#fff] text-[16px] leading-[24px] font-[600]">
            Book Trip
            <RiPlaneLine className="rotate-[90deg]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Frame;
