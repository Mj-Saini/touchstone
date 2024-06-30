import React from "react";
import Chapter1 from "../components/Chapter1";
import { chapter1Data } from "./../components/common/Helper";
import Paginations from "../components/common/Paginations";

const Chapter1Page = () => {
  let globalIndex = 1;
  return (
    <div>
      <Chapter1 />
      <div className="px-5 sm:px-10 lg:ps-[108px] lg:pe-[29px] w-full mt-5">
        {chapter1Data.map((items, index) => (
          <div className="w-full flex flex-col items-center sm:items-start">
            <h2 className="ff_vardana_bold text-[#393F62] text-lg md:text-[25px] bg-[#CCBFAB38] inline-block px-2 py-1.5 shadow-drop_shadow rounded-md text-center sm:text-start">
              {items.heading}
            </h2>
            <div
              className={`flex flex-col gap-3 pb-10 sm:pb-14 md:pb-[69px] ${
                index !== 0 ? "pt-6 sm:pt-12" : " mt-3"
              }`}
            >
              {items.about.map((data, index) => (
                <div key={index} className={`flex gap-3 w-full mt-3`}>
                  <span className="text-base md:text-[25px] text-black flex justify-end w-7 sm:w-11">
                    {globalIndex++}.
                  </span>

                  <p className="text-base md:text-[25px] text-black w-full whitespace-normal md:!leading-[30px]">
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
