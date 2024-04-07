import React from "react";
import HeaderButton from "./HeaderButton";
import IconButton from "./IconButton";

const Header: React.FC = () => {
  return (
    <header className="flex items-center glass-slate h-24 w-full top-0 sticky text-white px-4 z-20">
      <div className="flex items-center justify-center h-full w-1/6 px-2">
        <a href="/">
          <img src="/munich_logo_name_white.png" width="100%" />
        </a>
      </div>
      <div className="grow flex justify-around text-xl">
        <a href="/">Home</a>
        <a href="/team">The Team</a>
        <a>About this project</a>
      </div>
      <a
        href="/login"
        className="border-[1px] border-white py-2 px-6 rounded-md transition-all hover:bg-white hover:text-violet-700"
      >
        Login
      </a>
    </header>
  );
};

export default Header;
