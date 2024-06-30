import React from "react";
import Chapter1 from "../components/Chapter1";
import { chapter1Data } from "./../components/common/Helper";
import Paginations from "../components/common/Paginations";

const Chapter1Page = () => {
  let globalIndex = 1;
  return (
    <div>
      <Chapter1 />
      <div className="px-10 lg:ps-[108px] lg:pe-[29px]">
        {chapter1Data.map((items, index) => (
          <div>
            <h2 className="ff_vardana_bold text-[#393F62] text-xl md:text-[25px] bg-[#CCBFAB38] inline-block px-2 py-1.5 shadow-drop_shadow rounded-md">
              {items.heading}
            </h2>
            <div
              className={`mt-3 flex flex-col gap-3 pb-[69px] ${
                index === 0 ? "" : "mt-12"
              }`}
            >
              {items.about.map((data, index) => (
                <div className={`flex gap-3 `}>
                  <span className="text-lg md:text-[25px] text-black flex justify-end w-11">
                    {globalIndex++}.
                  </span>

                  <p className="text-lg md:text-[25px] text-black">
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
