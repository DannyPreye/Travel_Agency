import React from "react";
import { MdAirplanemodeActive } from "react-icons/md";
const Nav = () => {
  return (
    <nav className="flex justify-between w-[90%] z-50  py-5">
      <div className="flex gap-7 ">
        <div className="flex items-center gap-10 ">
          <div className="flex gap-2 items-center">
            <div className="w-14 h-14 grid place-items-center rounded-full border-dashed border-2 p-4 border-[#fff]">
              <MdAirplanemodeActive className="rotate-45 text-xl text-[#3E86F5]" />
            </div>
            <h1 className="text-[20px] text-[#ffff] font-bold">
              Arctic Travels
            </h1>
          </div>
          <div className="flex gap-4">
            <h3 className="text-[14px] font-[400] text-[#fff]">About</h3>
            <h3 className="text-[14px] font-[400] text-[#fff]">Support</h3>
            <h3 className="text-[14px] font-[400] text-[#fff]">Language</h3>
          </div>
        </div>
      </div>
      <button className=" py-[14px] px-[30px] grid place-items-center border-2 bg-[#fff] rounded-xl w-[151px] h-[48px] text-[#3E86F5] font-[600] text-[14px]">
        Sign In
      </button>
    </nav>
  );
};

export default Nav;
