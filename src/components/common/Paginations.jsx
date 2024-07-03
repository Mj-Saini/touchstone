// FooterNavigation.js
import React, { useState } from "react";
import { NextIcon, PreviousIcon } from "./Icons";
import CommonPopup from "../CommonPopup";
import archologyImage from "../../assets/images/png/archology-img.png";

const Paginations = ({ isDarkTheme }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  if (isPopupOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <>
      <div className="bg-[#CCBFAB38]  w-full sm:w-11/12 md:w-[80%] lg:w-[88%] ms-auto">
        <div className="bg-support_mission bg-cover bg-center bg-no-repeat flex justify-center md:py-6 sm:mt-6">
          <button
            onClick={handleOpenPopup}
            className={`text-normal text-xl md:text-2xl lg:text-[32px] text-[#740000] capitalize border  px-5 py-4 rounded-xl ${
              !isDarkTheme
                ? "text-[#CCBFAB] border-[#CCBFAB]"
                : "text-[#393F62] border-[#740000]"
            }`}
          >
            Support our mission
          </button>
        </div>
      </div>
      {/* <CommonPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        title="ENCYCLOPEDIA"
        subtitle="Abraham"
        text={
          "ABRAHAM Father of a multitude, son of Terah, named (Gen. 11:27) before his older brothers Nahor and Haran, because he was the heir of the promises. Till the age of seventy, Abram sojourned among his kindred in his native country of Chaldea. He then, with his father and his family and household, quitted the city of Ur, in which he had hitherto dwelt, and went some 300 miles north to Haran, where he abode fifteen years. The cause of his migration was a call from God (Acts 7:2-4). There is no mention of this first call in the Old Testament; it is implied, however, in Gen. 12. While they tarried at Haran, Terah died at the age of 205 years. Abram now received a second and more definite call, accompanied by a promise from God (Gen. 12:1, Gen 12:2); whereupon he took his departure, taking his nephew Lot with him, not knowing whither he went (Heb. 11:8).  He trusted implicitly to the guidance of Him who had called him.Abram now, with a large household of probably a thousand souls, entered on a migratory life, and dwelt in tents. Passing along the valley of the Jabbok, in the land of Canaan, he formed his first encampment at Sichem (Gen. 12:6), in the vale or oak-grove of Moreh, between Ebal on the north and Gerizim on the south. Here he received the great promise, I will make of thee a great nation, etc. "
        }
        imgDisplay="hidden"
        popupStyling="max-w-[759px] lg:w-[759px]"
      /> */}
      {/* <CommonPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        title="MAP"
        subtitle="Bethany Beyond Jordan"
        imageSrc={mapImage}
        popupStyling="max-w-[759px] lg:w-[759px]"
        textDisplay="hidden"
      /> */}
      <CommonPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        title="ARCHEOLOGY"
        subtitle="Shekels"
        imageSrc={archologyImage}
        popupStyling=" max-w-[555px] lg:w-[555px]"
        imgStyling="w-[361px] sm:h-[458px]"
        textDisplay="hidden"
      />
    </>
  );
};

export default Paginations;
