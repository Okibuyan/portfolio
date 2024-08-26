import { IconButton } from "./svg/IconButton";
import { Tag } from "./Tag";

export const Column = ({ title, text }) => {
  return (
    <div className="flex flex-col md:max-w-[576px] dark:bg-[#1F2937] md:p-12 p-8 gap-6">
      <div className="font-semibold text-xl text-[#111827] dark:text-[#F9FAFB]">
        {title}
      </div>
      <div className="dark:text-[#D1D5DB]">{text}</div>
      <div className="flex flex-wrap gap-2">
        <Tag text="React" />
        <Tag text="Next.js" />
        <Tag text="Typescript" />
        <Tag text="Nest.js" />
        <Tag text="PostgreSQL" />
        <Tag text="Tailwindcss" />
        <Tag text="Figma" />
        <Tag text="Cypress" />
        <Tag text="Storybook" />
        <Tag text="Git" />
      </div>
      <div>
        <IconButton />
      </div>
    </div>
  );
};
