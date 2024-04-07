import Chatbot, { type Message } from "@/components/Chatbot/Chatbot";

const sample: Message[] = [
  {
    message: "Hello Admin! What can I help you with today?",
    from: "chatbot",
  },
];

const UnderwriterPage = () => {
  return (
    <div className="main-bg min-h-screen h-full w-full">
      {/* !!! This is a NavBar placeholder !!! */}
      <div className="h-20 w-full bg-white">Nav</div>
      <div className="flex flex-col p-2 h-full">
        <div className="text-white text-6xl font-semibold">Hello, Admin!</div>
        <div className="glass w-full h-96 rounded-md p-2">Test</div>
        <Chatbot messages={sample} />
      </div>
    </div>
  );
};

export default UnderwriterPage;