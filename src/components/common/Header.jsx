import React, { useState } from "react";
import logo from "../../assets/images/svg/logo.svg";
import bibleText from "../../assets/images/svg/bible-logo.svg";
import arrowImg from "../../assets/images/svg/next-prev-img.svg";
import fingerImg from "../../assets/images/svg/fingerprints.svg";
import SideBar from "./Sidebar";
import { ThemeIcon } from "./Icons";

const Header = ({
  decreaseFontSize,
  increaseFontSize,
  toggleTheme,
  isDarkTheme,
  openSidebar,
  setOpenSidebar,
}) => {
  return (
    <>
      <div
        className={`sticky top-0   ${
          isDarkTheme ? "bg-[#E7E6E2]" : "bg-[#393F62]"
        }`}
      >
        <div
          className={`fixed z-40 duration-300 left-0 "
          }`}
        >
          <SideBar />
        </div>
        <div className="flex justify-end sm:justify-between">
          <img
            onClick={() => setOpenSidebar(true)}
            className="-mb-10 ms-5 w-14 md:w-[105px] cursor-pointer hidden sm:flex"
            src={fingerImg}
            alt="img"
          />
          <div className="flex items-end flex-col px-5 sm:px-[29px]">
            <img className=" w-[200px] md:w-[370px]" src={logo} alt="logo" />
            <img className=" w-20 md:w-[130px]" src={bibleText} alt="logo" />
          </div>
        </div>
        <h2
          className={`font-normal text-2xl sm:text-3xl lg:text-[38px]  w-full text-center py-3 md:py-5 capitalize mt-3 ${
            !isDarkTheme
              ? "text-[#CCC1AF] bg-[#595B72]"
              : "text-[#393F62] bg-[#CCBFAB38]"
          }`}
        >
          MATTHEW
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-4 relative gap-2.5">
          <div className="flex justify-between sm:justify-end w-full gap-3 sm:absolute right-[34px] px-5">
            <span
              onClick={toggleTheme}
              className="flex justify-center items-center me-4 cursor-pointer"
            >
              <ThemeIcon />
            </span>
            <button
              onClick={increaseFontSize}
              className={` text-3xl border  rounded-lg sm:rounded-xl w-8 h-8 sm:w-11 sm:h-11 flex justify-center items-center  ${
                isDarkTheme
                  ? "text-[#740000] border-[#000]"
                  : "text-[#CCBFAB] border-[#CCBFAB]"
              }`}
            >
              +
            </button>
            <button
              onClick={decreaseFontSize}
              className={` text-3xl border  rounded-lg sm:rounded-xl w-8 h-8 sm:w-11 sm:h-11 flex justify-center items-center  ${
                isDarkTheme
                  ? "text-[#740000] border-[#000]"
                  : "text-[#CCBFAB] border-[#CCBFAB]"
              }`}
            >
              -
            </button>
          </div>
          <div className="flex items-center justify-center gap-3 z-[1] pb-4">
            <img className="max-sm:w-9 max-sm:h-9" src={arrowImg} alt="ARROW" />
            <h2
              className={`text-xl md:text-[26px] text-[#740000]  ${
                !isDarkTheme
                  ? "text-[#CCC1AF] bg-[#595B72]"
                  : "text-[#393F62] bg-[#CCBFAB38]"
              }`}
            >
              Chapter 1
            </h2>
            <img
              className="-scale-100 max-sm:w-9 max-sm:h-9"
              src={arrowImg}
              alt="ARROW"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
