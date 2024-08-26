import { useState } from "react";
import { SunIcon } from "./svg/SunIcon";
import { MoonIcon } from "./svg/MoonIcon";

export const ToggleTheme = () => {
  const [dark, setDark] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
    setToggleIcon((prevState) => !prevState);
  };
  return (
    <div>
      {toggleIcon ? (
        <button onClick={toggleTheme}>
          <SunIcon />
        </button>
      ) : (
        <button onClick={toggleTheme}>
          <MoonIcon />
        </button>
      )}
    </div>
  );
};
