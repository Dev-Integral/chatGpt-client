"use client";
import { FaUserNinja } from "react-icons/fa6";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import HomeTextArea from "../components/HomeTextArea";
import { EmptyChat } from "./EmptyChat";
import { useSelectedChat } from "../gptContexts/selectedChat";
import { ChatGptLogo } from "../components/ChatGptLogo";
import { useChatLog } from "../gptContexts/chatLog";
import { ChatLog } from "../components/ChatLog";

export default function page() {
  const [newChatIcon, setNewChatIcon] = useState(true);
  const [chatLog] = useChatLog();
  const [currentGPTEngine, setCurrentGPTEngine] = useState("ChatGPT");
  return (
    <main className="h-screen flex">
      <Sidebar
        newChatIcon={newChatIcon}
        setNewChatIcon={setNewChatIcon}
        currentGPTEngine={currentGPTEngine}
        setCurrentGPTEngine={setCurrentGPTEngine}
      />
      <section className="md:w-full relative bg-dark-grey">
        <Navbar />
        <div className="overflow-auto h-[75%]">
          <div className="h-full">
            {!chatLog.length ? (
              <EmptyChat />
            ) : (
              <div className="mx-auto w-5/6 m-6 mt-0 flex flex-col gap-2 p-2">
                {chatLog.map((log, key) => (
                  <ChatLog log={log} key={key} />
                ))}
              </div>
            )}
          </div>
          <HomeTextArea width={"w-5/6"} />
        </div>
      </section>
    </main>
  );
}
