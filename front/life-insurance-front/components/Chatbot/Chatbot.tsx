import { XMarkIcon, PaperAirplaneIcon } from "@heroicons/react/20/solid";

const Chatbot = () => {
  return (
    <div className="flex glass w-1/3 h-[36rem] fixed bottom-6 right-6 rounded-md overflow-hidden">
      <div className="flex px-2 justify-between items-center absolute top-0 w-full h-10 glass">
        <p className="text-slate-800">Chatbot</p>
        <XMarkIcon className="w-6 h-full transition-all text-slate-800 hover:text-white hover:cursor-pointer" />
      </div>
      <div className="flex justify-between items-center absolute bottom-0 h-16 w-full border-t-slate-400 border-t-2 px-2">
        <input className="h-2/3 w-4/5 border border-white rounded-full px-4 bg-transparent"></input>
        <PaperAirplaneIcon className="w-8 text-white transition-all hover:text-slate-300 hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default Chatbot;
