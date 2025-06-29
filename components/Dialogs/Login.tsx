"use client";
import { useRef, useEffect, useState } from "react";
import DialogHeader from "./DialogHeader";
import { LogIn } from "lucide-react";
import { LoginHeader } from "./Dialog.constants";
import { Input } from "../Input/Input";
import Button from "../Button/Button";
import DialogFooter from "./DialogFooter";
import Show from "../Show/Show";
import { useRouter, useSearchParams } from "next/navigation";

export const LoginDialog = () => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const dialogState = searchParams.get("dialog");
  const [showing, setShowing] = useState(false);

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("dialog", "login");
    router.push(`?${newSearchParams.toString()}`);
  };

  const handleSignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("dialog", "signup");
    router.push(`?${newSearchParams.toString()}`);
  };

  useEffect(() => {
    if (dialogState === "login") {
      setShowing(true);
    } else {
      // Delay for exit animation
      const timeout = setTimeout(() => setShowing(false), 200);
      return () => clearTimeout(timeout);
    }
  }, [dialogState]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.delete("dialog");
        router.push(`?${newSearchParams.toString()}`);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchParams, router]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.delete("dialog");
      router.push(`?${newSearchParams.toString()}`);
    }
  };

  return (
    <Show when={false} fallback={null}>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-[black] bg-opacity-50 transition-opacity duration-300 ease-out ${
          dialogState === "login" ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          ref={dialogRef}
          className={`transform transition-all duration-300 ${
            dialogState === "login"
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-5 scale-95 opacity-0"
          }`}
        >
          <div className="p-3 rounded-[24px] bg-gray-500">
            <div className="bg-[white] shadow-md min-w-[500px] rounded-[24px] px-[50px] pt-[24px] pb-[32px]">
              <DialogHeader
                title={LoginHeader.title}
                icon={
                  <LogIn className="w-5 h-5" stroke="black" strokeWidth={2} />
                }
                subtitle={LoginHeader.subtitle}
              />
              <div className="flex flex-col gap-6">
                <Input label="Email" placeholder="Enter your email" />
                <Input label="Password" placeholder="Enter your password" />
                <Button className="mb-6" onClick={handleLogin}>
                  Sign in
                </Button>
              </div>
            </div>
            <DialogFooter
              label="Don't have an account?"
              actionLabel="Sign Up"
              actionClick={handleSignUp}
            />
          </div>
        </div>
      </div>
    </Show>
  );
};
