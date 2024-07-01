// FooterNavigation.js
import React, { useState } from "react";
import { NextIcon, PreviousIcon } from "./Icons";
import CommonPopup from "../CommonPopup";
import archologyImage from "../../assets/images/png/archology-img.png";
import mapImage from "../../assets/images/png/map-img.png";

const Paginations = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);
  return (
    <div className=" sm:mt-8 pb-6 sm:pb-10 md:pb-[66px] mb-20">
      <div className="flex justify-between items-center md:py-4">
        <button className="text-[#740000] font-normal text-base md:text-3xl lg:text-[32px] flex items-center ">
          <PreviousIcon />
          <span className="hidden sm:inline ">Previous Chapter</span>
        </button>

        <button className="text-[#740000] font-normal text-base md:text-3xl lg:text-[32px] flex items-center">
          <span className="hidden sm:block"> Next Chapter</span>

          <NextIcon />
        </button>
      </div>
      <div className="bg-support_mission bg-cover bg-center bg-no-repeat flex justify-center md:py-6 sm:mt-6">
        <button
          onClick={handleOpenPopup}
          className="text-normal text-xl md:text-2xl lg:text-[32px] text-[#740000] capitalize border border-[#740000] px-5 py-4 rounded-xl "
        >
          Support our mission
        </button>
      </div>
      <CommonPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        title="MAP"
        subtitle="Bethany Beyond Jordan"
        imageSrc={mapImage}
        popupStyling="max-w-[759px] lg:w-[759px]"
      />
      {/* <CommonPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        // title="ARCHEOLOGY"
        // subtitle="Shekels"
        imageSrc={archologyImage}
        // popupStyling=" max-w-[555px] lg:w-[555px]"
        // imgStyling="w-[361px] sm:h-[558px]"
      /> */}
    </div>
  );
};

export default Paginations;
