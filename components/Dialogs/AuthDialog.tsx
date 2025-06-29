"use client";
import { useRef, useEffect, useState } from "react";
import DialogHeader from "./DialogHeader";
import { LogIn } from "lucide-react";

import {
  LoginFooterConstants,
  LoginHeader,
  SignUpFooterConstants,
  SignUpHeader,
} from "./Dialog.constants";
import { Input } from "../Input/Input";
import Button from "../Button/Button";
import DialogFooter from "./DialogFooter";
import Show from "../Show/Show";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthField, DialogType } from "./Dialog.types";
import { toast } from "react-toastify";
import { userLogin } from "@/utils/auth/auth";
import { defaultFormState } from "./Dialog.constants";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

export const SignupDialog = () => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setUser } = useContext(AuthContext);
  const dialogState = searchParams.get("dialog");

  const [formState, setFormState] = useState(defaultFormState);

  const handleCTAClicked = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedDialog === DialogType.LOGIN) {
      const isLoggedIn = userLogin(formState.email, formState.password);
      if (isLoggedIn) {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.delete("dialog");
        setUser(formState.email);
        router.push(`?${newSearchParams.toString()}`);
      } else {
        toast.error("Invalid credentials");
        setFormState(defaultFormState);
      }
    } else {
      toast.error("Functionality not implemented");
      setFormState(defaultFormState);
      setUser("");
    }
  };

  const handleInputUpdate = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: AuthField,
  ) => {
    setFormState({ ...formState, [field]: e.target.value });
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.delete("dialog");
      router.push(`?${newSearchParams.toString()}`);
    }
  };

  const handleFooterAction = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set(
      "dialog",
      dialogState === DialogType.LOGIN ? DialogType.SIGNUP : DialogType.LOGIN,
    );
    router.push(`?${newSearchParams.toString()}`);
  };

  const selectedDialog =
    dialogState === "login" ? DialogType.LOGIN : DialogType.SIGNUP;
  const headerConstants =
    selectedDialog === DialogType.LOGIN ? LoginHeader : SignUpHeader;
  const buttonLabel =
    selectedDialog === DialogType.LOGIN ? "Sign In" : "Sign Up";
  const footerConstants =
    selectedDialog === DialogType.LOGIN
      ? LoginFooterConstants
      : SignUpFooterConstants;

  // Handle click outside
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

  return (
    <Show when={dialogState} fallback={null}>
      <form onSubmit={handleCTAClicked}>
        <div className="fixed inset-0 w-full h-full bg-[black] bg-opacity-50 flex items-center justify-center z-50">
          <div ref={dialogRef} className="p-3 rounded-[24px] bg-gray-500">
            <div className="bg-white   shadow-md min-w-[500px]  bg-[white] rounded-[24px] !px-[50px] !pt-[24px] !pb-[32px] ">
              <DialogHeader
                title={headerConstants.title}
                icon={
                  <LogIn className="w-5 h-5" stroke="black" strokeWidth={2} />
                }
                subtitle={headerConstants.subtitle}
              />
              <div className="flex flex-col gap-6">
                <Input
                  label="Email"
                  placeholder="Enter your email"
                  onChange={(e) => handleInputUpdate(e, AuthField.EMAIL)}
                />
                <Input
                  label="Password"
                  placeholder="Enter your password"
                  onChange={(e) => handleInputUpdate(e, AuthField.PASSWORD)}
                />
                <Show
                  when={selectedDialog === DialogType.SIGNUP}
                  fallback={null}
                >
                  <Input
                    label="Confirm Password"
                    placeholder="Enter your password again"
                    onChange={(e) =>
                      handleInputUpdate(e, AuthField.CONFIRM_PASSWORD)
                    }
                  />
                </Show>
                <Button className="mb-6" type="submit" role="button">
                  {buttonLabel}
                </Button>
              </div>
            </div>
            <DialogFooter
              label={footerConstants.label}
              actionLabel={footerConstants.actionLabel}
              actionClick={handleFooterAction}
            />
          </div>
        </div>
      </form>
    </Show>
  );
};
