import Link from "next/link";
import React from "react";

function NextStepBtn({ text, setStep }) {
  return (
    <button
      className="bg-fooPink-900 p-4 px-8 rounded-full mt-10"
      onClick={() => {
        setStep((prevStep) => prevStep + 1);
      }}
    >
      {text}
    </button>
  );
}

export default NextStepBtn;
