import LargeButton from "../LargeButton";
import SingleLineTextBox from "../SingleLineTextBox";

type Props = {
  question: string;
  components: React.ReactNode[];
  onClickNext?: VoidFunction;
  active?: boolean;
};

const QuoteQuestion = ({ active = false, ...props }: Props) => {
  return (
    <div
      className={`flex flex-col items-center bg-white h-full w-full rounded-md shadow-lg py-2 px-4 ${
        !active && "-translate-x-8"
      }`}
    >
      <span className="w-full">
        <p className="font-bold text-5xl grad-text pb-6">Question 1</p>
      </span>

      {/* Question Text */}
      <span className="w-full">
        <p className="font-semibold text-lg pb-6">{props.question}</p>
      </span>

      {/* Loop over components */}
      {props?.components?.map((item, idx) => (
        <div className="w-full py-2">{item}</div>
      ))}

      <div className="grow w-full flex justify-center items-end">
        <LargeButton text="Next" onClick={props.onClickNext} />
      </div>
    </div>
  );
};

export default QuoteQuestion;
