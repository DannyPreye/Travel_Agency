import React from "react";
import { motion } from "framer-motion";

const ResortCard = ({ img }) => {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 60 }}
      className="w-[90%] lg:w-[484px] h-[711px] rounded-[20px]  relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full z-[100] winter"></div>
      <img
        src={img}
        alt="nature resort"
        className=" w-full h-full  absolute top-0 left-0 "
      />
      <div className="z-[1000] text-[#fff] absolute bottom-0 left-[15%] mb-[65px] w-full  lg:w-[27px] h-[170px] ">
        <div>
          <h1 className="w-[355px] h-fit font-[600] text-[24px] lg:text-[28px]  leading-[42px] mb-[16px]">
            Winter landscape Chalet
          </h1>
          <p className="w-[98px] h-[27px] font-[500] text-[18px] leading-[27px]">
            Cambodia
          </p>
        </div>
        <button className="w-[80%] lg:w-[355px] h-[64px] mt-[28px] text-[16px] leading-[24px] font-[600] bg-[#3E86F5] rounded-[10px] grid place-items-center">
          Book Now
        </button>
      </div>
    </motion.div>
  );
};

export default ResortCard;
