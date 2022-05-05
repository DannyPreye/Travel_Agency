import React from "react";
import mountain from "../../images/Region/mountain_res.jpg";
import fuji from "../../images/Region/mountain_fuji.jpg";
import freeze from "../../images/Region/mountain_freeze.jpg";

const Regions = () => {
  return (
    <div className="w-screen h-[1024px] mt-[73px] bg-[#fff] flex">
      <div className="relative  w-[480px] h-[1024px] ">
        <div className="absolute top-0 left-0 pic w-full h-full z-50"></div>
        <img
          src={mountain}
          alt="mountain resort"
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
        <h2 className=" text-[72px]  leading-[108px] tracking-[-0.02em]  rotate-[-90deg] font-[600] z-[1000] w-[592px] h-[87px] absolute top-[600px] left-[100px]  text-[#fff]">
          Mountain Resort
        </h2>
      </div>

      <div className="relative  w-[480px] h-[1024px] ">
        <div className="absolute top-0 left-0 pic w-full h-full z-50"></div>
        <img
          src={fuji}
          alt="mountain resort"
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
        <h2 className=" text-[72px]  leading-[108px] tracking-[-0.02em]  rotate-[-90deg] font-[600] z-[1000] w-[592px] h-[87px] absolute top-[600px] left-[100px]  text-[#fff]">
          Fuji Mountain
        </h2>
      </div>

      <div className="relative  w-[480px] h-[1024px] ">
        <div className="absolute top-0 left-0 pic w-full h-full z-50"></div>
        <img
          src={freeze}
          alt="mountain resort"
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
        <h2 className=" text-[72px]  leading-[108px] tracking-[-0.02em]  rotate-[-90deg] font-[600] z-[1000] w-[738px] h-[87px] absolute top-[500px] left-[20px]  text-[#fff]">
          Freezing WinterLake
        </h2>
      </div>
    </div>
  );
};

export default Regions;
