import React from "react";
import Map from "./Map";
import Regions from "./Regions";
import Resort from "./Resort";
import Views from "./Views";

const Main = () => {
  return (
    <main className="bg-[#F8F9FC]">
      <Map />
      <Regions />
      <Resort />
      <Views />
    </main>
  );
};

export default Main;
