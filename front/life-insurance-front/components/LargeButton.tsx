import { useMemo } from "react";

type Props = {
  text: string;
  extraclasses?: string;
  disabled?: boolean;
};

const LargeButton = (
  props: Props & React.HTMLAttributes<HTMLButtonElement>
) => {
  const disabledButtonStyle = useMemo(() => {
    if (props?.disabled)
      return "mx-2 bg-blue-600 brightness-50 hover:cursor-not-allowed ";

    if (!!props?.extraclasses) return props.extraclasses;

    return "mx-2 bg-blue-600 hover:bg-blue-800 text-white";
  }, [props?.disabled]);

  return (
    <button
      disabled={props?.disabled}
      className={
        "w-5/6 h-10 rounded-full font-semibold text-xl transition-colors " +
        disabledButtonStyle
      }
      {...props}
    >
      {props.text}
    </button>
  );
};

export default LargeButton;
