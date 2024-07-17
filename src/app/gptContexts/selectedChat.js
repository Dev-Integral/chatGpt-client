"use client";
import { createContext, useContext, useState } from "react";

const Context = createContext();

export function SelectedChatProvider({ children }) {
  const [selectedChat, setSelectedChat] = useState("");
  return (
    <Context.Provider value={[selectedChat, setSelectedChat]}>
      {children}
    </Context.Provider>
  );
}
export function useSelectedChat() {
  return useContext(Context);
}
