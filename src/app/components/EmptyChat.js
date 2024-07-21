import React from "react";
import { ChatGptLogo } from "./ChatgptLogo";
import { TbBlockquote, TbSchool } from "react-icons/tb";
import { PiLightbulb } from "react-icons/pi";
import { RiCodeBoxLine } from "react-icons/ri";
import { useChatLog } from "../gptContexts/chatLog";
import { useLoading } from "../gptContexts/loading";

export const EmptyChat = () => {
  const [ chatLog,setChatLog] = useChatLog();
  const [, setIsLoading] = useLoading();

  const handleClick = async(prompt) => {
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
      <div className="grid grid-cols-2 md:grid-cols-4 pb-12 gap-4">
        <div
          onClick={() => handleClick("Cognitive behavioral therapy")}
          className="border cursor-pointer hover:bg-dark-secondary border-dark-secondary text-dark-primary p-3 rounded-2xl h-24 w-40"
        >
          <span className="text-dark-primary">
            <TbSchool className="mb-1 text-[#fca103]" />
            Cognitive behavioral therapy
          </span>
        </div>
        <div
          onClick={() => handleClick("Professional email etiquette")}
          className="border cursor-pointer hover:bg-dark-secondary border-dark-secondary text-dark-primary p-3 rounded-2xl h-24 w-40"
        >
          <span className="text-dark-primary">
            <TbBlockquote className="mb-1 text-blue-400" />
            Professional email etiquette
          </span>
        </div>
        <div
          onClick={() => handleClick("Unique brainstorm ideas")}
          className="border cursor-pointer hover:bg-dark-secondary border-dark-secondary text-dark-primary p-3 rounded-2xl h-24 w-40"
        >
          <span className="text-dark-primary">
            <PiLightbulb className="mb-1 text-red-400" />
            Unique brainstorm ideas
          </span>
        </div>
        <div
          onClick={() => handleClick("JavaScript DOM manipulation")}
          className="border cursor-pointer hover:bg-dark-secondary border-dark-secondary text-dark-primary p-3 rounded-2xl h-24 w-40"
        >
          <span className="text-dark-primary">
            <RiCodeBoxLine className="text-green-400 mb-1" />
            JavaScript DOM manipulation
          </span>
        </div>
      </div>
    </div>
  );
};
