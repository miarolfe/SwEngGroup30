import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex items-center w-full h-32 glass-slate text-white px-4">
      <div className="h-full w-fit flex items-center justify-around p-2">
        <a
          className="h-full"
          href="https://www.tcd.ie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/tcd_white.png"
            alt="Emblem of Trinity College Dublin"
            className="h-full max-w-full"
          />
        </a>
        <a
          className="h-full flex items-center"
          href="https://www.munichre.com/en.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/munich_logo_white.png"
            alt="munich_re_logo"
            className="h-3/5 max-w-full"
          />
        </a>
      </div>
      <div className="flex justify-end grow">
        <p>© SwEng Group 30, 2024. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
