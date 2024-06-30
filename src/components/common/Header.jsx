import React from "react";
import logo from "../../assets/images/svg/logo.svg";
import bibleText from "../../assets/images/svg/bible-logo.svg";
import arrowImg from "../../assets/images/svg/next-prev-img.svg";

const Header = () => {
  return (
    <div className="">
      <div>
        <div className="flex items-end flex-col px-5 sm:px-[29px]">
          <img className=" w-[200px] md:w-[370px]" src={logo} alt="logo" />
          <img className=" w-20 md:w-[130px]" src={bibleText} alt="logo" />
        </div>
        <h2 className="font-normal text-2xl sm:text-3xl lg:text-[38px] bg-[#CCBFAB38] w-full text-center py-6 capitalize mt-[22px]">
          MATTHEW
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-8 relative gap-2.5">
          <div className="flex justify-end w-full gap-3 sm:absolute right-[34px] px-5">
            <button className="text-[#740000] text-3xl border border-black rounded-lg sm:rounded-xl w-8 h-8 sm:w-11 sm:h-11 flex justify-center items-center">
              +
            </button>
            <button className="text-[#740000] text-3xl border border-black rounded-lg sm:rounded-xl w-8 h-8 sm:w-11 sm:h-11 flex justify-center items-center">
              -
            </button>
          </div>
          <div className="flex items-center justify-center gap-3 z-[1]">
            <img className="max-sm:w-9 max-sm:h-9" src={arrowImg} alt="ARROW" />
            <h2 className="text-xl md:text-[26px] text-[#740000]">Chapter 1</h2>
            <img
              className="-scale-100 max-sm:w-9 max-sm:h-9"
              src={arrowImg}
              alt="ARROW"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
