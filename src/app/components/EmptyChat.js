import React from "react";
import { ChatGptLogo } from "./ChatgptLogo";
import { useChatLog } from "../gptContexts/chatLog";
import { useLoading } from "../gptContexts/loading";
import SuggestedLoggedInPrompts from "./SuggestedLoggedInPrompts";

export const EmptyChat = () => {
  const [chatLog, setChatLog] = useChatLog();
  const [, setIsLoading] = useLoading();

  const handleClick = async (prompt) => {
    try {
      setIsLoading("loading");
      setChatLog([...chatLog, { text: prompt, author: "me" }]);
      const res = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setChatLog([
        ...chatLog,
        { text: prompt, author: "me" },
        { text: data.result, author: "gemini" },
      ]);
    } catch (error) {
      setChatLog([
        ...chatLog,
        { text: prompt, author: "me" },
        { text: "Something went wrong", author: "gemini" },
      ]);
    }
    setIsLoading("");
  };
 
  return (
    <div className="flex flex-col px-2 items-center justify-center h-full">
      <ChatGptLogo
        size={50}
        className={
          "mb-14 text-dark-primary-100 border border-dark-secondary rounded-full p-2"
        }
      />
      <SuggestedLoggedInPrompts handleClick={handleClick} />
    </div>
  );
};
