import { sideBarData } from "./Helper";
import { Link } from "react-router-dom";
import printImg from "../../assets/images/svg/fingerprints.svg";

const SideBar = ({ setOpenSidebar }) => {
  return (
    <div id="sidebar" className=" top-0 sticky ">
      <div className="flex flex-col bg-[#CCBFAB] shadow-drop_shadow rounded-[20px] h-full w-24 md:w-[169px] justify-center px-5 md:px-8 py-5 md:py-[35px] gap-3 md:gap-[30px] ">
        <img
          onClick={() => setOpenSidebar(false)}
          className="cursor-pointer"
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
