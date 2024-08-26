import { CypressIcon } from "./icons/CypressIcon";
import { ExpressIcon } from "./icons/ExpressIcon";
import { FigmaIcon } from "./icons/FigmaIcon";
import { GitIcon } from "./icons/GitIcon";
import { JavascriptIcon } from "./icons/JavascriptIcon";
import { MongoDBIcon } from "./icons/MongoDBIcon";
import { NestIcon } from "./icons/NestIcon";
import { NextIcon } from "./icons/NextIcon";
import { NodeIcon } from "./icons/NodeIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { SassIcon } from "./icons/SassIcon";
import { SocketIcon } from "./icons/SocketIcon";
import { StorybookIcon } from "./icons/StorybookIcon";
import { TailwindcssIcon } from "./icons/TailwindcssIcon";
import { TypescriptIcon } from "./icons/TypescriptIcon";
import { SkillBox } from "./SkillBox";
import { Tag } from "./Tag";

export const Skills = () => {
  return (
    <div className=" dark:bg-[#030712] flex justify-center w-full">
      <div className="container md:py-[96px] md:px-8 py-16 px-4 flex flex-col md:gap-12 gap-6">
        <div className="flex  flex-col w-full items-center gap-4">
          <Tag text="Skills" />
          <div className="font-normal text-[20px] text-[#4B5563] dark:text-[#D1D5DB]">
            The skills, tools and technologies I am really good at:
          </div>
        </div>
        <div className="flex justify-around flex-wrap gap-6 md:gap-[100px]">
          <SkillBox imgUrl={<JavascriptIcon />} text="Javascript" />
          <SkillBox imgUrl={<TypescriptIcon />} text="Typescript" />
          <SkillBox imgUrl={<ReactIcon />} text="React" />
          <SkillBox imgUrl={<NextIcon />} text="Next.js" />
          <SkillBox imgUrl={<NodeIcon />} text="Node.js" />
          <SkillBox imgUrl={<ExpressIcon />} text="Express.js" />
          <SkillBox imgUrl={<NestIcon />} text="Nest.js" />
          <SkillBox imgUrl={<SocketIcon />} text="Socket.io" />

          <div className="h-[100px] w-[88px] flex flex-col items-center gap-2">
            <img src="/icon-postgresql.png" alt="" />
            <p className="dark:text-[#D1D5DB]">PostgreSQL</p>
          </div>
          <SkillBox imgUrl={<MongoDBIcon />} text="MongoDB" />
          <SkillBox imgUrl={<SassIcon />} text="Sass/Scss" />
          <div className="h-[100px] w-[88px] flex flex-col items-center gap-2">
            <img src="/icon-tailwindcss.png" alt="" />
            <p className="dark:text-[#D1D5DB] pt-3">Tailwindcss</p>
          </div>

          <SkillBox imgUrl={<FigmaIcon />} text="Figma" />
          <SkillBox imgUrl={<CypressIcon />} text="Cypress" />
          <SkillBox imgUrl={<StorybookIcon />} text="Storybook" />
          <SkillBox imgUrl={<GitIcon />} text="Git" />
        </div>
      </div>
    </div>
  );
};
