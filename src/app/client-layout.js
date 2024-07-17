"use client";
import React from "react";
import GptContext from "./gptContexts/chatEngine";
import Sidebar from "./components/Sidebar";
import { FaChevronDown, FaUserNinja } from "react-icons/fa6";
import { RiShare2Line } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa6";
import { IoIosAttach } from "react-icons/io";
import { useContext, useState } from "react";

export default function ClientLayout({ children }) {
  return (
    
    <main className="h-screen flex">
      <Sidebar />
      <section className="w-4/6 md:w-full relative bg-[#2121w2] p-2">
        <nav className="flex justify-between">
          <div className="flex items-center gap-2">
            ChatGPT <FaChevronDown />
          </div>
          <div className="flex gap-2">
            <RiShare2Line />
            <FaUserNinja />
          </div>
        </nav>
      </section>
      {children}
    </main>
  );
}
