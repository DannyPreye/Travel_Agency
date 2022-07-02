import React from "react";
import { motion } from "framer-motion";
const HeadBody = () => {
  return (
    <motion.div
      className="w-full relative top-[200px] text-center grid place-items-center"
      animate={{ y: 0 }}
      initial={{ y: 100 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <h1 className="capitalize font-[700]  text-[28px] leading-[46px]  lg:text-[56px] lg:leading-[130%] lg:tracking-[-0.03em] text-[#fff]">
        Plan the perfect winter trip
      </h1>
      <p className="w-[324px] lg:w-[529px] leading-[155%] font-[400]  text-[14px] lg:text-[22px] text-[#fff] tracking-[-0.01em] tex">
        Easily plan your ideal ski trip from home with the help of professionals
      </p>
    </motion.div>
  );
};

export default HeadBody;
