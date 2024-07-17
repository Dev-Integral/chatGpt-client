"use client";
import { createContext, useContext, useState } from "react";

const Context = createContext();

export function CurrentEngineProvider({ children }) {
  const [currentGPTEngine, setCurrentGPTEngine] = useState("ChatGPT");
  return (
    <Context.Provider value={[currentGPTEngine, setCurrentGPTEngine]}>
      {children}
    </Context.Provider>
  );
}
export function useCurrentEngine() {
  return useContext(Context);
}
