"use client";
import { FaChevronDown, FaUserNinja } from "react-icons/fa6";
import { RiShare2Line } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa6";
import { IoIosAttach } from "react-icons/io";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import HomeTextArea from "../components/HomeTextArea";
import { EmptyChat } from "./EmptyChat";
import { useSelectedChat } from "../gptContexts/selectedChat";

export default function page() {
  const [newChatIcon, setNewChatIcon] = useState(true);
  const [selectedChat, setSelectedChat] = useSelectedChat();
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
            {selectedChat ? (
              <EmptyChat />
            ) : (
              <div className="border mx-auto w-5/6 m-6 mt-0 flex flex-col gap-2 p-2">
                {[
                  {
                    icon: <FaUserNinja />,
                    text: "Chat with GPT sdhksdjkejw ewj wei sdjhks sdhsoweippw ewb qweoeo wojeow  eowj fchwowe kejw ewj wei sdjhks sdhsoweippw ewb qweoeo wojeow  eowj fchwowe",
                    author: "me",
                  },
                  {
                    icon: <FaUserNinja />,
                    text: "Chat with GPT sdhksdjkejw ewj wei",
                    author: "",
                  },
                  {
                    icon: <FaUserNinja />,
                    text: "Chat with GPT sdhksdjkejw ewj wei",
                    author: "me",
                  },
                  {
                    icon: <FaUserNinja />,
                    text: "Chat with GPT sdhksdjkejw ewj wei",
                    author: "",
                  },
                  {
                    icon: <FaUserNinja />,
                    text: "Chat with GPT sdhksdjkejw ewj wei",
                    author: "me",
                  },
                  {
                    icon: <FaUserNinja />,
                    text: "Chat with GPT sdhksdjkejw ewj wei",
                    author: "",
                  },
                  {
                    icon: <FaUserNinja />,
                    text: "Chat with GPT sdhksdjkejw ewj wei",
                    author: "me",
                  },
                  {
                    icon: <FaUserNinja />,
                    text: "Chat with GPT sdhksdjkejw ewj wei",
                    author: "",
                  }
                ].map((a, key) => (
                  <div
                    key={key}
                    className={` flex ${a.author==="me"? 'justify-end' : 'justify-start'}`}
                  >
                    <span className="text-dark-primary-100 bg-dark-secondary rounded-3xl p-4 max-w-[75%]">
                      <a>{a.icon}</a>
                      {a.text}
                    </span>
                  </div>
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
