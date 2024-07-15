"use client";
import { FaChevronDown, FaUserNinja } from "react-icons/fa6";
import { RiShare2Line } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa6";
import { IoIosAttach } from "react-icons/io";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import HomeTextArea from "../components/HomeTextArea";

export default function page() {
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

      <section className="w-6/6 md:w-full relative bg-[#212121]">
        <Navbar />
        
        <div className="w-4/6">
          <HomeTextArea width={"w-5/6"} />
        </div>
        
      </section>
    </main>
  );
}
