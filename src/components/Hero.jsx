import { GitHubIcon } from "./svg/GitHubIcon";
import { FigmaIcon } from "./svg/FigmaIcon";
import { LocationIcon } from "./svg/LocationIcon";
import { TwitterIcon } from "./svg/TwitterIcon";

export const Hero = () => {
  return (
    <div className="w-full dark:bg-[#030712] flex justify-center">
      <div className="flex flex-col md:items-center md:flex-row md:py-24 py-16 md:px-8 gap-12n px-4 container justify-between  ">
        <div className="md:hidden flex justify-center ">
          <img className="h-[360px] " src="/mobile-tom.png" alt="" />
        </div>
        <div className="flex flex-col gap-12 w-full md:max-w-[600px] ">
          <div className="flex flex-col gap-2 ">
            <p className="md:text-[60px] text-[36px] font-bold text-[rgb(17,24,39)] dark:text-[#F9FAFB]">
              Hi, I'm Buyanaa
            </p>
            <p className="text-base font-normal text-[#4B5563] dark:text-[#D1D5DB]">
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </p>
          </div>
          <div className="flex gap-2 flex-col">
            <div className="flex gap-2 items-center">
              <LocationIcon />
              <p className="text-base font-normal text-[#4B5563] dark:text-[#D1D5DB]">
                Ulaanbaatar, Mongolia
              </p>
            </div>
            <div className="flex gap-2 items-center ">
              <div className="h-2 w-2 m-2 rounded-[20px] bg-[#10B981]"></div>
              <p className="text-base font-normal text-[#4B5563] dark:text-[#D1D5DB]">
                Available for new projects
              </p>
            </div>
          </div>
          <div className="flex ">
            <div className="p-2">
              <GitHubIcon />
            </div>
            <div className="p-2">
              <TwitterIcon />
            </div>
            <div className="p-2">
              <FigmaIcon />
            </div>
          </div>
        </div>
        <div className="md:flex justify-end w-[568px] hidden">
          <img className="h-[360px] " src="/profilePicture.png" alt="" />
        </div>
      </div>
    </div>
  );
};
