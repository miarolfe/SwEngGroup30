type Props = {
  text: string;
  extraClasses?: string;
};

const LargeButton = (
  props: Props & React.HTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button
      className={
        "w-5/6 h-10 rounded-full font-semibold text-xl transition-colors " +
        (props?.extraClasses ||
          "mx-2 bg-blue-600  hover:bg-blue-800 text-white")
      }
      {...props}
    >
      {props.text}
    </button>
  );
};

export default LargeButton;
