"use client";
import { createContext, useContext, useState } from "react";

const Context = createContext();

export function ChatLoading({ children }) {
  const [isLoading, setIsLoading] = useState("");
  return (
    <Context.Provider value={[isLoading, setIsLoading]}>
      {children}
    </Context.Provider>
  );
}
export function useLoading() {
  return useContext(Context);
}
