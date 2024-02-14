type Props = {
  text: string;
};

const LargeButton = (
  props: Props & React.HTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button
      className="w-5/6 h-10 rounded-full bg-blue-600 hover:bg-blue-800 transition-colors text-white text-xl font-semibold"
      {...props}
    >
      {props.text}
    </button>
  );
};

export default LargeButton;
