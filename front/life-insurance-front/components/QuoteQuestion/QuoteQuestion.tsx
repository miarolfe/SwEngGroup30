import LargeButton from "../LargeButton";
import SingleLineTextBox from "../SingleLineTextBox";

type Props = {
  question: string;
  components: React.ReactNode[];
};

const QuoteQuestion = (props: Props) => {
  return (
    <div className="flex flex-row justify-center items-center h-screen">
      <div className="flex flex-col items-center bg-white h-4/5 w-2/5 rounded-md shadow-lg py-2 px-4">
        <span className="w-full">
          <p className="font-bold text-5xl grad-text pb-6">Question 1</p>
        </span>

        {/* Question Text */}
        <span className="w-full">
          <p className="font-semibold text-lg pb-6">{props.question}</p>
        </span>

        {/* Loop over components */}
        {props?.components?.map((Item, idx) => (
          <div className="w-full py-2">{Item}</div>
        ))}

        <div className="grow w-full flex justify-center items-end">
          <LargeButton text="Next" />
        </div>
      </div>
    </div>
  );
};

export default QuoteQuestion;
