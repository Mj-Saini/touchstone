import React from "react";
import logo from "../../assets/images/svg/logo.svg";
import bibleText from "../../assets/images/svg/bible-logo.svg";
import arrowImg from "../../assets/images/svg/next-prev-img.svg";

const Header = () => {
  return (
    <div className="">
      <div>
        <div className="flex items-end flex-col px-[29px]">
          <img src={logo} alt="logo" />
          <img src={bibleText} alt="logo" />
        </div>
        <h2 className="font-normal text-2xl sm:text-3xl lg:text-[38px] bg-[#CCBFAB38] w-full text-center py-6 capitalize mt-[22px]">
          MATTHEW
        </h2>
        <div className="flex justify-center items-center mt-8 relative gap-2.5">
          <div className="flex gap-3 absolute right-[34px] ">
            <button className="text-[#740000] text-3xl border border-black rounded-xl w-11 h-11 flex justify-center items-center">
              +
            </button>
            <button className="text-[#740000] text-3xl border border-black rounded-xl w-11 h-11 flex justify-center items-center">
              -
            </button>
          </div>
          <img src={arrowImg} alt="ARROW" />
          <h2 className="text-xl md:text-[26px] text-[#740000]">Chapter 1</h2>
          <img className="-scale-100" src={arrowImg} alt="ARROW" />
        </div>
      </div>
    </div>
  );
};

export default Header;
