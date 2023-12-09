import Link from "next/link";
import React from "react";

function Knap({ text, id, setStep }) {
  return (
    <button
      type="submit"
      form={id}
      className="bg-fooPink-900 p-4 px-8 rounded-full"
      onClick={() => {
        setStep((prevStep) => prevStep + 1);
      }}
    >
      {text}
    </button>
  );
}

export default Knap;
