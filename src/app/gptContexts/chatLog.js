"use client";
import { createContext, useContext, useState } from "react";

const Context = createContext();

export function ChatLogProvider({ children }) {
  const [chatLog, setChatLog] = useState([]);
  return (
    <Context.Provider value={[chatLog, setChatLog]}>
      {children}
    </Context.Provider>
  );
}
export function useChatLog() {
  return useContext(Context);
}
