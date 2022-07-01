import React from "react";
import Arctic from "./Arctic";
import Contact from "./Contact";
import Last from "./Last";

const Footer = () => {
  return (
    <div className="h-[965px] lg:h-[500px] flex flex-col items-center">
      <div className="flex lg:flex-row flex-col gap-[72px] lg:gap-[486px]">
        <Arctic />
        <Contact />
      </div>
      <Last />
    </div>
  );
};

export default Footer;
