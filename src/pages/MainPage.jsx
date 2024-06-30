import React from "react";
import Hero from "../components/Hero";
import TouchstoneStudy from "../components/TouchstoneStudy";
import Discover from "../components/Discover";

const MainPage = () => {
  return (
    <div className="bg-[#E7E6E2]">
      <Hero />
      <TouchstoneStudy />
      <Discover />
    </div>
  );
};

export default MainPage;
