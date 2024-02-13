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
      <label>{label}</label>
      <input
        className="w-full h-14 border pl-3 pr-3 mt-2 rounded-md hover:border-sky-300 transition-colors"
        {...props}
      />
    </div>
  );
};

export default SingleLineTextBox;
