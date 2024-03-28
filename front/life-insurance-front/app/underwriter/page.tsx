import Chatbot, { type Message } from "@/components/Chatbot/Chatbot";

const sample: Message[] = [
  {
    message: "Hello Admin! What can I help you with today?",
    from: "chatbot",
  },
];

const UnderwriterPage = () => {
  return (
    <div className="main-bg min-h-screen h-full w-full p-2">
      <div>Underwriter page</div>
      <Chatbot messages={sample} />
    </div>
  );
};

export default UnderwriterPage;
