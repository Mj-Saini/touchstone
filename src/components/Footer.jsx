import React from "react";
import logo from "../assets/images/svg/footer-logo.svg";
import fingerPrint from "../assets/images/svg/fingerprints.svg";

const Footer = () => {
  return (
    <div className="bg-[#CCBFAB6E]  py-5">
      <div className="flex flex-col items-center">
        <img
          className="w-[200px] sm:w-[300px] md:w-[346px] "
          src={logo}
          alt="logo"
        />
        <h2 className="font-normal text-2xl sm:text-3xl lg:text-[38px]  w-full text-center py-4 capitalize mb-2">
          Empowering the Saints
        </h2>
        <div className="flex flex-wrap justify-center lg:justify-between w-full lg:border border-black px-6  md:px-[51px]">
          <div className="w-full sm:w-1/3 lg:w-4/12 lg:pe-2 py-3 sm:py-9">
            <div className="flex flex-col justify-center  gap-2 sm:gap-4 lg:gap-10">
              <h2 className="ff_vardana_bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#740000] uppercase">
                LOCATION
              </h2>
              <p className="ff_vardana_bold text-lg md:text-2xl lg:text-[28px]">
                123 Hypothetical street New Braunfels, TX 123456
              </p>
            </div>
          </div>
          <div className="w-full sm:w-2/3 lg:w-6/12 lg:px-2">
            <div className="flex flex-col gap-2 sm:gap-4 lg:gap-10 lg:border-x border-black sm:px-12 h-full  py-3 sm:py-9">
              <h2 className="ff_vardana_bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#740000] uppercase">
                CONTACT
              </h2>
              <p>
                <a
                  href="mailto:contact@touchstone.com"
                  className="ff_vardana_bold text-lg md:text-2xl lg:text-[28px] whitespace-wrap"
                >
                  contact@touchstone.com
                </a>{" "}
                <a
                  href="tel:(555) 555-5555"
                  className="ff_vardana_bold text-lg md:text-2xl lg:text-[28px]"
                >
                  (555) 555-5555
                </a>
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-2/12 px-2 mt-10 ">
            <div className="flex justify-center items-center h-full">
              {" "}
              <img src={fingerPrint} alt="print" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
