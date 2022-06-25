import React from "react";
import Nike from "../../images/travel/nike.png";
import Apple from "../../images/travel/apple-pay.png";
import MasterCard from "../../images/travel/mastercard.png";
import Intrax from "../../images/travel/intrax-logo.png";
import Silver from "../../images/travel/silver-star.png";

const Icons = () => {
  return (
    <div className="w-[90%] lg:w-[996px] h-[72px] absolute mt-[111px] lg:mt-0 top-[918px] left-[50%] translate-x-[-50%]  z-10 flex items-center justify-between ">
      <img src={Nike} alt="nike logo" className="lg:block hidden" />
      <img src={Apple} alt="applepay logo " className="lg:block hidden" />
      <img src={Silver} alt="silverstar logo" className="lg:block " />
      <img src={Intrax} alt="intrax logo" className="lg:block" />
      <img src={MasterCard} alt="mastercard logo" className="lg:block" />
    </div>
  );
};

export default Icons;
