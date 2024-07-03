import { sideBarData, stylingSideBarData, systemSidebarData } from "./Helper";
import { Link } from "react-router-dom";
import { FingerPrintIcon } from "./Icons";
import { useState } from "react";

const SideBar = ({ setOpenSidebar }) => {
  const colors = ["bg-[#CCBFAB]", "!bg-[#740000]", "!bg-[#004474]"];
  const iconSets = [sideBarData, stylingSideBarData, systemSidebarData];
  const [bgColorIndex, setBgColorIndex] = useState(0);
  const [iconSetIndex, setIconSetIndex] = useState(0);

  const handleIconClick = () => {
    setOpenSidebar(true);
    setBgColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    setIconSetIndex((prevIndex) => (prevIndex + 1) % iconSets.length);
  };
  return (
    <div
      id="sidebar"
      className=" bottom-0 sm:top-0 fixed sm:sticky w-full sm:h-screen 2xl:h-[882px]"
    >
      <div
        className={`flex flex-row sm:flex-col bg-[#CCBFAB] shadow-drop_shadow sm:rounded-[20px] h-full w-full sm:w-24 md:w-[169px] justify-center px-5 md:px-8 py-5 md:py-[35px] gap-3 md:gap-[20px] ${colors[bgColorIndex]}`}
      >
        <div
          // onClick={() => setOpenSidebar(true)}
          onClick={handleIconClick}
          className="cursor-pointer hidden sm:block "
        >
          <FingerPrintIcon />
        </div>

        <div className="flex flex-row sm:flex-col max-sm:justify-center justify-between mt-5 sm:pb-6 gap-3 md:gap-[20px] sm:h-[882px] lg:h-full ">
          {iconSets[iconSetIndex].map((item, index) => (
            <div key={index}>
              <Link
                to={item.path}
                className="flex items-center justify-center w-full duration-300 icon cursor-pointer "
              >
                <div className="flex items-center gap-2.5">
                  <img className="w-[50px]" src={item.icon} alt="sidebar-img" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
