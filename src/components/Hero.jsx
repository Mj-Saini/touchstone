import React from "react";
import logo from "../assets/images/svg/logo.svg";
import handImg from "../assets/images/png/hand-img.png";
import studyTool from "../assets/images/svg/study-tool-img.svg";
import computerImg from "../assets/images/svg/computer-img.svg";
import resources from "../assets/images/svg/resources-img.svg";
import { heroData } from "./common/Helper";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="pt-5">
      <div className="flex flex-col items-center gap-4">
        <img
          className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[574px]"
          src={logo}
          alt="logo"
        />
        <h2 className="font-normal text-2xl sm:text-3xl lg:text-[38px] bg-[#CCBFAB38] w-full text-center py-6 capitalize">
          Empowering the Saints
        </h2>
        <Link
          to="/macbook-air"
          className="font-normal text-xl md:text-2xl lg:text-[32px] text-[#32312D] capitalize py-2 px-[22px] border border-black shadow-drop_shadow rounded-[20px] bg-[#CCBFABBF] my-6 lg:my-10"
        >
          Read The Bible
        </Link>
        <div className="bg-hero-bg bg-cover bg-center bg-no-repeat">
          <div className="flex flex-col lg:flex-row px-4 sm:px-10 lg:ps-[139px] lg:pe-10 sm:pt-9 pb-14">
            <div className="w-full lg:w-[191px] md:pe-2.5">
              <div className="bg-[#393F62] rounded-2xl md:rounded-[41px] overflow-auto flex flex-row lg:flex-col justify-center gap-2 md:gap-4 items-center md:px-4 py-4 lg:py-8">
                <img
                  className="w-14 rounded-[40px] sm:w-20 md:w-[156px]"
                  src={handImg}
                  alt="img"
                />
                <img
                  className="w-14 rounded-[40px] sm:w-20 md:w-[156px]"
                  src={studyTool}
                  alt="img"
                />
                <img
                  className="w-14 rounded-[40px] sm:w-20 md:w-[156px]"
                  src={computerImg}
                  alt="img"
                />
                <img
                  className="w-14 rounded-[40px] sm:w-20 md:w-[156px]"
                  src={resources}
                  alt="img"
                />
              </div>
            </div>
            <div className="wf lg:w-10/12 md:ps-2.5 mt-6 lg:mt-0">
              <div className="flex flex-col justify-center h-full">
                {heroData.map((items, index) => (
                  <div
                    key={index}
                    className={`flex flex-col justify-center gap-4 ${
                      index === 0 ? "" : "mt-6 xl:mt-16"
                    }`}
                  >
                    <h2 className="ff_vardana_bold text-xl md:text-3xl xl:text-4xl text-[#740000]">
                      {items.heading}
                    </h2>
                    <p className="text-base md:text-2xl xl:text-[28px] text-black w-full">
                      {items.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
