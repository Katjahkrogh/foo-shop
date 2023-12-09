"use client";
import Camping from "@/components/Camping";
import TicketType from "@/components/TicketType";
import { useState, useRef, useEffect } from "react";

function Wrapper({ data }) {
  const [step, setStep] = useState(0);

  const [amount, setAmount] = useState(0);
  const [inputValue, setInputValue] = useState(false);

  const ref = useRef({
    amount: 0,
    area: "",
  });

  const handleInputValue = (e) => {
    const mapping = {
      1: "amount",
      2: "area",
    };

    ref.current[mapping[step]] = e.target.value;

    console.log("Amount:", ref.current.amount);
    console.log("Area:", ref.current.area);

    setInputValue(true);
  };

  return (
    <div>
      {step === 0 && (
        <TicketType
          setStep={setStep}
          handleInputValue={handleInputValue}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      )}
      {step === 1 && (
        <Camping
          data={data}
          setStep={setStep}
          handleInputValue={handleInputValue}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      )}
    </div>
  );
}
export default Wrapper;
