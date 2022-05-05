import React from "react";
import map from "../../images/map.png";
import arrow from "../../images/Arrow.png";
const Map = () => {
  return (
    <div className="h-[693px] bg-[#F8F9FC] relative  ">
      <img
        src={map}
        alt="map"
        className="absolute top-[178.69px] w-[1400px] left-[40px] h-[491.8px]"
      />
      <div className=" w-fit relative top-[118px] left-[50%] translate-x-[-50%]">
        <h3 className="w-[791px] h-[108px] text-center  text-[40px] font-[40px] leading-[135%] font-[600]">
          Creating the best <span className="text-[#3E86F5]">ice-cold!</span>{" "}
          experience you would never forget.
        </h3>
        <p className="w-[697px] h-[72px] text-center text-[24px] font-[400] leading-[150%] relative top-[37px]">
          Would you explore nature paradise in the world, find the best
          destination in the world with us.
        </p>

        <img
          src={arrow}
          alt="arrow"
          className="absolute left-[50%] translate-x-[50%] top-[345px]"
        />
        <p className="w-[454px] h-[50px] absolute top-[455px] left-[50%] translate-x-[-50%] text-[40px] text-center tracking-[-0.02em] leading-[60px]  font-[600]">
          View Regions available
        </p>
      </div>
    </div>
  );
};

export default Map;
