import React from "react";
import Nike from "../../images/travel/nike.png";
import Apple from "../../images/travel/apple-pay.png";
import MasterCard from "../../images/travel/mastercard.png";
import Intrax from "../../images/travel/intrax-logo.png";
import Silver from "../../images/travel/silver-star.png";

const Icons = () => {
  return (
    <div className="w-[996px] h-[72px] absolute  top-[918px] left-[50%] translate-x-[-50%]  z-50 flex items-center justify-between ">
      <img src={Nike} alt="nike logo" />
      <img src={Apple} alt="applepay logo" />
      <img src={Silver} alt="silverstar logo" />
      <img src={Intrax} alt="intrax logo" />
      <img src={MasterCard} alt="mastercard logo" />
    </div>
  );
};

export default Icons;
