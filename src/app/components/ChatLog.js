import React from "react";
import { ChatGptLogo } from "./ChatGptLogo";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'

export const ChatLog = ({ log, key }) => {
  return (
    <div
      key={key}
      className={` flex ${
        log.author === "me" ? "justify-end" : "justify-start"
      }`}
    >
      <span
        className={`flex flex items-start gap-2 text-dark-primary-100 ${
          log.author !== "me" ? "" : "bg-dark-secondary max-w-[60%]"
        } rounded-3xl p-4`}
      >
        {log.author !== "me" && (
          <ChatGptLogo
            size={35}
            className={"p-2 rounded-full border border-dark-secondary"}
          />
        )}
        <div className={``}>
          <Markdown remarkPlugins={[remarkGfm]}>{log.text}</Markdown>
        </div>
      </span>
    </div>
  );
};
