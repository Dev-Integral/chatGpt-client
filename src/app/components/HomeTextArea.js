import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { IoIosAttach } from "react-icons/io";
import { useCurrentEngine } from "../gptContexts/chatEngine";
import { useChatLog } from "../gptContexts/chatLog";
import { TbPlayerStopFilled } from "react-icons/tb";
import { useLoading } from "../gptContexts/loading";

export default function HomeTextArea({ width }) {
  const [currentGPTEngine] = useCurrentEngine();
  const [chatLog, setChatLog] = useChatLog();
  const [isDisabled, setIsDisabled] = useState(true);
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useLoading("");

  useEffect(() => {
    if (prompt) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [prompt]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (prompt?.length) {
      try {
        setChatLog([...chatLog, { text: prompt, author: "me" }]);
        setIsLoading("loading");
        setPrompt("");
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
        setIsLoading("");
      } catch (error) {
        setChatLog([
          ...chatLog,
          { text: prompt, author: "me" },
          { text: "Something went wrong", author: "gemini" },
        ]);
      }
    }
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 pl-8 pr-8">
      <div className={"relative mx-auto " + width}>
        <div className="flex justify-between items-center pl-3 pr-3 rounded-full bg-[#2f2f2f]">
          <span className="text-dark-primary-100 text-2xl p-1">
            <IoIosAttach />
          </span>
          <form onSubmit={handleSubmit} className="w-full flex items-center">
            <textarea
              rows={1}
              name="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={`Message ${currentGPTEngine}`}
              className="resize-none outline-none w-full p-3 bg-transparent text-dark-primary-100"
            />
            <button
              disabled={isDisabled}
              type="submit"
              className="rounded-full bg-dark-primary p-2"
            >
              <span className="text-dark-secondary">
                {isLoading === "loading" ? (
                  <TbPlayerStopFilled />
                ) : (
                  <FaArrowUp />
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
      <p className="text-center mt-1 text-[12px] mb-2 text-dark-primary ">
        {currentGPTEngine} may display inaccurate info, including about people,
        so double-check its responses.
      </p>
    </div>
  );
}
