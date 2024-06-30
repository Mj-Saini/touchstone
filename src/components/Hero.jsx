import React from "react";
import logo from "../assets/images/svg/logo.svg";
import handImg from "../assets/images/png/hand-img.png";
import { heroData } from "./common/Helper";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <img src={logo} alt="logo" />
        <h2 className="font-normal text-2xl sm:text-3xl lg:text-[38px] bg-[#CCBFAB38] w-full text-center py-6 capitalize">
          Empowering the Saints
        </h2>
        <button className="font-normal text-xl md:text-2xl lg:text-[32px] text-[#32312D] capitalize py-2 px-[22px] border border-black shadow-drop_shadow rounded-[20px] bg-[#CCBFABBF] my-10">
          Read The Bible
        </button>
        <div className="bg-hero-bg bg-cover bg-center bg-no-repeat">
          <div className="flex flex-col lg:flex-row px-4 sm:px-10 lg:ps-[139px] lg:pe-10 pt-9 pb-14">
            <div className="w-full lg:w-[191px] md:pe-2.5">
              <div className="bg-[#393F62] rounded-[41px] overflow-auto flex flex-row lg:flex-col justify-center gap-4 items-center px-4 py-4 lg:py-8">
                <img
                  className="w-16 sm:w-20 md:w-[156px]"
                  src={handImg}
                  alt="img"
                />
                <img
                  className="w-16 sm:w-20 md:w-[156px]"
                  src={handImg}
                  alt="img"
                />
                <img
                  className="w-16 sm:w-20 md:w-[156px]"
                  src={handImg}
                  alt="img"
                />
                <img
                  className="w-16 sm:w-20 md:w-[156px]"
                  src={handImg}
                  alt="img"
                />
              </div>
            </div>
            <div className="w-10/12 md:ps-2.5 mt-6 lg:mt-0">
              <div className="flex flex-col justify-center h-full">
                {heroData.map((items, index) => (
                  <div
                    key={index}
                    className={`flex flex-col justify-center gap-4 ${
                      index === 0 ? "" : "mt-6 xl:mt-16"
                    }`}
                  >
                    <h2 className="ff_vardana_bold text-2xl md:text-3xl xl:text-4xl text-[#740000]">
                      {items.heading}
                    </h2>
                    <p className="font-bold ff_vardana_bold text-xl md:text-2xl xl:text-[28px] text-black">
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
