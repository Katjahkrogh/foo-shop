import React from "react";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useState } from "react";
import Cards from "react-credit-cards-2";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function Payment() {
  const [cardInfo, setCardInfo] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    errors: {},
  });

  const handleChange = (e) => {
    setCardInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleInputFocus = (evt) => {
    setCardInfo((prev) => ({ ...prev, focus: evt.target.name }));
  };

  // Input card expiry onKeyUp handler
  const handleCardExpiry = (e) => {
    let expiryDate = e.target.value;

    if (e.keyCode !== 8) {
      if (expiryDate > 1 && expiryDate.length === 1) {
        expiryDate = "0" + expiryDate + "/";
      } else if (expiryDate.length === 2) {
        expiryDate = expiryDate + "/";
      }

      setCardInfo({ ...cardInfo, expiry: expiryDate });
    } else {
      setCardInfo({ ...cardInfo, expiry: "" });
    }
  };

  // Input onKeyDown numbers only handler
  const handleNumbersOnly = (e) => {
    let flag;

    if (
      e.keyCode === 8 ||
      e.keyCode === 9 ||
      (e.keyCode === 16 && e.keyCode >= 9) ||
      e.keyCode === 37 ||
      e.keyCode === 39 ||
      e.keyCode === 46 ||
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 96 && e.keyCode <= 105)
    ) {
      flag = false;
    } else {
      flag = true;
    }

    if (flag) {
      e.preventDefault();
    }
  };

  return (
    <fieldset>
      <h2
        className={`${bebasNeue.className} text-2xl md:text-4xl text-fooYellow-200 mb-10`}
      >
        BETALINGSOPLYSNINGER
      </h2>
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-8 ">
        <div>
          <Cards
            number={cardInfo.number}
            expiry={cardInfo.expiry}
            cvc={cardInfo.cvc}
            name={cardInfo.name}
            focused={cardInfo.focus}
          />
        </div>
        <div className="flex flex-wrap gap-4">
          <label htmlFor="number" className=" w-full">
            <input
              className="text-black border p-2 rounded-lg w-full"
              unique="cardNumber"
              placeholder="Kort nummer"
              maxLength="16"
              name="number"
              required
              value={cardInfo.number}
              onKeyDown={handleNumbersOnly}
              onChange={handleChange}
              onFocus={handleInputFocus}
            />
          </label>

          <label htmlFor="name" className=" w-full">
            <input
              className="text-black border p-2 rounded-lg w-full"
              type="text"
              placeholder="Kortholder navn"
              name="name"
              required
              value={cardInfo.name}
              onChange={handleChange}
              onFocus={handleInputFocus}
            />
          </label>
          <div className="flex gap-4 w-full">
            <label htmlFor="expiry">
              <input
                className="text-black border-fooGrey-900 border p-2 rounded-lg w-full"
                unique="cardExpiry"
                placeholder="MM/ÅÅ"
                maxLength="5"
                name="expiry"
                required
                value={cardInfo.expiry}
                onKeyDown={handleNumbersOnly}
                onKeyUp={handleCardExpiry}
                onChange={handleChange}
                onFocus={handleInputFocus}
              />
            </label>
            <label htmlFor="cvc">
              <input
                className="text-black border p-2 rounded-lg w-full"
                unique="cardCvc"
                placeholder="CVC"
                maxLength="4"
                name="cvc"
                required
                value={cardInfo.cvc}
                onChange={handleChange}
                onFocus={handleInputFocus}
              />
            </label>
          </div>
        </div>
      </div>
    </fieldset>
  );
}

export default Payment;
