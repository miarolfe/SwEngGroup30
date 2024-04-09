"use client";
"use client";
import Chatbot, { type Message } from "@/components/Chatbot/Chatbot";
import UnderWriterQuoteCard from "@/components/UnderwriterQuoteCard";
import { useState, useEffect } from "react";
import UnderwriterQuoteList from "@/components/UnderwriterQuoteList"

const sample: Message[] = [
  {
    message: "Hello Admin! What can I help you with today?",
    from: "chatbot",
  },
];

const UnderwriterPage = () => {
  const [quoteData, setQuoteData] = useState([]);

  const initSetup = async () => {
      await fetch("http://18.168.50.21:80/api/quoteRequest/get").then((data) => data.json()).then((data) => setQuoteData(data));
  }
  
  useEffect(() => {
      initSetup();
  }, []);

  return (
    <div className="h-full w-full">
      <div className="flex flex-col p-2 h-full">
        <div className="text-white text-6xl font-semibold">Hello, Admin!</div>
        <div className="glass w-full h-96 rounded-md p-2">Test</div>
        <Chatbot messages={sample} />
      </div>
    </div>
  );
};

export default UnderwriterPage;
