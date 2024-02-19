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
      <div className="flex justify-center items-center grow text-6xl font-bold text-white">
        €2498
      </div>
    </div>
  );
};

export default Quote;
