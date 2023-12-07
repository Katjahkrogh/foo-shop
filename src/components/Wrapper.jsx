"use client";
import Camping from "@/components/Camping";
import TicketType from "@/components/TicketType";
import { useState, useRef, useEffect } from "react";

function Wrapper() {
  const [step, setStep] = useState(0);

  return (
    <div>
      {step === 0 && <TicketType setStep={setStep} />}
      {step === 1 && <Camping setStep={setStep} />}
    </div>
  );
}
export default Wrapper;
