import { useMemo } from "react";

import Dropdown from "../Dropdown/Dropdown";
import DropdownMultiple from "../Dropdown/DropdownMultiple";
import LargeButton from "../LargeButton";
import SingleLineTextBox from "../SingleLineTextBox";

type TextBox = {
  label: string;
  textPlaceholder: string;
};

type Radio = {
  label: string;
  radioOptions: string[];
};

type Dropdown = {
  label: string;
  dropdownOptions: string[];
};

type DropdownMultiple = {
  label: string;
  dropdownMultipleOptions: string[];
};

type Inputs = (TextBox | Radio | Dropdown | DropdownMultiple) & {
  stateName: string;
  required?: boolean;
};

type Props = {
  question: string;
  questionNo: number;
  newComps: Inputs[];
  length: number;
  data: { [stateName: string]: string | string[] };
  setData: React.Dispatch<
    React.SetStateAction<{ [stateName: string]: string | string[] }>
  >;
  onClickBack?: VoidFunction;
  onClickNext?: VoidFunction;
  onClickSubmit?: VoidFunction;
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
          value={props.data[input.stateName] as string}
          onChange={(e) =>
            props.setData((prev) => ({
              ...prev,
              [input.stateName]: e.target.value,
            }))
          }
        />
      );

    // Dropdown
    if ("dropdownOptions" in input)
      return (
        <Dropdown
          options={input.dropdownOptions}
          label={input.label}
          value={props.data[input.stateName] as string}
          onChange={(e) => {
            props.setData((prev) => ({
              ...prev,
              [input.stateName]: e,
            }));
          }}
        />
      );

    if ("dropdownMultipleOptions" in input)
      return (
        <DropdownMultiple
          options={input.dropdownMultipleOptions}
          label={input.label}
          value={props.data[input.stateName] as string[]}
          onChange={(e) => {
            if (props.data[input.stateName] === "") {
              props.setData((prev) => ({
                ...prev,
                [input.stateName]: [e],
              }));
            } else if (
              !!props.data[input.stateName] &&
              props.data[input.stateName].includes(e)
            ) {
              const arr: string[] = props.data[input.stateName] as string[];
              arr.splice(arr.indexOf(e), 1);
              props.setData((prev) => ({
                ...prev,
                [input.stateName]: [...arr],
              }));
            } else {
              props.setData((prev) => ({
                ...prev,
                [input.stateName]: [
                  ...(props.data[input.stateName] as string[]),
                  e,
                ],
              }));
            }
          }}
        />
      );

    // Radio
    if ("radioOptions" in input) return <div>Radio</div>;
  };

  // Check for empty fields
  const isEmptyFields = useMemo(() => {
    props?.newComps.map((item) => {
      if (!!item?.required && !props.data[item.stateName]) {
        return true;
      }
    });
    return false;
  }, [props.data]);

  return (
    <div
      className={`flex flex-col shadow-xl items-center glass h-full w-full rounded-2xl pb-2 overflow-hidden ${
        !active ? "pointer-events-none" : ""
      }`}
    >
      <span className="flex items-end w-full py-2 pl-2 mb-2 flex items-end">
        <p className="font-bold text-5xl text-white">{props.questionNo}</p>
        <p className="text-xl text-white ml-2">of {props.length}</p>
        <p className="font-bold text-white pl-4 text-4xl">{props.question}</p>
      </span>

      <div className="w-full h-full flex flex-col px-4">
        {props?.newComps.map((item, idx) => (
          <div key={idx} className="w-full py-2">
            {getComponent(item, idx)}
          </div>
        ))}

        <div className="grow w-full flex justify-around items-end">
          {props?.questionNo !== 1 && (
            <LargeButton
              extraclasses="glass hover:glass-light"
              text="Back"
              onClick={props.onClickBack}
            />
          )}
          <LargeButton
            text={props.questionNo === props.length ? "Get quote" : "Next"}
            disabled={isEmptyFields}
            onClick={
              props.questionNo === props.length
                ? props.onClickSubmit
                : props.onClickNext
            }
          />
        </div>
      </div>
    </div>
  );
};

export default QuoteQuestion;
