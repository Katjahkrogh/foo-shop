import React from "react";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function Info({
  tickets,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail, phone, setPhone
}) {

  return (
    <fieldset>
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
            <div>
              <label htmlFor="fornavn">Fornavn</label>
              <input
                type="text"
                placeholder="Fornavn"
                className="border p-2 rounded-lg w-full  text-black"
                id="fornavn"
                name="first-name"
                onChange={(event) => setFirstName(event.target.value)}
                value={firstName}
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
                name="last-name"
                onChange={(event) => setLastName(event.target.value)}
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
                className="border p-2 rounded-lg w-full  text-black"
                onChange={(event) => setEmail(event.target.value)}
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
                onChange={(event) => setPhone(event.target.value)}
                required
              ></input>
            </div>
          </div>
        </div>
      ))}
    </fieldset>
  );
}

export default Info;
