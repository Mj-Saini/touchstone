import React from "react";
import printImg from "../assets/images/svg/fingerprints.svg";

const TouchstoneStudy = () => {
  return (
    <div className="mt-12 lg:mt-[70px] px-5 sm:px-10 md:pe-0 md:ps-[60px] bg-[#DBD5CA] py-12 md:py-[61px] w-full ">
      <div className="flex max-sm:gap-5 flex-col-reverse sm:flex-row -mx-3 ">
        <div className="w-full sm:w-10/12 px-3 ">
          <p className="ff_vardana_bold text-xl md:text-2xl lg:text-[32px] text-black ">
            The Touchstone Bible Study App aims to provide a comprehensive
            digital platform for individuals to deepen their understanding of
            the Scriptures through intuitive tools.
          </p>
        </div>
        <div className="w-full sm:w-2/12 ">
          <div className="flex justify-center items-center h-full ">
            <img src={printImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouchstoneStudy;
