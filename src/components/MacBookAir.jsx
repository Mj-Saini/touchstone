import React, { useState } from "react";
import BookChapterPopup from "./BookChapterPopup";

const MacBookAir = () => {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <div className="bg-macbook_bg bg-cover bg-top bg-no-repeat py-4 sm:py-6 lg:py-9 px-2 sm:px-12 lg:px-[82px] h-screen flex">
      <div className="flex-grow flex flex-col justify-center">
        <h2 className="ff_vardana_bold text-2xl md:text-5xl lg:text-[60px] text-[#393F62]">
          King James Version
        </h2>
        <div className="flex flex-col">
          <div className="max-w-[592px] py-3 sm:py-4 px-4 sm:px-7 bg-[#E7E6E2C9] rounded-tr-[41px]  rounded-bl-[41px] mt-2 sm:mt-5">
            <h2 className="text-[#740000]  text-xl md:text-2xl lg:text-[30px] ff_vardana_bold">
              DESCRIPTION
            </h2>
            <p className="text-black text-base md:text-xl lg:!leading-[28px] sm:mt-2">
              The King James Version (KJV), also the King James Bible (KJB) and
              the Authorized Version, is an Early Modern English translation of
              the Christian Bible for the Church of England, which was
              commissioned in 1604 and published in 1611, by sponsorship of King
              James VI and I. The 66 books of the King James Version include 39
              books of the Old Testament, and the 27 books of the New Testament.
              Noted for its 'majesty of style, the King James Version has been
              described as one of the most important books in English culture
              and a driving force in the shaping of the English-speaking world.'
              [Wikipedia].
            </p>
          </div>
          <button
            onClick={() => setOpenPopup(true)}
            className="font-normal text-base sm:text-xl md:text-2xl  text-[#740000] capitalize py-2 px-[22px] max-w-[592px] flex justify-center shadow-drop_shadow rounded-[20px] bg-[#E7E6E2C9] mt-3 sm:mt-6 "
          >
            Read The Book
          </button>
          {openPopup && <BookChapterPopup setOpenPopup={setOpenPopup} />}
        </div>
      </div>
    </div>
  );
};

export default MacBookAir;
