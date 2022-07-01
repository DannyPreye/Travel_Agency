import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const RegionComponent = ({ img, desc }) => {
  return (
    <div className=" relative w-full lg:w-[480px] h-[1024px] ">
      <div className="absolute top-0 left-0 pic w-full h-full z-10">
        <h2 className=" w-[738px] h-[87px] absolute bottom-0 lg:top-[50%] ml-[24px] lg:ml-0 text-[#fff] left-0 font-[600] text-[32px] lg:text-[72px] lg:rotate-[-90deg]">
          {desc}
        </h2>
      </div>
      <LazyLoadImage
        src={img}
        alt="mountain resort"
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
    </div>
  );
};

export default RegionComponent;
