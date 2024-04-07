"use client";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import {
  XMarkIcon,
  PaperAirplaneIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/20/solid";
import { lexClient } from "@/libs/lexClient";
import { RecognizeTextCommand } from "@aws-sdk/client-lex-runtime-v2";
import Skeleton from "react-loading-skeleton";

import { type ReturnType, parseResponseHelper } from "./ParseResponse";

import Modal from "./Modal";

import "react-loading-skeleton/dist/skeleton.css";

export type Message = {
  message: string;
  from: "you" | "chatbot"; // Only accept these
};

const ChatbotMessagePlaceholder = () => {
  return (
    <div
      className={`text-sm min-h-6 w-3/5 my-2 p-2 shadow rounded-md bg-white rounded-bl-none`}
    >
      <Skeleton />
    </div>
  );
};

const ChatbotMessage = ({ message }: { message: Message }) => {
  const [noResponse, setNoResponse] = useState<boolean | null>(null);

  useEffect(() => {
    const res = parseResponseHelper(message.message);

    for (var key in res) {
      if (res[key as keyof ReturnType].length > 0) {
        setNoResponse(false);
        return;
      }
    }
    setNoResponse(true);
  }, [message]);

  const style = useMemo(() => {
    if (message.from === "chatbot") return "bg-white rounded-bl-none";
    return "bg-violet-700 ml-auto text-white rounded-br-none";
  }, [message]);

  if (noResponse === null) return null;
  if (message.from === "chatbot" && noResponse)
    return (
      <div
        className={`${
          noResponse ? "text-left" : "text-center hover:bg-slate-300"
        } transition-all text-sm min-h-6 w-3/5 my-2 p-2 shadow rounded-md ${style}`}
      >
        {message.message}
      </div>
    );

  if (message.from === "chatbot" && !noResponse)
    return (
      <>
        <div
          className={`text-left transition-all text-sm min-h-6 w-3/5 my-2 p-2 shadow rounded-md ${style}`}
        >
          Here you go!
        </div>
        <Modal tableItems={parseResponseHelper(message.message)}>
          <button
            className={`${
              noResponse ? "text-left" : "text-center hover:bg-slate-300"
            } transition-all text-sm min-h-6 w-3/5 my-2 p-2 shadow rounded-md bg-white`}
          >
            {noResponse ? message.message : "Click to view response"}
          </button>
        </Modal>
      </>
    );
  return (
    <div
      className={`text-sm min-h-6 w-3/5 my-2 p-2 shadow rounded-md ${style}`}
    >
      {message.message}
    </div>
  );
};

function generateUUID() {
  // Public Domain/MIT
  var d = new Date().getTime(); //Timestamp
  var d2 =
    (typeof performance !== "undefined" &&
      performance.now &&
      performance.now() * 1000) ||
    0; //Time in microseconds since page-load or 0 if unsupported
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16; //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

const Chatbot = ({ messages }: { messages: Message[] }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [msgs, setMsgs] = useState<Message[]>(messages);
  const [val, setVal] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const buttonStyle = useMemo(() => {
    if (!open) return "button-open";
    return "scale-50 opacity-0 translate-x-48 translate-y-48";
  }, [open]);

  const chatStyle = useMemo(() => {
    if (open) return "opacity-1 translate-y-0";
    return "opacity-0 translate-y-[50rem]";
  }, [open]);

  const handleSubmit = async () => {
    if (!val) return;
    setLoading(true);
    setMsgs((prev) => [
      ...prev,
      {
        message: val,
        from: "you",
      },
    ]);

    const lexParams = {
      botId: "GXOPRO5WI7",
      botAliasId: "DVPAVAVRW9",
      text: val,
      localeId: "en_US", // required
      sessionId: generateUUID(), // required
    };

    setVal("");
    try {
      const data = await lexClient.send(new RecognizeTextCommand(lexParams));
      if (!!data.messages) {
        setMsgs((prev) => [
          ...prev,
          {
            message: !!data.messages
              ? (data.messages[0].content as string)
              : "",
            from: "chatbot",
          },
        ]);
      } else {
        setMsgs((prev) => [
          ...prev,
          {
            message:
              "Apologies, I didn't understand you. What would you like me to do?",
            from: "chatbot",
          },
        ]);
      }
    } catch (err) {
      console.log("Error responding to message. ", err);
    }
    setLoading(false);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setVal(e.target.value);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`${buttonStyle} z-20 flex transition-all justify-center items-center glass h-20 w-20 rounded-full fixed bottom-6 right-6 hover:cursor-pointer hover:glass-darker`}
      >
        <ChatBubbleBottomCenterTextIcon className="w-6 text-white" />
      </button>
      <div
        className={`${chatStyle} z-20 flex transition-chatbot flex-col glass-more-opaque w-1/3 h-[36rem] fixed bottom-6 right-6 rounded-md overflow-hidden`}
      >
        <div className="flex px-2 justify-between items-center w-full h-10 glass">
          <p className="text-slate-800">Chatbot</p>
          <XMarkIcon
            onClick={() => setOpen(false)}
            className="w-6 h-full transition-all text-slate-800 hover:text-white hover:cursor-pointer"
          />
        </div>
        <div className="overflow-scroll  p-2 grow">
          {msgs.map((item, i) => {
            return <ChatbotMessage key={i} message={item} />;
          })}
          {loading && <ChatbotMessagePlaceholder />}
        </div>
        <div className="flex justify-between items-center h-16 w-full border-t-white border-t px-2">
          <input
            value={val}
            onChange={handleChange}
            onKeyDownCapture={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
            className="h-2/3 w-4/5 border border-white rounded-md px-4 bg-transparent outline-none text-white"
          ></input>
          <PaperAirplaneIcon
            onClick={() => handleSubmit()}
            className="w-8 text-white transition-all hover:text-slate-300 hover:cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Chatbot;
