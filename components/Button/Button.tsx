import React from "react";
import { FC } from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      className={`bg-primary-50 text-white p-2 rounded-lg h-[44px]  transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full text-[white] text-[12px] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
