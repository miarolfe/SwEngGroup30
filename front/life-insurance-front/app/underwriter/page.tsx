"use client";
import Chatbot, { type Message } from "@/components/Chatbot/Chatbot";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

const sample: Message[] = [
  {
    message: "Hello Admin! What can I help you with today?",
    from: "chatbot",
  },
];

const UnderwriterPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      if (!session?.user?.employeeStatus) {
        router.push("/");
      }
    } 
    //else if (!session?.user?.employeeStatus) {
    //     router.push("/");
    // }
  }, [status]);

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
