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

export default function page() {
  const [newChatIcon, setNewChatIcon] = useState(true);
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
        <div className="w-5/6 mx-auto h-[75%]">
          {newChatIcon ? (
            <EmptyChat />
          ) : (
            <div className="border m-6 mt-0 h-full border"></div>
          )}
          <HomeTextArea width={"w-5/6"} />
        </div>
      </section>
    </main>
  );
}
