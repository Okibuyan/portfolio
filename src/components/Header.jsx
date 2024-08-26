import { HeaderIcon } from "./icons/HeaderIcon";
import { MobileMenu } from "./MobileMenu";

import { ToggleTheme } from "./ToggleTheme";

export const Header = ({ handleMenu, isOpenMenu }) => {
  return (
    <div
      className={`w-full fixed
      }   top-0 bg-white dark:bg-[#030712] flex justify-center left-0  z-5`}
    >
      <MobileMenu handleMenu={handleMenu} isOpenMenu={isOpenMenu} />

      <div className=" h-[68px] container p-4 md:py-4 md:px-8 flex justify-between items-center">
        <div className=" dark:text-[#1a1e21] font-normal text-center text-[30px] ">
          TOM
        </div>
        <div className="block md:hidden " onClick={handleMenu}>
          <HeaderIcon />
        </div>
        <div className=" items-center gap-6 hidden md:flex ">
          <div className=" dark:text-[#D1D5DB] text-base font-medium  text-gray-600">
            <a href="#about">About</a>
          </div>
          <div className=" dark:text-[#D1D5DB] text-base font-medium  text-gray-600">
            <a href="#experience">Experience</a>
          </div>
          <div className=" dark:text-[#D1D5DB] text-base font-medium  text-gray-600">
            <a href="#work">Work</a>
          </div>
          <div className=" dark:text-[#D1D5DB] text-base font-medium  text-gray-600">
            <a href="#contact">Contact</a>
          </div>
          <div className="h-6 border-[#F3F4F6] dark:border-[#1F2937] border-[1px]"></div>
          <ToggleTheme />
          <div className="text-base font-medium text-gray-50 dark:text-[#111827] py-1.5 px-4 flex rounded-2xl bg-gray-900 dark:bg-[#F9FAFB]">
            Download CV
          </div>
        </div>
      </div>
    </div>
  );
};
