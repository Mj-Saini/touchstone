// FooterNavigation.js
import React from "react";

const Paginations = () => {
  return (
    <div className="flex justify-between items-center bg-gray-100 py-4">
      <button className="text-[#740000] font-normal text-2xl md:text-3xl lg:text-[32px] flex items-center">
        
        Previous Chapter
      </button>
      <button className="bg-transparent border border-red-800 text-red-800 py-2 px-4 rounded">
        Support Our Mission
      </button>
      <button className="text-[#740000] font-normal text-2xl md:text-3xl lg:text-[32px] flex items-center">
        Next Chapter
        <svg
          className="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Paginations;
