"use client";
import React from "react";
import { LuPanelLeftClose } from "react-icons/lu";
import { FaPenToSquare } from "react-icons/fa6";
import { useSelectedChat } from "../gptContexts/selectedChat";
import { useChatLog } from "../gptContexts/chatLog";
import { ChatGptLogo } from "./ChatGptLogo";
import { MdManageHistory } from "react-icons/md";

export default function Sidebar() {
  const [newChatIcon, setNewChatIcon] = useState(true);

  const [, setSelectedChat] = useSelectedChat();
  const [, setChatLog] = useChatLog();
  const clearChat = () => {
    setChatLog([]);
  };

  return (
    <aside className="w-2/6 md:w-[320px] p-2 bg-[#171717]">
      <div className="flex justify-between items-center">
        <button
          title="close sidebar"
          className="text-dark-primary hover:bg-dark-grey p-2 rounded-lg"
        >
          <LuPanelLeftClose size={22} className="hover:bg-dark-grey" />
        </button>
        <button
          title="New Chat"
          className="text-dark-primary hover:bg-dark-grey h-full p-2 rounded-lg"
        >
          <FaPenToSquare
            size={18}
            className="hover:text-dark-primary-100 "
            onClick={setSelectedChat("")}
          />
        </button>
      </div>
      <div
        className="flex justify-between items-center mt-3 h-10 p-3 rounded-lg hover:bg-dark-grey"
        onMouseEnter={() => setNewChatIcon(true)}
        onMouseLeave={() => setNewChatIcon(false)}
      >
        <div className="flex items-center gap-3 text-dark-primary">
          <ChatGptLogo size={24} className={"bprder border-dark-primary-100"} />
          <p className="text-dark-primary-100 text-sm">ChatGPT</p>
        </div>
        {newChatIcon && (
          <button title="New Chat">
            <FaPenToSquare
              onClick={() => clearChat()}
              className="hover:text-dark-primary-100 text-dark-primary"
            />
          </button>
        )}
      </div>
      <div className="flex justify-between items-center cursor-pointer mt-3 h-10 p-3 rounded-lg hover:bg-dark-grey">
        <div className="flex items-center gap-3">
          <MdManageHistory className="text-dark-primary-100" />

          <p className="text-dark-primary-100 text-sm ">Chat History</p>
        </div>
      </div>
    </aside>
  );
}
