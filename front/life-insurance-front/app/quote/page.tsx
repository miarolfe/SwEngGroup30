"use client";
import { useState, useRef, useEffect, useMemo } from "react";

import QuoteQuestion from "@/components/QuoteQuestion/QuoteQuestion";
import Quote from "@/components/Quote/Quote";
import qData from "./questions.json";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import { useSession } from "next-auth/react";

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
    if (current > position) return "rotateY(-10deg)";
    return "rotateY(10deg)";
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
        "flex justify-center items-center h-full transition duration-500 quote-page-block" +
        (position === 0 ? " z-10" : "")
      }
    >
      {children}
    </div>
  );
};

const QuotePage = () => {
  const placeholderQuote: QuoteDetails = {
    premium: -1000,
    amountInsured: 300000,
    maxYearInsured: 50,
  };

  const placeHolderReturn: ReturnedQuotes = {
    entryLevelRecommendation: placeholderQuote,
    highLevelRecommendation: placeholderQuote,
    premiumLevelRecommendation: placeholderQuote,
  };

  const [curr, setCurr] = useState<number>(0);
  const [data, setData] = useState<{ [stateName: string]: string | string[] }>(
    {}
  );
  const hasRun = useRef<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [returnedQuotes, setReturnedQuotes] =
    useState<ReturnedQuotes>(placeHolderReturn);
  const { data: session } = useSession();

  // Uncomment this and comment other useEffect to disable social media scraping
  // useEffect(() => {
  //   qData.map((item): void => {
  //     item.inputs.map((question) => {
  //       if (!data.hasOwnProperty(question.stateName)) {
  //         setData((prev) => ({ ...prev, [question.stateName]: "" }));
  //       }
  //     }
  //   })
  // }, []);

  useEffect(() => {
    qData.map((item): void => {
      item.inputs.map((question) => {
        if (!data.hasOwnProperty(question.stateName)) {
          switch (question.stateName) {
            case "fullName": {
              if (
                !!localStorage.getItem("faFirstName") &&
                data[question.stateName] === undefined
              ) {
                setData((prev) => ({
                  ...prev,
                  [question.stateName]:
                    localStorage.getItem("faFirstName") +
                    " " +
                    localStorage.getItem("faLastName"),
                }));
              } else setData((prev) => ({ ...prev, [question.stateName]: "" }));
              break;
            }
            case "dob": {
              if (
                !!localStorage.getItem("faBirthday") &&
                !data[question.stateName]
              ) {
                setData((prev) => ({
                  ...prev,
                  [question.stateName]: localStorage.getItem(
                    "faBirthday"
                  ) as string,
                }));
              } else setData((prev) => ({ ...prev, [question.stateName]: "" }));
              break;
            }
            case "sex": {
              if (
                !!localStorage.getItem("faGender") &&
                !data[question.stateName]
              ) {
                setData((prev) => ({
                  ...prev,
                  [question.stateName]: localStorage.getItem(
                    "faGender"
                  ) as string,
                }));
              } else setData((prev) => ({ ...prev, [question.stateName]: "" }));
              break;
            }
            case "occupation": {
              if (
                !!localStorage.getItem("faGender") &&
                !data[question.stateName]
              ) {
                setData((prev) => ({
                  ...prev,
                  [question.stateName]: "Student",
                }));
              } else setData((prev) => ({ ...prev, [question.stateName]: "" }));
              break;
            }
            default:
              setData((prev) => ({ ...prev, [question.stateName]: "" }));
          }
        }
      });
    });

    return () => {
      if (hasRun.current) {
        localStorage.removeItem("faFirstName");
        localStorage.removeItem("faLastName");
        localStorage.removeItem("faBirthday");
        localStorage.removeItem("faGender");
      }
      hasRun.current = !hasRun.current;
    };
  }, []);

  const generateQuotes = async () => {
    await fetch(`http://18.168.50.21:80/api/premium/${session?.user?.id}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        authId: `${session?.user?.id}`,
      },
      body: JSON.stringify({
        patientName: data.fullName,
        dateOfBirth: data.dob,
        sex: data.sex,
        occupation: data.occupation,
        yearlyIncomeInEuro: parseFloat(data.income as string),
        residenceCountry: "Ireland",
        weightInKG: parseFloat(data.weight as string),
        heightInCM: parseFloat(data.height as string),
        exerciseHourPerWeek: parseFloat(data.exerciseHours as string),
        smokingHistory: parseFloat(data.smokedBefore as string),
        drinkingHistory: parseFloat(data.smokedBefore as string),
        hereditaryConditions: data.hereditaryConditions,
        healthConditions: data.healthConditions,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(typeof data);
        if (
          typeof data == "string" ||
          Object.keys(data.premiumLevelRecommendation).length === 0
        ) {
          setReturnedQuotes(placeHolderReturn);
        } else {
          setReturnedQuotes(data);
        }
      });
  };

  const handleIncrement = (states: typeof data) => {
    let x = false;
    qData[curr].inputs.map((item) => {
      console.log(item.stateName, states[item.stateName]);
      if (!states[item.stateName]) x = true;
    });
    if (curr === qData.length - 1 || x) return;
    setCurr((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (curr === 0) return;
    setCurr((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    await generateQuotes();
    setCurrentStep(2);
  };

  const currentComponent = useMemo(() => {
    if (currentStep === 1) {
      return qData.map((item, idx) => (
        <QuoteBlock position={idx} key={idx} current={curr}>
          <QuoteQuestion
            question={item.question}
            onClickNext={() => handleIncrement(data)}
            onClickBack={handleDecrement}
            onClickSubmit={handleSubmit}
            data={data}
            setData={setData}
            length={qData.length}
            active={curr === idx}
            questionNo={idx + 1}
            newComps={item.inputs}
          />
        </QuoteBlock>
      ));
    }
    if (currentStep === 2)
      return (
        <div className="cover-quote-page">
          <Quote {...returnedQuotes} />
        </div>
      );
  }, [currentStep, curr, data]);

  return (
    <div className="h-full overflow-x-hidden grad-bg w-full test persp">
      <div className="progress-grid-child flex justify-around items-center">
        <ProgressBar
          number={1}
          label="Questions"
          proportion={Math.floor(((curr + 1) / qData.length) * 100)}
          active={currentStep >= 1}
        />
        <ProgressBar
          number={2}
          label="Your Quote"
          proportion={currentStep >= 2 ? 100 : 0}
          active={currentStep >= 2}
        />
        <ProgressBar
          number={3}
          label="Payment"
          proportion={0}
          active={currentStep >= 3}
        />
      </div>
      {currentComponent}
    </div>
  );
};

export default QuotePage;
