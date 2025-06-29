"use client";
import { LogIn } from "lucide-react";

const TopNavbar = () => {
  return (
    <div className="w-full bg-[white] p-2 flex flex-row justify-between px-8 py-4">
      <div className="flex flex-row gap-2 items-center">
        <div className="w-8 h-5 rounded-full border-[4px] border-[black]"></div>
        <span className="font-inter text-heading3 font-bold">foo-rum</span>
      </div>
      <button className="flex flex-row gap-2 items-center">
        <p className="font-inter text-bodyregular font-semibold">Login</p>
        <LogIn className="font-inter w-5 h-5" />
      </button>
    </div>
  );
};

export default TopNavbar;
