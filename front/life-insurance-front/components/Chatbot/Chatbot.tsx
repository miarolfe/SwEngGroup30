"use client";
import { useMemo, useState } from "react";
import {
  XMarkIcon,
  PaperAirplaneIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/20/solid";

export type Message = {
  message: String;
  from: "you" | "chatbot"; // Only accept these
};

const ChatbotMessage = ({ message }: { message: Message }) => {
  const style = useMemo(() => {
    if (message.from === "chatbot") return "bg-white rounded-bl-none";
    return "bg-violet-700 ml-auto text-white rounded-br-none";
  }, [message]);

  return (
    <div
      className={`text-sm min-h-6 w-1/2 my-2 p-2 shadow rounded-md ${style}`}
    >
      {message.message}
    </div>
  );
};

const Chatbot = ({ messages }: { messages: Message[] }) => {
  const [open, setOpen] = useState<boolean>(false);

  const buttonStyle = useMemo(() => {
    if (open) return "opacity-0 scale-50";
    return "opacity-100 scale-100";
  }, [open]);

  const chatStyle = useMemo(() => {
    if (open) return "chat-open";
    return "chat-close";
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`${buttonStyle} flex transition-all justify-center items-center glass h-20 w-20 rounded-full fixed bottom-6 right-6 hover:cursor-pointer hover:glass-darker`}
      >
        <ChatBubbleBottomCenterTextIcon className="w-6 text-white" />
      </button>
      <div
        className={`${chatStyle} flex flex-col glass w-1/3 h-[36rem] fixed bottom-6 right-6 rounded-md overflow-hidden`}
      >
        <div className="flex px-2 justify-between items-center w-full h-10 glass">
          <p className="text-slate-800">Chatbot</p>
          <XMarkIcon
            onClick={() => setOpen(false)}
            className="w-6 h-full transition-all text-slate-800 hover:text-white hover:cursor-pointer"
          />
        </div>
        <div className="overflow-scroll overflow-hidden p-2 grow">
          {messages.map((item, i) => {
            return <ChatbotMessage message={item} />;
          })}
        </div>
        <div className="flex justify-between items-center h-16 w-full border-t-slate-400 border-t-2 px-2">
          <input className="h-2/3 w-4/5 border border-white rounded-md px-4 bg-transparent outline-none text-white"></input>
          <PaperAirplaneIcon className="w-8 text-white transition-all hover:text-slate-300 hover:cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Chatbot;
