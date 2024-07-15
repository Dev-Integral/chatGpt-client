import React from "react";
import { ChatGptLogo } from "../components/ChatGptLogo";
import { TbBlockquote, TbSchool } from "react-icons/tb";
import { PiLightbulb } from "react-icons/pi";
import { AiTwotoneCode } from "react-icons/ai";

export const EmptyChat = () => {
  return (
    <div className="flex flex-col px-2 items-center justify-center h-full">
      <ChatGptLogo size={47} className={"mb-14 text-dark-primary-100"} />
      <div className="grid grid-cols-4 pb-12 gap-4">
        <div className="border cursor-pointer hover:bg-dark-secondary border-dark-secondary text-dark-primary p-3 rounded-2xl h-24 w-40">
          <span className="text-dark-primary">
            <TbSchool className="mb-1" />
            Cognitive behavioral therapy
          </span>
        </div>
        <div className="border cursor-pointer hover:bg-dark-secondary border-dark-secondary text-dark-primary p-3 rounded-2xl h-24 w-40">
          <span className="text-dark-primary">
            <TbBlockquote className="mb-1" />
            Professional email etiquette
          </span>
        </div>
        <div className="border cursor-pointer hover:bg-dark-secondary border-dark-secondary text-dark-primary p-3 rounded-2xl h-24 w-40">
          <span className="text-dark-primary">
            <PiLightbulb className="mb-1" />
            Unique brainstorm ideas
          </span>
        </div>
        <div className="border cursor-pointer hover:bg-dark-secondary border-dark-secondary text-dark-primary p-3 rounded-2xl h-24 w-40">
          <span className="text-dark-primary">
            <AiTwotoneCode className="text-[red] mb-1" />
            JavaScript DOM manipulation
          </span>
        </div>
      </div>
    </div>
  );
};
