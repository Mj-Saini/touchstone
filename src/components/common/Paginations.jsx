// FooterNavigation.js
import React from "react";
import arrowImg from "../../assets/images/svg/next-prev-img.svg";
import { PreviousIcon } from "./Icons";

const Paginations = () => {
  return (
    <div className=" mt-8 pb-[66px]">
      <div className="flex justify-between items-center md:py-4">
        <button className="text-[#740000] font-normal text-base md:text-3xl lg:text-[32px] flex items-center">
          <PreviousIcon />
          <span className="md:-translate-x-5 hidden sm:block">
            {" "}
            Previous Chapter
          </span>
        </button>

        <button className="text-[#740000] font-normal text-base md:text-3xl lg:text-[32px] flex items-center z-[2]">
          <span className="md:translate-x-5 z-[1] hidden sm:block">
            {" "}
            Next Chapter
          </span>
          <span className="-scale-100 z-0">
            <PreviousIcon />
          </span>
        </button>
      </div>
      <div className="bg-support_mission bg-cover bg-center bg-no-repeat flex justify-center md:py-6 sm:mt-6">
        <button className="text-normal text-xl md:text-2xl lg:text-[32px] text-[#740000] capitalize border border-[#740000] px-5 py-4 rounded-xl ">
          Support our mission
        </button>
      </div>
    </div>
  );
};

export default Paginations;
