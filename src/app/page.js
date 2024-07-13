"use client";
import { FaChevronDown, FaUserNinja } from "react-icons/fa6";
import { RiShare2Line } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa6";
import { IoIosAttach } from "react-icons/io";
import { useState } from "react";
import Sidebar from "./components/Sidebar";

export default function Home() {
  const [newChatIcon, setNewChatIcon] = useState(false);
  const [currentGPTEngine, setCurrentGPTEngine] = useState("ChatGPT");
  return (
    <main className="h-screen flex">
      <Sidebar
        newChatIcon={newChatIcon}
        setNewChatIcon={setNewChatIcon}
        currentGPTEngine={currentGPTEngine}
        setCurrentGPTEngine={setCurrentGPTEngine}
      />

      <section className="w-4/6 md:w-full relative bg-[#212121] p-2">
        <nav className="flex justify-between">
          <div className="flex items-center gap-2">
            ChatGPT <FaChevronDown />
          </div>
          <div className="flex gap-2">
            <RiShare2Line />
            <FaUserNinja />
          </div>
        </nav>
        <div className="absolute bottom-0 left-0 right-0 pl-12 pr-12">
          <div className="relative">
            <div className="flex justify-between items-center pl-3 pr-3 rounded-full bg-[#2f2f2f]">
              <span>
                <IoIosAttach />
              </span>
              <textarea
                rows={1}
                placeholder={`Message ${currentGPTEngine}`}
                className="resize-none outline-none w-full p-3 bg-transparent text-[#ececec]"
              />
              <span className="rounded-full p-2">
                <FaArrowUp />
              </span>
            </div>
          </div>
          <p className="text-center mt-2">
            {currentGPTEngine} can make mistakes. Check important info.
          </p>
        </div>
      </section>
    </main>
  );
}
