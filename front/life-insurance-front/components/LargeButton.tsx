type Props = {
  text: string;
};

const LargeButton = (props: Props) => {
  return (
    <button className="w-5/6 h-10 rounded-full grad-bg text-white text-xl font-semibold">
      {props.text}
    </button>
  );
};

export default LargeButton;
