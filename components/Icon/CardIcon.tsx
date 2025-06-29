"use client";
import { toast } from "react-toastify";
export type CardIconProps = {
  icon: React.ReactNode;
};
export const CardIcon = ({ icon }: CardIconProps) => {
  const handleIconClick = () => {
    toast.error("Functionality not implemented");
  };
  return (
    <button
      className="flex flex-row items-center justify-center rounded-full  hover:scale-125 transition-all duration-300 cursor-pointer"
      onClick={handleIconClick}
    >
      {icon}
    </button>
  );
};
