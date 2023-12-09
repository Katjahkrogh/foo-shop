import React from "react";
import NextStepBtn from "./NextStepBtn";

function Info({ setStep }) {
  return (
    <div class="container mx-auto bg-fooGrey-900 shadow rounded-lg p-6">
       <h2 className="text-fooYellow-200 text-xl mt-4 mb-2">UDFYLD INFORMATION</h2>

      <fieldset>
        <legend className="text-fooYellow-200 text-xl mt-4 mb-2">
          DIG (KØBER)
        </legend>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="First name"
            className="border p-2 rounded w-full"
          ></input>
          <input
            type="text"
            placeholder="Last name"
            className="border p-2 rounded w-full"
          ></input>
        </div>
        <div class="mb-4">
          <input
            type="email"
            placeholder="Email address"
            className="border p-2 rounded w-full"
          ></input>
        </div>

        <div class="mb-4">
          <input
            type="text"
            placeholder="Street address"
            className="border p-2 rounded w-full"
          ></input>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="City"
            className="border p-2 rounded w-full"
          ></input>
          <input
            type="text"
            placeholder="ZIP / Postal code"
            className="border p-2 rounded w-full"
          ></input>
        </div>
        <div className="flex justify-end">
          <NextStepBtn setStep={setStep} text="GÅ TIL BETALING"></NextStepBtn>
        </div>
      </fieldset>
    </div>
  );
}

export default Info;
