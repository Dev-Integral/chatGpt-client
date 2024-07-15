import { createContext, useState } from 'react';

const GptContext = createContext();

export function MyProvider({ children }) {
  const [currentGPTEngine, setCurrentGPTEngine] = useState("ChatGPT");

  return (
    <GptContext.Provider value={{ currentGPTEngine, setCurrentGPTEngine }}>
      {children}
    </GptContext.Provider>
  );
}

export default GptContext;
