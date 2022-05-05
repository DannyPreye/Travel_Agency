import React from "react";
import Arctic from "./Arctic";
import Contact from "./Contact";

const Footer = () => {
  return (
    <div className="h-[500px] flex flex-col items-center">
      <div className="flex gap-[486px]">
        <Arctic />
        <Contact />
      </div>
    </div>
  );
};

export default Footer;
