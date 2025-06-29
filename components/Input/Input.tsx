import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <div className="flex flex-col gap-1 rounded-md items-start w-full">
      <label
        className="!text-[12px] text-bodybold font-semibold pl-1"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        id={label}
        type="text"
        className="border transition-all duration-300 h-[44px] rounded-lg w-full border-none outline-none focus:ring-2 focus:ring-primary-70 bg-gray-400 placeholder:text-[black]/60 text-[14px] p-2 placeholder:text-[12px]"
        {...rest}
      />
    </div>
  );
};
