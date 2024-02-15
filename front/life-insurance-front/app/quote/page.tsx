"use client";

import { useState, useRef, useEffect, useMemo } from "react";

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
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (!ref?.current) return;
    setWidth(ref.current.clientWidth);
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });
    observer.observe(ref.current);
  }, [ref.current]);

  const rotation = useMemo(() => {
    if (current === position) return "";
    if (current > position) return "rotateY(-15deg)";
    return "rotateY(15deg)";
  }, [current]);

  const style = {
    transform:
      "translateX(" +
      (position - current) * (width || 1000) +
      "px) scale(" +
      (current !== position ? "0.8" : "1") +
      ")" +
      rotation,
    opacity: current !== position ? "0.5" : "1",
  };

  return (
    <div
      style={style}
      ref={ref}
      key={position}
      className={
        "flex justify-center items-center h-full transition duration-500 test-c" +
        (position === 0 ? " z-10" : "")
      }
    >
      {children}
    </div>
  );
};

const Quote = () => {
  const [name, setName] = useState<string>("");
  const [curr, setCurr] = useState<number>(0);

  const handleIncrement = () => {
    if (curr === 5) return;
    setCurr((curr) => curr + 1);
  };

  const handleDecrement = () => {
    if (curr === 0) return;
    setCurr((curr) => curr - 1);
  };

  return (
    <div className="flex flex-row justify-center items-center h-screen overflow-x-hidden grad-bg">
      <div className={`h-full w-full test persp`}>
        <QuoteBlock position={0} current={curr}>
          <QuoteQuestion
            question="Please enter your full name and address"
            onClickNext={handleIncrement}
            active={curr === 0}
            questionNo={1}
            components={[
              <SingleLineTextBox
                label="Name"
                placeholder="Name"
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

        <QuoteBlock position={1} current={curr}>
          <QuoteQuestion
            question="Do you have any medical conditions?"
            onClickNext={handleIncrement}
            onClickBack={handleDecrement}
            active={curr === 1}
            questionNo={2}
            components={[
              <SingleLineTextBox
                label="Name"
                placeholder="Name"
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

        <QuoteBlock position={2} current={curr}>
          <QuoteQuestion
            question="Do you take any medication?"
            active={curr === 2}
            onClickNext={handleIncrement}
            onClickBack={handleDecrement}
            questionNo={3}
            components={[
              <SingleLineTextBox
                label="Name"
                placeholder="Name"
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

        <QuoteBlock position={3} current={curr}>
          <QuoteQuestion
            question="Please enter your full name and address"
            onClickNext={handleIncrement}
            onClickBack={handleDecrement}
            active={curr === 3}
            questionNo={4}
            components={[
              <SingleLineTextBox
                label="Name"
                placeholder="Name"
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

        <QuoteBlock position={4} current={curr}>
          <QuoteQuestion
            question="Do you have any medical conditions?"
            onClickNext={handleIncrement}
            onClickBack={handleDecrement}
            active={curr === 4}
            questionNo={5}
            components={[
              <SingleLineTextBox
                label="Name"
                placeholder="Name"
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

        <QuoteBlock position={5} current={curr}>
          <QuoteQuestion
            question="Do you take any medication?"
            active={curr === 5}
            onClickBack={handleDecrement}
            questionNo={6}
            components={[
              <SingleLineTextBox
                label="Name"
                placeholder="Name"
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
      </div>
    </div>
  );
};

export default Quote;
