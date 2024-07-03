import { Link } from "react-router-dom";
import { FingerPrintIcon } from "./common/Icons";
import { stylingSideBarData } from "./common/Helper";

const StylingSideBar = ({ setOpenSidebar }) => {
  return (
    <div
      id="sidebar"
      className=" bottom-0 sm:top-0 fixed sm:sticky w-full sm:h-screen 2xl:h-[882px]"
    >
      <div className="flex flex-row sm:flex-col  bg-[#740000] shadow-drop_shadow sm:rounded-[20px] h-full w-full sm:w-24 md:w-[169px] justify-center px-5 md:px-8 py-5 md:py-[35px] gap-3 md:gap-[20px]`">
        <div
          onClick={() => setOpenSidebar(true)}
          className="cursor-pointer hidden sm:block "
        >
          <FingerPrintIcon />
        </div>

        <div className="flex flex-row sm:flex-col max-sm:justify-center justify-between sm:pb-6 gap-3 md:gap-[20px] sm:h-[882px] lg:h-full ">
          {stylingSideBarData.map((item, index) => (
            <div key={index}>
              <Link
                to={item.path}
                className="flex items-center justify-center w-full duration-300 icon cursor-pointer "
              >
                <div className="flex items-center gap-2.5">
                  <img className="w-[50px]" src={item.icon} alt="sidebar-img" />
                  {/* <span>{item.icon}</span> */}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StylingSideBar;
