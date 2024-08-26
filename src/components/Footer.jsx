import { CopyRightIcon } from "./svg/CopyRightIcon";

export const Footer = () => {
  return (
    <div className=" py-[24px] bg-[#F9FAFB] dark:bg-[#111827] w-screen flex justify-center">
      <div className="w-[1216px] flex justify-center gap-2 items-center">
        <CopyRightIcon />
        <div className="text-sm text-[#4B5563] dark:text-[#D1D5DB]">
          2024 | Greetings with ❤️️ from Ulaanbaatar
        </div>
      </div>
    </div>
  );
};
