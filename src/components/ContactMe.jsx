import { CopyIcon } from "./icons/CopyIcon";
import { EmailIcon } from "./icons/EmailIcon";
import { PhoneIcon } from "./icons/PhoneIcon";
import { GitHubIcon } from "./svg/GitHubIcon";
import { TwitterIcon } from "./svg/TwitterIcon";
import { FigmaIcon } from "./svg/FigmaIcon";
import { Tag } from "./Tag";

export const ContactMe = () => {
  return (
    <div
      id="contact"
      className=" md:py-[96px] md:px-8 py-16 px-4 w-screen dark:bg-[#030712] flex justify-center"
    >
      <div className="container px-[32px] flex flex-col md:gap-12 gap-6 items-center">
        <div className=" px-[32px] flex flex-col gap-4 items-center">
          <Tag text="Get in touch" />
          <div className="flex justify-center text-[#4B5563] dark:text-[#D1D5DB] font-normal text-xl md:max-w-[576px] text-center">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="flex justify-center items-center md:gap-5 gap-4">
            <EmailIcon className="md:h-8 md:w-8 h-6 w-6" />
            <div className="md:text-4xl text-[18px] font-semibold text-[#111827] dark:text-[#F9FAFB]">
              tom@pinecone.mn
            </div>
            <CopyIcon className="md:h-8 md:w-8 h-6 w-6" />
          </div>
          <div className="flex justify-center items-center md:gap-5 gap-4">
            <PhoneIcon />
            <div className="md:text-4xl text-[18px] font-semibold text-[#111827] dark:text-[#F9FAFB]">
              +976 88112233
            </div>
            <CopyIcon />
          </div>
        </div>
        <div>
          <div className="font-normal text-center text-base text-[#4B5563] dark:text-[#D1D5DB]">
            You may also find me on these platforms!
          </div>
          <div className="flex justify-center ">
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
      </div>
    </div>
  );
};
