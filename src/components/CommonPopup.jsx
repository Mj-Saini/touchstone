// src/components/Popup.jsx
import React from "react";

const CommonPopup = ({
  isOpen,
  onClose,
  title,
  subtitle,
  imageSrc,
  popupStyling,
  imgStyling,
}) => {
  if (!isOpen) return null;

  return (
    <div
      //   onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div
        className={`bg-white rounded-[20px] overflow-hidden shadow-lg pb-8 ${popupStyling}`}
      >
        <div className="flex justify-end ">
          <button
            onClick={onClose}
            className="text-black text-3xl text-end px-5"
          >
            &times;
          </button>
        </div>

        <h2 className="text-2xl md:text-4xl lg:text-[46px] text-[#32312D] py-2 text-center bg-[#CCBFAB38]">
          {title}
        </h2>
        <h2 className="text-lg text-center text-[#740000] md:text-2xl lg:text-[27px] pt-2 pb-4">
          {subtitle}
        </h2>

        <div className="flex justify-center px-6">
          <img
            src={imageSrc}
            alt={subtitle}
            className={` ${imgStyling} rounded-lg`}
          />
        </div>
      </div>
    </div>
  );
};

export default CommonPopup;
