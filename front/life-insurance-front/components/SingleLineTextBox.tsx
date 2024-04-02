import React, { ChangeEvent } from "react";

type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: boolean;
};

const SingleLineTextBox = ({
  label,
  value,
  onChange,
  error = false,
}: // ...props
Props) => {
  return (
    <div className="w-full flex flex-col">
      <label className={`${error ? "text-red-400" : "text-white"}`}>
        {label}
      </label>
      <input
        className={`placeholder:text-slate-300 glass w-full h-14 pl-3 pr-3 mt-2 rounded-md shadow border ${
          error ? "border-red-400 border-2 hover:border-red-400" : ""
        } hover:border-blue-700 transition-colors`}
        value={value}
        onChange={onChange}
        // {...props}
      />
    </div>
  );
};

export default SingleLineTextBox;
