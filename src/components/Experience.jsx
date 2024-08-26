import { Tag } from "./Tag";

export const Experience = () => {
  return (
    <div
      className=" md:py-[96px] md:px-8 py-16 px-4 bg-[#F9FAFB] w-screen dark:bg-[#111827] flex justify-center"
      id="experience"
    >
      <div className="container md:px-[32px] flex flex-col md:gap-12 gap-6 items-center">
        <div className=" flex flex-col gap-4 items-center">
          <Tag text="Experience" />
          <div className="text-[#4B5563] dark:text-[#D1D5DB] font-normal text-center md:text-xl text-[18px]">
            Here is a quick summary of my most recent experiences:
          </div>
        </div>
        <div className="md:max-w-[896px] bg-white dark:bg-[#1F2937] rounded-xl shadow p-8 md:gap-12 gap-4 flex md:flex-row flex-col">
          <div className="w-[206px]">
            <img src="/logo-upwork.png" alt="" />
          </div>
          <div className="font-normal text-base text-[#374151] dark:text-[#E5E7EB] md:hidden">
            Nov 2021 - Present
          </div>
          <div className="flex flex-col gap-4 max-w-[384px]">
            <div className="font-semibold text-xl text-[#111827] dark:text-[#F9FAFB]">
              Sr. Frontend Developer
            </div>
            <ul className="flex flex-col items-start gap-1 dark:text-[#D1D5DB] pl-5 list-disc list-outside">
              <li>
                Lorem ipsum dolor sit amet, consecp-8tetur adipiscing elit.
              </li>
              <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
              <li>Sed quis justo ac magna.</li>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </ul>
          </div>
          <div className="font-normal text-base text-[#374151] dark:text-[#E5E7EB] hidden md:flex">
            Nov 2021 - Present
          </div>
        </div>
        <div className="md:max-w-[896px] bg-white dark:bg-[#1F2937] rounded-xl shadow p-8 md:gap-12 gap-4 flex md:flex-row flex-col">
          <div className="w-[206px]">
            <img src="/logo-upwork.png" alt="" />
          </div>
          <div className="font-normal text-base text-[#374151] dark:text-[#E5E7EB] md:hidden">
            Jul 2017 - Oct 2021
          </div>
          <div className="flex flex-col gap-4 max-w-[384px]">
            <div className="font-semibold text-xl text-[#111827 dark:text-[#F9FAFB]">
              Team Lead
            </div>
            <ul className="flex flex-col items-start gap-1 dark:text-[#D1D5DB] pl-5 list-disc list-outside">
              <li>Sed quis justo ac magna.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Sed quis justo ac magna.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>
          <div className="font-normal text-base text-[#374151] dark:text-[#E5E7EB] hidden md:flex">
            Jul 2017 - Oct 2021
          </div>
        </div>
        <div className="md:max-w-[896px] bg-white dark:bg-[#1F2937] rounded-xl shadow p-8 md:gap-12 gap-4 flex md:flex-row flex-col">
          <div className="w-[206px]">
            <img src="/logo-upwork.png" alt="" />
          </div>
          <div className="font-normal text-base text-[#374151] dark:text-[#E5E7EB] md:hidden">
            Dec 2015 - May 2017
          </div>
          <div className="flex flex-col gap-4 max-w-[384px]">
            <div className="font-semibold text-xl text-[#111827] dark:text-[#F9FAFB]">
              Full Stack Developer
            </div>
            <ul className="flex flex-col items-start dark:text-[#D1D5DB] gap-1 pl-5 list-disc list-outside">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
          </div>
          <div className="font-normal text-base text-[#374151] dark:text-[#E5E7EB] hidden md:flex">
            Dec 2015 - May 2017
          </div>
        </div>
      </div>
    </div>
  );
};
