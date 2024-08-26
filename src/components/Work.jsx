import { Column } from "./Column";
import { Tag } from "./Tag";

export const Work = () => {
  return (
    <div
      className=" md:py-[96px] md:px-8 py-16 px-4 w-screen dark:bg-[#030712] flex justify-center"
      id="work"
    >
      <div className="container md:px-[32px] flex flex-col gap-12 items-center">
        <div className=" px-[32px] flex flex-col gap-4 items-center">
          <Tag text="Work" />
          <div className="text-[#4B5563] dark:text-[#D1D5DB] font-normal text-center text-xl">
            Some of the noteworthy projects I have built:
          </div>
        </div>
        <div className="flex md:flex-row flex-col rounded-[12px] shadow overflow-hidden">
          <div className="md:max-w-[576px] md:p-12 p-8 bg-[#F9FAFB] dark:bg-[#374151]">
            <img src="/picture1.png" alt="" />
          </div>
          <Column
            title="UB Cab"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
            urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
             faucibus orci luctus et ultrices posuere cubilia curae."
          />
        </div>
        <div className="flex md:flex-row flex-col rounded-[12px] shadow overflow-hidden">
          <div className="md:max-w-[576px] md:p-12 p-8 bg-[#F9FAFB] dark:bg-[#374151] md:hidden">
            <img src="/picture2.png" alt="" />
          </div>
          <Column
            title="Mentorhub"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
            "
          />
          <div className="md:max-w-[576px] md:p-12 p-8 bg-[#F9FAFB] dark:bg-[#374151] md:block hidden">
            <img src="/picture2.png" alt="" />
          </div>
        </div>
        <div className="flex md:flex-row flex-col rounded-[12px] shadow overflow-hidden">
          <div className="md:max-w-[576px] md:p-12 p-8 bg-[#F9FAFB] dark:bg-[#374151]">
            <img src="/picture3.png" alt="" />
          </div>
          <Column
            title="iToim "
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
             urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
             faucibus orci luctus et ultrices posuere cubilia curae."
          />
        </div>
      </div>
    </div>
  );
};
