import CountUp from "react-countup";

const QuoteAddonBlock = ({ name }: { name: string }) => {
  return (
    <div className="w-4/5 h-28 rounded-lg glass transition hover:glass-darker p-2">
      <p className="text-3xl text-white font-bold">{name}</p>
    </div>
  );
};

const Quote = () => {
  return (
    <div className="h-full flex flex-row">
      <div className="flex flex-col w-2/3 justify-around items-center">
        <QuoteAddonBlock name="Full" />
        <QuoteAddonBlock name="Basic" />
        <QuoteAddonBlock name="Full" />
        <QuoteAddonBlock name="Basic" />
      </div>
      <div className="flex justify-center items-center grow text-8xl font-bold text-white">
        <CountUp
          start={0}
          end={2850}
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
