import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Nav from "./Nav";
import bgImage from "../../images/Optimized-mainBg.jpg";
import HeadBody from "./HeadBody";
import Frame from "./Frame";
import Icons from "./Icons";

const Header = () => {
  return (
    <header className=" bg-[#F8F9FC] h-[1023px]  -z-50">
      <div className="w-screen relative lg:h-[780px] h-[618px] flex flex-col items-center z-10">
        <div className="absolute w-full h-full -z-10 bg  "></div>
        <LazyLoadImage
          src={bgImage}
          alt="background"
          className="absolute top-0 left-0 w-full h-full -z-20 object-cover"
        />
        <Nav />
        <HeadBody />
        <Frame />
      </div>
      <Icons />
    </header>
  );
};

export default Header;
