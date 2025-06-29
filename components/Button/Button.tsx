import { FC } from "react";

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      className={`bg-primary-50 text-white p-2 rounded-lg h-[44px]  transition-all disabled:opacity-50 disabled:cursor-not-allowed w-full text-[white] text-[12px] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
