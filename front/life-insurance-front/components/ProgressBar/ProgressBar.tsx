type Props = {
  proportion: number;
  label: string;
  number: number;
  active?: boolean;
};

const ProgressBar = ({ proportion, label, number, active = false }: Props) => {
  return (
    <div className={"flex flex-col w-40"}>
      <div
        className={
          "flex flex-row items-end " + (active ? "text-white" : "glass-text")
        }
      >
        <div className={"font-bold text-6xl mr-2"}>{number}</div>
        <div>{label}</div>
      </div>
      <div className="w-full h-2 rounded-full glass">
        <div
          style={{ width: proportion + "%" }}
          className="h-2 bg-white rounded-full transition-all duration-500"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
