import { useState, useEffect, useRef, useMemo } from "react";
import CountUp from "react-countup";

const QuoteAddonBlock = ({
  name,
  selected,
  onClick,
  start,
  end,
}: {
  name: string;
  selected: boolean;
  onClick: VoidFunction;
  start?: boolean;
  end?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={
        "w-60 grow glass-darker-noshadow transition hover:glass-noshadow p-2" +
        (selected ? " glass-noshadow" : "") +
        (start ? " border-tl-md" : "") +
        (end ? " border-bl-md" : "")
      }
    >
      <p className="text-3xl text-white font-bold">{name}</p>
    </button>
  );
};

const placeholderData = {
  entryLevelRecommendation: {
    premium: 1000,
    amountInsured: 300000,
    maxYearInsured: 50,
  },
  highLevelRecommendation: {
    premium: 2000,
    amountInsured: 500000,
    maxYearInsured: 50,
  },
  premiumLevelRecommendation: {
    premium: 3000,
    amountInsured: 700000,
    maxYearInsured: 50,
  },
};

type CurrentQuoteType = {
  premium: number;
  amountInsured: number;
  maxYearInsured: number;
};

const Quote = () => {
  const [selected, setSelected] = useState<
    | "entryLevelRecommendation"
    | "highLevelRecommendation"
    | "premiumLevelRecommendation"
  >("premiumLevelRecommendation");
  const [countFrom, setCountFrom] = useState<number>(0);
  const [currentQuote, setCurrentQuote] = useState<CurrentQuoteType>(
    placeholderData["premiumLevelRecommendation"]
  );

  const doneInitialRender = useRef<boolean>(false);

  useEffect(() => {
    // console.log("testing");
    // if (!doneInitialRender.current) doneInitialRender.current = true;
    setCountFrom(currentQuote["premium"]);
    setCurrentQuote(placeholderData[selected]);
  }, [selected]);

  const translateBy = useMemo(() => {
    if (selected === "highLevelRecommendation") return "1.5";
    if (selected === "entryLevelRecommendation") return "3";
    return 0;
  }, [selected]);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="w-5/6 h-5/6 flex rounded-md overflow-hidden">
        <div className="flex flex-col justify-around items-center">
          <QuoteAddonBlock
            name="Premium"
            start
            selected={selected === "premiumLevelRecommendation"}
            onClick={() => setSelected("premiumLevelRecommendation")}
          />
          <QuoteAddonBlock
            name="High"
            selected={selected === "highLevelRecommendation"}
            onClick={() => setSelected("highLevelRecommendation")}
          />
          <QuoteAddonBlock
            name="Entry"
            end
            selected={selected === "entryLevelRecommendation"}
            onClick={() => setSelected("entryLevelRecommendation")}
          />
        </div>
        {/* Quote on right */}
        <div className="grow flex flex-col text-6xl glass-noshadow text-white px-4 py-2">
          {/* <div className="w-5/6 h-5/6 flex flex-col justify-center items-center text-6xl text-white rounded-md"> */}
          <div
            className="flex text-5xl"
            style={{
              lineHeight: "1.5em",
              height: "1.5em",
              overflow: "hidden",
            }}
          >
            <p className="mr-6 font-bold">Recommendation</p>
            <div
              className="flex flex-col text-white"
              style={{
                transition: "0.5s all ease-in-out",
                transform: "translateY(-" + translateBy + "em)",
              }}
            >
              <p>Premium</p>
              <p>High</p>
              <p>Entry</p>
            </div>
          </div>
          <CountUp
            start={countFrom}
            end={currentQuote.premium}
            duration={0.65}
            separator=""
            decimal="."
            prefix="€"
          >
            {({ countUpRef }) => (
              <div className="mb-4">
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
          {/* Details table */}
          <table className="text-xl border-white overflow-hidden border-separate border-spacing-0">
            <tr className="">
              <td className="rounded-tl-md border-l-2 border-t-2 border-b-2 pl-2">
                Annual cost
              </td>
              <td className="rounded-tr-md border-t-2 border-r-2 border-b-2">
                €3000
              </td>
            </tr>
            <tr>
              <td className="border-l-2 border-b-2 pl-2">
                Maximum insured amount
              </td>
              <td className="border-r-2 border-b-2">
                €{currentQuote.amountInsured}
              </td>
            </tr>
            <tr>
              <td className="rounded-bl-md border-l-2 border-b-2 pl-2">
                Maximum insured years
              </td>
              <td className="rounded-br-md border-r-2 border-b-2">
                {currentQuote.maxYearInsured} years
              </td>
            </tr>
          </table>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Quote;
