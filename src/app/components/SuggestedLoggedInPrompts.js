import React from "react";
import { TbBlockquote, TbSchool } from "react-icons/tb";
import { PiLightbulb } from "react-icons/pi";
import { RiCodeBoxLine } from "react-icons/ri";
function SuggestedLoggedInPrompts({handleClick}) {
  const suggestedPrompts = [
    {
      text: "Cognitive behavioral therapy",
      icon: <TbSchool className="mb-1 text-[#fca103]" />,
    },
    {
      icon: <TbBlockquote className="mb-1 text-blue-400" />,
      text: "Professional email etiquette",
    },
    {
      icon: <PiLightbulb className="mb-1 text-red-400" />,
      text: "Unique brainstorm ideas",
    },
    {
      icon: <RiCodeBoxLine className="text-green-400 mb-1" />,
      text: "JavaScript DOM manipulation",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 pb-12 gap-4">
        {suggestedPrompts.map((item, key) => (
          <div
            key={key}
            onClick={() => handleClick(item.text)}
            className="border cursor-pointer hover:bg-dark-secondary border-dark-secondary text-dark-primary p-3 rounded-2xl h-24 w-40"
          >
            <span className="text-dark-primary">
              {item.icon}
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuggestedLoggedInPrompts;
