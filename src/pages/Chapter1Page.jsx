import React, { useState } from "react";
import { chapter1Data } from "./../components/common/Helper";
import Paginations from "../components/common/Paginations";
import Header from "../components/common/Header";

const Chapter1Page = () => {
  const [textStyle, setTextStyle] = useState({
    fontSize: 16, // initial font size
    lineHeight: 1.5, // initial line height
  });

  const updateTextStyle = (newStyles) => {
    setTextStyle((prevState) => ({
      ...prevState,
      ...newStyles,
    }));
  };

  const increaseFontSize = () => {
    updateTextStyle({ lineHeight: Math.min(textStyle.lineHeight + 0.1, 2) });
    updateTextStyle({ fontSize: Math.min(textStyle.fontSize + 2, 32) });
  };

  const decreaseFontSize = () => {
    updateTextStyle({ fontSize: Math.max(textStyle.fontSize - 2, 12) });
    updateTextStyle({ lineHeight: Math.max(textStyle.lineHeight - 0.1, 1) });
  };

  let globalIndex = 1;
  return (
    <div className="">
      <Header
        increaseFontSize={increaseFontSize}
        decreaseFontSize={decreaseFontSize}
       
      />
      <div className="px-5 sm:px-10 lg:ps-[185px] lg:pe-[29px] w-full mt-5">
        {chapter1Data.map((items, index) => (
          <div className="w-full flex flex-col items-center sm:items-start">
            <h2 className="ff_vardana_bold text-[#393F62] text-lg md:text-[25px] bg-[#CCBFAB38] inline-block px-2 py-1.5 shadow-drop_shadow rounded-md text-center sm:text-start">
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
                    className="text-base md:text-[25px] text-black flex
                    justify-end w-7 sm:w-11"
                  >
                    {globalIndex++}.
                  </span>

                  <p
                    style={{
                      fontSize: `${textStyle.fontSize}px`,
                      lineHeight: `${textStyle.lineHeight}`,
                    }}
                    className="text-base md:text-[25px] text-black w-full
                    whitespace-normal md:!leading-[30px]"
                  >
                    {data.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Paginations />
    </div>
  );
};

export default Chapter1Page;
