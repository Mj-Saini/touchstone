import React, { useState } from "react";
import { chapter1Data } from "./../components/common/Helper";
import Paginations from "../components/common/Paginations";
import Header from "../components/common/Header";

const Chapter1Page = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [textStyle, setTextStyle] = useState({
    fontSize: 24,
    lineHeight: 1.5,
  });

  const updateTextStyle = (newStyles) => {
    setTextStyle((prevState) => ({
      ...prevState,
      ...newStyles,
    }));
  };

  const increaseFontSize = () => {
    updateTextStyle({
      fontSize: Math.min(textStyle.fontSize + 2, 36),
      lineHeight: Math.min(textStyle.lineHeight + 0.1, 1.5),
    });
  };

  const decreaseFontSize = () => {
    updateTextStyle({
      fontSize: Math.max(textStyle.fontSize - 2, 12),
      lineHeight: Math.max(textStyle.lineHeight - 0.1, 1),
    });
  };

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  let globalIndex = 1;
  return (
    <div
      className={
        !isDarkTheme
          ? "bg-darkTheme-background text-darkTheme-text"
          : "bg-lightTheme-background text-lightTheme-text"
      }
    >
      <Header
        isDarkTheme={isDarkTheme}
        toggleTheme={toggleTheme}
        increaseFontSize={increaseFontSize}
        decreaseFontSize={decreaseFontSize}
        setOpenSidebar={setOpenSidebar}
        openSidebar={openSidebar}
      />
      <div
        className={`px-5 sm:px-10 print_img  ms-auto lg:pe-[29px] mt-5 w-full sm:w-11/12 md:w-[80%] lg:w-[88%]"
        }`}
      >
        {chapter1Data.map((items, index) => (
          <div className="w-full flex flex-col items-center sm:items-start">
            <h2
              className={`ff_vardana_bold text-[#393F62] text-lg md:text-[25px] bg-[#CCBFAB38] inline-block px-2 py-1.5 shadow-drop_shadow rounded-md text-center sm:text-start ${
                !isDarkTheme ? "text-[#CCBFAB]" : "text-[#393F62]"
              }`}
            >
              {items.heading}
            </h2>
            <div
              className={`flex flex-col gap-3 sm:pb-14 md:pb-[69px] ${
                index !== 0 ? "pt-6 sm:pt-12" : " mt-3"
              }`}
            >
              {items.about.map((data, index) => (
                <div key={index} className={`flex gap-3 w-full mt-3`}>
                  <span
                    style={{
                      fontSize: `${textStyle.fontSize}px`,
                      lineHeight: `${textStyle.lineHeight}`,
                    }}
                    className={`text-base md:text-[25px] text-black flex
                    justify-end w-7 sm:w-11  ${
                      !isDarkTheme ? "text-darkTheme-text" : "text-[#393F62]"
                    }`}
                  >
                    {globalIndex++}.
                  </span>

                  <p
                    style={{
                      fontSize: `${textStyle.fontSize}px`,
                      lineHeight: `${textStyle.lineHeight}`,
                    }}
                    className={`text-base md:text-[25px] text-black w-full
                    whitespace-normal md:leading-[30px] ${
                      !isDarkTheme ? "text-darkTheme-text" : "text-[#393F62]"
                    }`}
                  >
                    {data.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <Paginations isDarkTheme={isDarkTheme} /> */}
    </div>
  );
};

export default Chapter1Page;
