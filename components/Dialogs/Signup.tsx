"use client";
import { useRef, useEffect } from "react";
import DialogHeader from "./DialogHeader";
import { LogIn } from "lucide-react";

import { SignUpHeader } from "./Dialog.constants";
import { Input } from "../Input/Input";
import Button from "../Button/Button";
import DialogFooter from "./DialogFooter";
import Show from "../Show/Show";
import { useRouter, useSearchParams } from "next/navigation";

export const SignupDialog = () => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const dialogState = searchParams.get("dialog");

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("dialog", "login");
    router.push(`?${newSearchParams.toString()}`);
  };

  const handleSignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete("dialog");
    newSearchParams.set("dialog", "login");
    router.push(`?${newSearchParams.toString()}`);
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.delete("dialog");
        router.push(`?${newSearchParams.toString()}`);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchParams, router]);

  return (
    <Show when={dialogState === "signup"} fallback={null}>
      <div className="fixed inset-0 w-full h-full bg-[black] bg-opacity-50 flex items-center justify-center z-50">
        <div ref={dialogRef} className="p-3 rounded-[24px] bg-gray-500">
          <div className="bg-white   shadow-md min-w-[500px]  bg-[white] rounded-[24px] !px-[50px] !pt-[24px] !pb-[32px] ">
            <DialogHeader
              title={SignUpHeader.title}
              icon={
                <LogIn className="w-5 h-5" stroke="black" strokeWidth={2} />
              }
              subtitle={SignUpHeader.subtitle}
            />
            <div className="flex flex-col gap-6">
              <Input label="Email" placeholder="Enter your email" />
              <Input label="Password" placeholder="Enter your password" />
              <Input
                label="Confirm Password"
                placeholder="Enter your password again"
              />
              <Button className="mb-6" onClick={handleLogin}>
                Sign Up
              </Button>
            </div>
          </div>
          <DialogFooter
            label="Already have an account?"
            actionLabel="Login"
            actionClick={handleSignUp}
          />
        </div>
      </div>
    </Show>
  );
};
