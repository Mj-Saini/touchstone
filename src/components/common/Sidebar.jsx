import { sideBarData } from "./Helper";
import { Link } from "react-router-dom";
import printImg from "../../assets/images/svg/fingerprints.svg";

const SideBar = ({ setOpenSidebar }) => {
  return (
    <div
      id="sidebar"
      className=" bottom-0 sm:top-0 fixed sm:sticky w-full sm:h-screen overflow-y-auto"
    >
      <div className="flex flex-row sm:flex-col  bg-[#CCBFAB] shadow-drop_shadow sm:rounded-[20px] h-full md:h-[882px] w-full sm:w-24 md:w-[169px] justify-center px-5 md:px-8 py-5 md:py-[35px] gap-3 md:gap-[30px] overflow-auto ">
        <img
          onClick={() => setOpenSidebar(false)}
          className="cursor-pointer hidden sm:block"
          src={printImg}
          alt="img"
        />

        {sideBarData.map((item, index) => (
          <div key={index}>
            <Link
              to={item.path}
              className="flex items-center justify-center w-full duration-300 icon cursor-pointer bg-[#CCBFABBF]"
              onClick={() => {
                setOpenSidebar(false);
              }}
            >
              <div className="flex items-center gap-2.5">
                <img className="w-[60px]" src={item.icon} alt="sidebar-img" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
