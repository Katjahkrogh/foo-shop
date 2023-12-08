import Link from "next/link";
import React from "react";

function Knap({ text, id, setStep, inputValue, setInputValue}) {
  return (
    <button
      type="submit"
      form={id}
      className="bg-fooPink-900 p-4 px-8 rounded-full"
      onClick={() => {
        if (inputValue) {
               setStep((prevStep) => prevStep + 1);
        } else {
            setStep((prevStep) => prevStep + 0);
            return;
        }
        setInputValue(false);
      }}
    >
      {text}
    </button>
  );
}

export default Knap;
