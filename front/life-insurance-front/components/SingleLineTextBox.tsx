import React from "react";

type Props = {
  label: string;
  placeholder: string;
  error?: boolean;
};

const SingleLineTextBox = ({
  label,
  error = false,
  ...props
}: Props & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="w-full flex flex-col">
      <label className={`${error ? "text-red-400" : "text-white"}`}>
        {label}
      </label>
      <input
        className={`glass w-full h-14 pl-3 pr-3 mt-2 rounded-md shadow border ${
          error ? "border-red-400 border-2 hover:border-red-400" : ""
        } hover:border-blue-700 transition-colors`}
        {...props}
      />
    </div>
  );
};

export default SingleLineTextBox;
