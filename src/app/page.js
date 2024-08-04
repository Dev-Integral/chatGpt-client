"use client";

import Head from "next/head";
import HomeTextArea from "./components/HomeTextArea";
import { Navbar } from "./components/Navbar";
import { ChatGptLogo } from "./components/ChatGptLogo";
import { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user } = useUser();
  const router = useRouter();
  <Head>
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
  </Head>;
useEffect(()=>{
  console.log(user)
if(user?.name){
  router.push("/chat")
}
}, [user?.name])
  return (
    <main className="h-screen flex">
      <section className="w-4/6 md:w-full mx-auto relative bg-dark-grey pl-2 pr-2">
        <Navbar />
        <div className="w-4/6 mx-auto flex flex-col items-center justify-end center h-[80%] ">
          <div className="w-full flex justify-center items-center text-2xl text-dark-primary-100">
            <ChatGptLogo size={55} className={"rounded-full border border-dark-secondary p-2 mb-14"} />
          </div>
          <div className="grid grid-cols-2 gap-2 w-full pl-3 pr-3 pb-12">
            <div
              className="border border-dark-secondary text-dark-primary p-2
             rounded-2xl"
            >
              <span className="text-white font-semibold">Write a thank-you note</span>
              <br />
              To my interviewer
            </div>
            <div
              className="border border-dark-secondary text-dark-primary p-2
             rounded-2xl"
            >
              <span className="text-white font-semibold">Write a thank-you note</span>
              <br />
              To my interviewer
            </div>
            <div
              className="border border-dark-secondary text-dark-primary p-2
             rounded-2xl"
            >
              <span className="text-white font-semibold">Write a thank-you note</span>
              <br />
              To my interviewer
            </div>
            <div
              className="border border-dark-secondary text-dark-primary p-2
             rounded-2xl"
            >
              <span className="text-white font-semibold">Write a thank-you note</span>
              <p>To my interviewer</p>
            </div>
          </div>
        </div>
        <HomeTextArea width={"w-4/6"} />
      </section>
    </main>
  );
}
