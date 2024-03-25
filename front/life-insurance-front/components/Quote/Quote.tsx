import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const QuoteAddonBlock = ({
  name,
  selected,
  onClick,
}: {
  name: string;
  selected: boolean;
  onClick: VoidFunction;
}) => {
  return (
    <button
      onClick={onClick}
      className={
        "w-4/5 h-28 rounded-lg glass transition hover:glass-darker p-2" +
        (selected ? " glass-darker" : "")
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

  return (
    <div className="h-full flex flex-row">
      <div className="flex flex-col w-1/2 justify-around items-center">
        <QuoteAddonBlock
          name="Premium"
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
          selected={selected === "entryLevelRecommendation"}
          onClick={() => setSelected("entryLevelRecommendation")}
        />
      </div>
      <div className="flex justify-center items-center grow text-8xl font-bold text-white">
        <CountUp
          start={countFrom}
          end={currentQuote["premium"]}
          duration={0.65}
          separator=""
          decimal="."
          prefix="€"
        >
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
      </div>
    </div>
  );
};

export default Quote;
