"use client";

import Sidebar from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import HomeTextArea from "../components/HomeTextArea";
import { EmptyChat } from "../components/EmptyChat";
import { useChatLog } from "../gptContexts/chatLog";
import { ChatLog } from "../components/ChatLog";
import Loading from "../components/Loading";
import { useLoading } from "../gptContexts/loading";

export default function Page() {
  const [chatLog] = useChatLog();
  const [isLoading] = useLoading();
  return (
    <main className="h-screen flex">
      <Sidebar />
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
            {isLoading === "loading" && (
              <Loading
                className={"flex items-center text-dark-primary justify-center"}
              />
            )}
          </div>
          <HomeTextArea width={"w-5/6"} />
        </div>
      </section>
    </main>
  );
}
