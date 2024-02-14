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

  // useEffect(() => {
  //   if (!ref?.current) return;
  //   setWidth(ref.current.clientWidth);
  // }, [ref?.current?.clientWidth]);

  useEffect(() => {
    if (!ref?.current) return;
    setWidth(ref.current.clientWidth);
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });
    observer.observe(ref.current);
    // return ref.current && observer.unobserve(ref.current);
  }, [ref.current]);

  // const style = useMemo(() => {
  //   console.log(width);
  //   return {
  //     transform:
  //       "translateX(" +
  //       (position - current) * width +
  //       "px) scale(" +
  //       (current !== position ? "0.8" : "1") +
  //       ")",
  //     opacity: current !== position ? "0.5" : "1",
  //   };
  // }, [width]);

  const rotation = useMemo(() => {
    if (current === position) return "";
    if (current > position) return "rotateY(-15deg)";
    return "rotateY(15deg)";
  }, [current]);

  const style = {
    transform:
      "translateX(" +
      (position - current) * width +
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
    if (curr === 2) return;
    setCurr((curr) => curr + 1);
  };

  const handleDecrement = () => {
    if (curr === 0) return;
    setCurr((curr) => curr - 1);
  };

  return (
    <div className="flex flex-row justify-center items-center h-screen overflow-x-hidden">
      <button className="z-20" onClick={handleDecrement}>
        Prev
      </button>
      <div className={`h-full w-full test persp`}>
        <QuoteBlock position={0} current={curr}>
          <QuoteQuestion
            question="Please enter your full name and address"
            onClickNext={handleIncrement}
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
      </div>
    </div>
  );
};

export default Quote;
