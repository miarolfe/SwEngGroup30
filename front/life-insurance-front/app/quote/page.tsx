// import Navbar from "../components/Navbar/Navbar";

import QuoteQuestion from "@/components/QuoteQuestion/QuoteQuestion";
import SingleLineTextBox from "@/components/SingleLineTextBox";

const Quote = () => {
  return (
    <QuoteQuestion
      question="Please enter some preliminary information"
      components={[
        <SingleLineTextBox label="Name" placeholder="John Doe" type="text" />,
        <SingleLineTextBox
          label="Address"
          placeholder="123 Main Street, Town"
          type="text"
        />,
      ]}
    />
  );
};

export default Quote;
