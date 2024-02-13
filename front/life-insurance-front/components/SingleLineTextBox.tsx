import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
}

const SingleLineTextBox = ({ label, ...props }: Props) => {
  return (
    <div className="w-11/12 flex flex-col">
      <label>{label}</label>
      <input
        className="w-full h-14 border pl-3 pr-3 mt-2 rounded-md hover:border-sky-300 transition-colors"
        {...props}
      />
    </div>
  );
};

export default SingleLineTextBox;
