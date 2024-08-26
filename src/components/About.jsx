import { Tag } from "./Tag";

export const About = () => {
  return (
    <div
      className=" bg-[#F9FAFB] dark:bg-[#111827] flex justify-center w-full"
      id="about"
    >
      <div className=" container flex flex-col  md:items-center  md:py-24 py-16 md:px-8 gap-12n px-4 md:gap-[48px] gap-6">
        <div className="flex justify-center">
          <Tag text="About me" />
        </div>
        <div className=" container flex flex-col justify-between gap-12 md:flex-row">
          <div className="md:w-1/2 flex-col align-start md:flex hidden">
            <img
              className="w-[440px] h-[520px]"
              src="/profilePictureTwo.png"
              alt=""
            />
          </div>
          <div className="md:hidden flex justify-center">
            <img src="/profilepicmobile2.png" alt="" />
          </div>
          <div className="md:w-1/2 flex flex-col gap-[24px] ">
            <p className="md:text-[30px] text-[24px] text-[#111827] dark:text-[#F9FAFB] font-semibold">
              Curious about me? Here you have it:
            </p>
            <div className="flex flex-col gap-[16px] text-[16px] text-[#4B5563] dark:text-[#D1D5DB] font-normal">
              <p>
                I'm a designer turned full stack developer, passionate about
                React.js and Node.js. I excel in blending technical and visual
                aspects to craft exceptional digital products, prioritizing user
                experience, precise design, and optimized code.
              </p>
              <p>
                Since starting my web development journey in 2015, I've embraced
                challenges and kept up with the latest tech trends. Now in my
                early thirties, seven years in, I'm building cutting-edge web
                apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase,
                and more.
              </p>
              <p>
                With a progressive mindset, I enjoy the entire product
                development process, from ideation to execution. Off duty,
                you'll find me on Twitter, tracking startup journeys, or
                unwinding. Follow me for tech insights and public project
                updates on Twitter or GitHub.
              </p>
              <p>Finally, some quick bits about me.</p>
              <div className="flex gap-[10px]">
                <ul className="list-disc list-outside pl-5 flex self-stretch flex-col w-1/2 ">
                  <li>B.E. in Computer Engineering</li>
                  <li>Full time freelancer</li>
                </ul>
                <ul className="list-disc list-outside pl-5 flex self-stretch flex-col w-1/2">
                  <li>Avid learner</li>
                </ul>
              </div>

              <p>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
