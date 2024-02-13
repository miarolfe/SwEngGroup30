import SingleLineTextBox from "../SingleLineTextBox";

type Props = {
  question: string;
};

const QuoteQuestion = (props: Props) => {
  return (
    <div className="flex flex-row justify-center items-center h-screen">
      <div className="flex flex-col items-center bg-white h-4/5 w-2/5 rounded-md shadow-lg py-2 px-4">
        <span className="w-full">
          <p className="font-bold text-5xl grad-text pb-6">Question 1</p>
        </span>

        {/* Question Text */}
        <span className="w-full">
          <p className="font-semibold text-lg pb-6">{props.question}</p>
        </span>

        {/* Email text box */}
        <SingleLineTextBox
          label="Email address"
          placeholder="example@email.com"
          type="email"
        />

        {/* Password text box */}
        <SingleLineTextBox
          label="Password"
          placeholder="Password"
          type="password"
        />
      </div>
    </div>
  );
};

export default QuoteQuestion;
