import Dropdown from "../Dropdown/Dropdown";
import LargeButton from "../LargeButton";
import SingleLineTextBox from "../SingleLineTextBox";

type TextBox = {
  label: string;
  textPlaceholder: string;
  stateName: string;
};

type Radio = {
  label: string;
  radioOptions: string[];
  stateName: string;
};

type Dropdown = {
  label: string;
  dropdownOptions: string[];
  stateName: string;
};

type Inputs = TextBox | Radio | Dropdown;

type Props = {
  question: string;
  questionNo: number;
  newComps: Inputs[];
  length: number;
  onClickBack?: VoidFunction;
  onClickNext?: VoidFunction;
  active?: boolean;
};

const QuoteQuestion = ({ active = false, ...props }: Props) => {
  const getComponent = (input: Inputs, idx: number) => {
    // Textbox
    if ("textPlaceholder" in input)
      return (
        <SingleLineTextBox
          label={input.label}
          placeholder={input.textPlaceholder}
        />
      );

    // Dropdown
    if ("dropdownOptions" in input) return <Dropdown />;

    // Radio
    if ("radioOptions" in input) return <div>Radio</div>;
  };
  return (
    <div
      className={`flex flex-col shadow-xl items-center glass h-full w-full rounded-2xl pb-2 overflow-hidden ${
        !active ? "pointer-events-none" : ""
      }`}
    >
      <span className="w-full py-2 pl-2 mb-2 flex items-end">
        <p className="font-bold text-5xl text-white">
          Question {props.questionNo}
        </p>
        <p className="text-2xl text-white"> /{props.length}</p>
      </span>

      <div className="w-full h-full flex flex-col px-4">
        {/* Question Text */}
        <span className="w-full">
          <p className="font-medium text-white text-2xl pb-4">
            {props.question}
          </p>
        </span>

        {props?.newComps.map((item, idx) => (
          <div className="w-full py-2">{getComponent(item, idx)}</div>
        ))}

        <div className="grow w-full flex justify-around items-end">
          {props?.questionNo !== 1 && (
            <LargeButton
              extraClasses="glass hover:glass-light"
              text="Back"
              onClick={props.onClickBack}
            />
          )}
          <LargeButton
            text={props.questionNo === props.length ? "Get quote" : "Next"}
            onClick={props.onClickNext}
          />
        </div>
      </div>
    </div>
  );
};

export default QuoteQuestion;
