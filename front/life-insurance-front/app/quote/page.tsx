"use client";

import { useState } from "react";

import QuoteQuestion from "@/components/QuoteQuestion/QuoteQuestion";
import SingleLineTextBox from "@/components/SingleLineTextBox";

const Quote = () => {
  const [name, setName] = useState<string>("");

  return (
    <QuoteQuestion
      question="Please enter some preliminary information"
      components={[
        <SingleLineTextBox
          label="Name"
          placeholder="John Doe"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />,
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
