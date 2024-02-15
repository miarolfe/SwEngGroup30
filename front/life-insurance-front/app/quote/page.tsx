"use client";

import { useState, useRef, useEffect, useMemo } from "react";

import QuoteQuestion from "@/components/QuoteQuestion/QuoteQuestion";
import test from "./questions.json";

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
    if (curr === test.length - 1) return;
    setCurr((curr) => curr + 1);
  };

  const handleDecrement = () => {
    if (curr === 0) return;
    setCurr((curr) => curr - 1);
  };

  return (
    <div className="flex flex-row justify-center items-center h-screen overflow-x-hidden grad-bg">
      <div className={`h-full w-full test persp`}>
        {test.map((item, idx) => (
          <QuoteBlock position={idx} key={idx} current={curr}>
            <QuoteQuestion
              question={item.question}
              onClickNext={handleIncrement}
              onClickBack={handleDecrement}
              length={test.length}
              active={curr === idx}
              questionNo={idx + 1}
              newComps={item.inputs}
            />
          </QuoteBlock>
        ))}
      </div>
    </div>
  );
};

export default Quote;
