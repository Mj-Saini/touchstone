import React, { useState } from "react";
import { sideBarData } from "./Helper";
import { Link } from "react-router-dom";
import printImg from "../../assets/images/svg/fingerprints.svg";

const SideBar = ({ setShowSideBar }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };
  return (
    <div id="sidebar" className=" top-0 sticky ">
      <div className="flex flex-col bg-[#CCBFABBF] shadow-drop_shadow h-full w-[169px] justify-center px-8 py-[35px] gap-[30px]">
        <img src={printImg} alt="img" />
        {sideBarData.map((item, index) => (
          <div key={index}>
            <Link
              to={item.path}
              className="flex items-center justify-center w-full duration-300 icon cursor-pointer bg-[#CCBFABBF]"
              onClick={() => {
                handleDropdown(index);
                setShowSideBar(false);
              }}
            >
              <div className="flex items-center gap-2.5">
                <img src={item.icon} alt="sidebar-img" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
