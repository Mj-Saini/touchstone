import React from "react";
import Hero from "../components/Hero";
import TouchstoneStudy from "../components/TouchstoneStudy";
import Discover from "../components/Discover";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div className="bg-[#E7E6E2] overflow-hidden pb-6">
      <Hero />
      <TouchstoneStudy />
      <Discover />
      <Footer />
    </div>
  );
};

export default MainPage;
