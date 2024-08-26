export const SkillBox = ({ imgUrl, text }) => {
  return (
    <div className="h-[100px] w-[88px] flex flex-col items-center gap-2">
      {imgUrl}

      <p className="dark:text-[#D1D5DB]">{text}</p>
    </div>
  );
};
