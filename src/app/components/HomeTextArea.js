import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { IoIosAttach } from "react-icons/io";

export default function HomeTextArea({width}) {
  const [currentGPTEngine] = useState("ChatGPT");
  return (
    <div className="absolute bottom-0 left-0 right-0 pl-8 pr-8">
          <div className={"relative mx-auto " + width}>
            <div className="flex justify-between items-center pl-3 pr-3 rounded-full bg-[#2f2f2f]">
              <span className="text-dark-primary-100 text-2xl p-1">
                <IoIosAttach />
              </span>
              <textarea
                rows={1}
                placeholder={`Message ${currentGPTEngine}`}
                className="resize-none outline-none w-full p-3 bg-transparent text-dark-primary-100"
              />
              <span className="rounded-full bg-dark-primary text-dark-secondary p-2 mx-2">
                <FaArrowUp />
              </span>
            </div>
          </div>
          <p className="text-center mt-1 text-[12px] mb-2 text-dark-primary ">
            {currentGPTEngine} can make mistakes. Check important info.
          </p>
        </div>
  );
}
