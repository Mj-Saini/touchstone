// src/components/Popup.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookChapterPopup = ({ isOpen, onClose, setOpenPopup }) => {
  const [selectedBook, setSelectedBook] = useState("Genesis");
  const [selectedChapter, setSelectedChapter] = useState("Chapter 1");

  const handleBookChange = (e) => {
    setSelectedBook(e.target.value);
  };

  const handleChapterChange = (e) => {
    setSelectedChapter(e.target.value);
  };

  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={() => setOpenPopup(false)}
      className={`fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center ${
        !isOpen ? "block" : "hidden"
      }`}
    >
      <div
        onClick={handlePopupClick}
        className="bg-white p-8 max-w-[800px] w-[800px] rounded-xl flex justify-center flex-col items-center z-10 relative"
      >
        <div className="flex flex-wrap justify-center w-full relative overflow-visible">
          <div className="w-full sm:w-1/2 px-3">
            <div className="mb-4">
              <label
                className="block ff_vardana_bold text-black text-base sm:text-xl mb-4 capitalize"
                htmlFor="book"
              >
                Book
              </label>
              <select
                id="book"
                value={selectedBook}
                onChange={handleBookChange}
                className="w-full px-3 py-3 text-black border rounded-lg focus:outline-none focus:shadow-outline bg-[#f1d9b6]"
              >
                <option value="Genesis">Genesis</option>
                <option value="Exodus">Exodus</option>
              </select>
            </div>
          </div>
          <div className="w-full sm:w-1/2 px-3">
            <div className="mb-4">
              <label
                className="block ff_vardana_bold text-black text-base sm:text-xl mb-4 capitalize"
                htmlFor="chapter"
              >
                Chapter
              </label>
              <select
                id="chapter"
                value={selectedChapter}
                onChange={handleChapterChange}
                className="w-full px-3 py-3 text-black border rounded-lg focus:outline-none focus:shadow-outline bg-[#f1d9b6]"
              >
                <option value="Chapter 1">Chapter 1</option>
                <option value="Chapter 2">Chapter 2</option>
                {/* Add more chapter options here */}
              </select>
            </div>
          </div>
        </div>
        <Link
          to="/chapter-1"
          className="bg-[#740000] text-lg md:text-2xl text-white px-4 py-2 rounded-lg mt-5"
        >
          OK
        </Link>
      </div>
    </div>
  );
};

export default BookChapterPopup;
