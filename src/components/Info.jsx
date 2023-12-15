import React from "react";
import { Bebas_Neue } from "next/font/google";
import { useState, useEffect } from "react";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});


function Info({ tickets, setStep }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); 

  const [isFormValid, setIsFormValid] = useState(false);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!firstName) {
      errors.firstName = "Name is required.";
    }
    if (!lastName) {
      errors.lastName = "Name is required.";
    }

    if (!email) {
      errors.email = "Email is required.";
    } 

    if (!phone) {
      errors.password = "Password is required.";
    } 

    setErrors(errors);
    setIsFormValid(true);
  }; 

     const handleInfoBtn = () => {
      validateForm();

       if (isFormValid === true) {
         console.log("info is valid!");
           setStep((prevStep) => prevStep + 1);
       } else {
         console.log("info not valid");
        
       }
     }; 

  return (
    <fieldset id="infoStep">
      <h2
        className={`${bebasNeue.className} text-2xl md:text-4xl text-fooYellow-200 `}
      >
        INFORMATION
      </h2>
      <p className="text-sm text-fooGrey-200 mb-10">
        UDFYLD INFORMATION TIL DIN BILLET
      </p>

      {tickets.map((ticket) => (
        <div
          className="container mx-auto border-b border-white mb-4"
          key={ticket.id}
        >
          <legend
            className={`${bebasNeue.className} text-2xl md:text-4xl text-fooYellow-200`}
          >
            {ticket.ticketName}
          </legend>
          <p className="font-medium  text-lg mb-8 text-fooGrey-200 ">
            Deltager nr. {ticket.id + 1}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
            {errors.firstName && (<p className="text-red-500"> hallooooo </p>)}
            <div>
              <label htmlFor="fornavn">Fornavn</label>
              
              <input
                type="text"
                placeholder="Fornavn"
                className="border p-2 rounded-lg w-full  text-black"
                id="fornavn"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                name="firstName"
                required
              ></input>
            </div>
            <div>
              <label htmlFor="efternavn">Efternavn</label>
              <input
                type="text"
                placeholder="Efternavn"
                className="border p-2 rounded-lg w-full  text-black"
                id="efternavn"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                name="lastName"
                required
              ></input>
            </div>
            <div>
              <label htmlFor="mail">Email</label>
              <input
                type="email"
                placeholder="eksempel@mail.com"
                id="mail"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded-lg w-full  text-black"
                required
              ></input>
            </div>
            <div>
              <label htmlFor="telefon"> Telefon </label>
              <input
                type="tel"
                placeholder="12 34 56 78"
                className="border p-2 rounded-lg w-full text-black"
                id="telefon"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              ></input>
            </div>
          </div>
        </div>
      ))}
      <button
        className="enabled:bg-fooPink-900 disabled:bg-fooPink-900 disabled:opacity-50 p-4 px-8 rounded-full w-full md:w-fit mt-10 md:mt-20 place-self-end transition ease-in-out enabled:hover:-translate-y-1 enabled:hover:scale-110 enabled:hover:bg-fooPink-800 duration-300 enabled:cursor-pointer disabled:cursor-not-allowed
              "
        onClick={handleInfoBtn}
      >
        VÆLG BETALING
      </button>
    </fieldset>
  );
}

export default Info;
