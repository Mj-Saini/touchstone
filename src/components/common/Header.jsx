import React, { useState } from "react";
import logo from "../../assets/images/svg/logo.svg";
import bibleText from "../../assets/images/svg/bible-logo.svg";
import arrowImg from "../../assets/images/svg/next-prev-img.svg";
import fingerImg from "../../assets/images/svg/fingerprints.svg";
import SideBar from "./Sidebar";
import { ThemeIcon } from "./Icons";
import StylingSideBar from "../StylingSideBar";
import SystemSideBar from "../SystemSideBar";

const Header = ({
  decreaseFontSize,
  increaseFontSize,
  toggleTheme,
  isDarkTheme,
  openSidebar,
  setOpenSidebar,
}) => {
  const [openStylingSidebar, setOpenStylingSidebar] = useState(false);

  return (
    <>
      <div
        className={`sticky top-0   ${
          isDarkTheme ? "bg-white" : "bg-[#393F62]"
        }`}
      >
        <div
          className={`fixed z-40 duration-300 left-0 
          }`}
        >
          <SideBar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
        </div>
        <div
          className={`fixed z-40 duration-300 ${
            openSidebar ? "left-0" : "-left-full"
          }
          }`}
        >
          <StylingSideBar setOpenSidebar={setOpenStylingSidebar} />
        </div>
        <div
          className={`fixed z-50 duration-300 ${
            openStylingSidebar ? "left-0" : "-left-full"
          }
          }`}
        >
          <SystemSideBar />
        </div>
        <div className="flex justify-end sm:justify-between">
          <img
            onClick={() => setOpenSidebar(true)}
            className="-mb-10 ms-5 w-14 lg:w-[105px] cursor-pointer hidden sm:flex"
            src={fingerImg}
            alt="img"
          />
          <div className="flex items-end flex-col px-5 sm:px-[29px]">
            <img className=" w-[200px] md:w-[330px]" src={logo} alt="logo" />
          </div>
        </div>
        <div className="flex justify-between items-center w-full sm:w-11/12 md:w-[80%] lg:w-[88%] ms-auto">
          <h2
            className={`font-normal text-lg sm:text-xl md:text-2xl lg:text-[38px] w-full sm:text-center px-3 py-3 md:py-5 capitalize ${
              !isDarkTheme ? "text-[#CCC1AF] " : "text-[#393F62] "
            }`}
          >
            MATTHEW
          </h2>
          <div className="flex items-center justify-center md:gap-3 z-[1] w-full">
            <img
              className="max-sm:!w-6 max-sm:!h-6"
              src={arrowImg}
              alt="ARROW"
            />
            <h2
              className={`text-lg lg:text-[26px] text-[#740000] whitespace-nowrap  ${
                !isDarkTheme ? "text-[#CCC1AF]" : "text-[#393F62]"
              }`}
            >
              Chapter 1
            </h2>
            <img
              className="-scale-100 max-sm:!w-6 max-sm:!h-6"
              src={arrowImg}
              alt="ARROW"
            />
          </div>

          <div className="flex justify-end w-full gap-2 md:gap-3 px-2 md:px-5">
            <span
              onClick={toggleTheme}
              className="flex justify-center items-center me-2 md:me-4 cursor-pointer"
            >
              <ThemeIcon />
            </span>
            <button
              onClick={increaseFontSize}
              className={` text-2xl sm:text-3xl border  rounded-lg sm:rounded-xl w-6 h-6 sm:w-11 sm:h-11 flex justify-center items-center  ${
                isDarkTheme
                  ? "text-[#740000] border-[#000]"
                  : "text-[#CCBFAB] border-[#CCBFAB]"
              }`}
            >
              +
            </button>
            <button
              onClick={decreaseFontSize}
              className={`  text-2xl sm:text-3xl border  rounded-lg sm:rounded-xl w-6 h-6 sm:w-11 sm:h-11 flex justify-center items-center  ${
                isDarkTheme
                  ? "text-[#740000] border-[#000]"
                  : "text-[#CCBFAB] border-[#CCBFAB]"
              }`}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
