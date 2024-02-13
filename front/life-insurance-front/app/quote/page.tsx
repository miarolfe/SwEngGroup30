"use client";

import { useState } from "react";

import QuoteQuestion from "@/components/QuoteQuestion/QuoteQuestion";
import SingleLineTextBox from "@/components/SingleLineTextBox";

const QuoteBlock = ({
  position,
  current,
  children,
}: {
  position: number;
  current: number;
  children: React.ReactNode;
}) => {
  const st = "translateX(calc(" + (current - position) + "*30px))";
  const style = {
    transform:
      "translate(" +
      (position - current) * 200 +
      "px) scale(" +
      (current !== position ? "0.8" : "1") +
      ")",
  };
  return (
    <div
      style={style}
      className="flex justify-center items-center h-full transition duration-300"
    >
      {children}
    </div>
  );
};

const Quote = () => {
  const [name, setName] = useState<string>("");
  const [curr, setCurr] = useState<number>(0);
  const [t, setT] = useState<boolean>(false);

  const edgeStyle = "flex justify-center items-center h-full w-1/4";

  return (
    <div className="flex flex-row justify-center items-center h-screen">
      <button className="z-10" onClick={() => setCurr((curr) => curr + 1)}>
        Test
      </button>
      <div className={`flex flex-row grow justify-between items-center h-full`}>
        <QuoteBlock position={0} current={curr}>
          <QuoteQuestion
            question="Please enter some preliminary information"
            active={t}
            components={[
              <SingleLineTextBox
                label="Name"
                placeholder="John Doe"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />,
              <SingleLineTextBox
                label="Address"
                placeholder="123 Main Street, Town"
                type="text"
              />,
            ]}
          />
        </QuoteBlock>

        <QuoteQuestion
          question="Please enter some preliminary information"
          active
          components={[
            <SingleLineTextBox
              label="Name"
              placeholder="John Doe"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />,
            <SingleLineTextBox
              label="Address"
              placeholder="123 Main Street, Town"
              type="text"
            />,
          ]}
        />

        <QuoteQuestion
          question="Please enter some preliminary information"
          components={[
            <SingleLineTextBox
              label="Name"
              placeholder="John Doe"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />,
            <SingleLineTextBox
              label="Address"
              placeholder="123 Main Street, Town"
              type="text"
            />,
          ]}
        />
      </div>
    </div>
  );
};

export default Quote;
