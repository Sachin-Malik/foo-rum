"use client";

import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { isLoggedIn as isUserLoggedIn } from "../utils/auth/auth";

export const AuthContext = createContext({
  user: "",
  setUser: (user: string) => {},
  isLoggedIn: false,
});

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useLocalStorage("user", "");
  console.log({ user });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(isUserLoggedIn(user));
  }, [user]);

  console.log({ isLoggedIn });
  return (
    <AuthContext.Provider value={{ user, setUser, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
