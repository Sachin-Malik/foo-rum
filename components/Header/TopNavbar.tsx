"use client";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { LogIn, LogOut } from "lucide-react";

const TopNavbar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { user, setUser, isLoggedIn } = useContext(AuthContext);
  console.log({ isLoggedIn });

  const handleHeaderCTA = () => {
    if (isLoggedIn) {
      handleLogoutClick();
    } else {
      handleLoginClick();
    }
  };
  const handleLoginClick = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("dialog", "login");
    router.push(`?${newSearchParams.toString()}`);
  };

  const handleLogoutClick = () => {
    setUser("");
    router.push("/");
  };

  return (
    <div className="fixed top-0 z-50 left-0 w-full bg-[white] p-2 flex flex-row justify-between px-[40px] py-4">
      <div className="flex flex-row gap-2 items-center">
        <div className="w-8 h-5 rounded-full border-[4px] border-[black]"></div>
        <span className="font-inter text-heading3 font-bold">foo-rum</span>
      </div>
      <button
        className="flex flex-row gap-2 items-center"
        onClick={handleHeaderCTA}
      >
        <p className="font-inter text-bodyregular font-semibold">
          {isLoggedIn ? "Sign out" : "Login"}
        </p>
        {isLoggedIn ? (
          <LogOut className="font-inter w-5 h-5" />
        ) : (
          <LogIn className="font-inter w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default TopNavbar;
