import React from "react";

type Props = {
  label: string;
  placeholder: string;
};

const SingleLineTextBox = ({
  label,
  ...props
}: Props & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="w-full flex flex-col">
      <label className="text-white">{label}</label>
      <input
        className="glass w-full h-14 border pl-3 pr-3 mt-2 rounded-md shadow hover:border-sky-300 transition-colors"
        {...props}
      />
    </div>
  );
};

export default SingleLineTextBox;
