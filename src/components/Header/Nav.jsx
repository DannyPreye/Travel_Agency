import React, { useState, useEffect, useRef } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdAirplanemodeActive } from "react-icons/md";
import { RiMenu3Fill, RiCloseCircleLine } from "react-icons/ri";

const Nav = () => {
  const menuSlide = useRef();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const squareVariants = {
    visible: { y: 0, transition: { type: "spring", stiffness: 40 } },
    hidden: { y: 100 },
  };

  const [click, setClick] = useState();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <nav className="lg:flex justify-between w-screen lg:w-[90%] z-50  py-5 relative ">
      <div className="flex gap-7 justify-between items-center px-[15px] lg:px-0">
        <div className="flex items-center gap-10 ">
          <div className="flex gap-2 items-center">
            <div className="w-[40px] h-[40px] grid place-items-center rounded-full relative border-dashed border-[0.5px] p-4 border-[#fff]">
              <MdAirplanemodeActive className="rotate-45 text-xl text-[#3E86F5] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
            </div>
            <h1 className="text-[20px] text-[#ffff] font-[700]">
              Arctic Travels
            </h1>
          </div>
          <div className="lg:flex hidden gap-4">
            <h3 className="text-[14px] font-[400] text-[#fff]">About</h3>
            <h3 className="text-[14px] font-[400] text-[#fff]">Support</h3>
            <h3 className="text-[14px] font-[400] text-[#fff]">Language</h3>
          </div>
        </div>

        <RiMenu3Fill
          onClick={() => setClick(true)}
          className="block lg:hidden w-[55.29px] h-[39.57px] text-[#fff] cursor-pointer"
        />
      </div>
      <button className=" hidden py-[14px] px-[30px] lg:grid place-items-center border-2 bg-[#fff] rounded-xl w-[151px] h-[48px] text-[#3E86F5] font-[600] text-[14px]">
        Sign In
      </button>
      <motion.div
        className={`absolute h-[1187px]  filter ${
          click ? "block" : "hidden"
        } w-screen  top-0 left-0 z-[10000]`}
        animate={click ? { x: 0 } : { x: 1000 }}
        transition={{ type: "spring", stiffness: 39 }}
      >
        <div className="w-full h-full relative">
          <div
            className="w-full h-full absolute top-0 left-0"
            style={{ backdropFilter: "blur(40px)" }}
          ></div>
          <div className="w-full h-full blur-none bg-[rgba(5,41,97,0.75)] ">
            <div className="flex gap-2 items-center z-10 justify-center pt-[57px]">
              <div className="w-[40px] h-[40px] grid place-items-center rounded-full relative border-dashed border-[0.5px] p-4 border-[#fff]">
                <MdAirplanemodeActive className="rotate-45 text-xl text-[#3E86F5] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              </div>
              <h1 className="text-[20px] text-[#ffff] font-bold">
                Arctic Travels
              </h1>
            </div>
            <ul className="grid place-items-center mt-[99px] gap-[72px] text-[#fff] text-center">
              <li className="font-[500] text-[40px] leading-[60px] tracking-[-0.03em] w-[175px] h-[48px] cursor-pointer">
                About Us
              </li>
              <li className="font-[500] text-[40px] leading-[60px] tracking-[-0.03em] w-[175px] h-[48px] cursor-pointer">
                Support
              </li>
              <li className="font-[500] text-[40px] leading-[60px] tracking-[-0.03em] w-[175px] h-[48px] cursor-pointer">
                FAQS
              </li>
            </ul>
            <div className="w-full grid place-items-center mt-[231.36px]">
              <RiCloseCircleLine
                onClick={() => setClick(false)}
                className="text-[53.33px] text-white"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Nav;
