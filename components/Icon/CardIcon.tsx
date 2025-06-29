"use client";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useAuthDialog } from "@/hooks/useAuthDialog";
export type CardIconProps = {
  icon: React.ReactNode;
};
export const CardIcon = ({ icon }: CardIconProps) => {
  const { user } = useContext(AuthContext);
  const { openAuthDialog } = useAuthDialog();
  const handleIconClick = () => {
    if (!user) {
      openAuthDialog();
      return;
    }
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
