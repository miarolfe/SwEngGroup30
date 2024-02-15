import LargeButton from "../LargeButton";
import SingleLineTextBox from "../SingleLineTextBox";

type Props = {
  question: string;
  questionNo: number;
  components: React.ReactNode[];
  onClickBack?: VoidFunction;
  onClickNext?: VoidFunction;
  active?: boolean;
};

const QuoteQuestion = ({ active = false, ...props }: Props) => {
  return (
    <div
      className={`flex flex-col items-center glass h-full w-full rounded-2xl pb-2 overflow-hidden ${
        !active ? "pointer-events-none" : ""
      }`}
    >
      <span className="w-full py-2 pl-2 mb-2 flex items-end">
        <p className="font-bold text-5xl text-white">
          Question {props.questionNo}
        </p>
        <p className="text-2xl text-white">/6</p>
      </span>

      <div className="w-full h-full flex flex-col px-2">
        {/* Question Text */}
        <span className="w-full">
          <p className="font-semibold text-white text-2xl pb-4">
            {props.question}
          </p>
        </span>

        {/* Loop over components */}
        {props?.components?.map((item, idx) => (
          <div className="w-full py-2">{item}</div>
        ))}

        <div className="grow w-full flex justify-around items-end">
          {props?.questionNo !== 1 && (
            <LargeButton
              extraClasses="bg-white hover:bg-slate-200"
              text="Back"
              onClick={props.onClickBack}
            />
          )}
          <LargeButton text="Next" onClick={props.onClickNext} />
        </div>
      </div>
    </div>
  );
};

export default QuoteQuestion;
