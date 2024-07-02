import React from "react";

const Discover = () => {
  return (
    <>
      <div className="bg-discover_bg bg-cover bg-top bg-no-repeat pt-[100px] py-7 bg-[#DBD5CA] mt-12 md:mt-[70px] pb-20 px-6">
        <p className="ff_vardana_bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:!leading-[60px] text-black text-center bg-transparent">
          “Discover an Interactive and Easy-to-Read Bible app, now available at
          an affordable price”.
        </p>
      </div>
      <div className="-mt-10 flex justify-center">
        <button className="font-normal text-xl md:text-2xl lg:text-4xl text-[#32312D] capitalize py-2 px-[22px] border border-black shadow-drop_shadow rounded-[20px] bg-[#CCBFABBF] mb-10  ">
          VIEW PRICING PLANS
        </button>
      </div>
    </>
  );
};

export default Discover;
