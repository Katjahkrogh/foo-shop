import React from 'react'
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const firstTicket = tickets[0];

function InfoForm(tickets) {
  return (
    <div
      className="container mx-auto border border-white p-6 mb-4"
      key={tickets.id}
    >
      <legend
        className={`${bebasNeue.className} text-2xl md:text-4xl text-fooYellow-200`}
      >
        {tickets.ticketName}
      </legend>
      <p className="font-medium  text-lg mb-8 text-fooGrey-200 ">
        Deltager nr. 1 (dig)
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="first-name">Fornavn</label>
          <input
            type="text"
            placeholder="Fornavn"
            className="border p-2 rounded-lg w-full  text-black"
            id="first-name"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="last-name">Efternavn</label>
          <input
            type="text"
            placeholder="Efternavn"
            className="border p-2 rounded-lg w-full  text-black"
            id="last-name"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="eksempel@mail.com"
            id="email"
            className="border p-2 rounded-lg w-full  text-black"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="phone"> Telefon </label>
          <input
            type="phone"
            placeholder="12 34 56 78"
            className="border p-2 rounded-lg w-full text-black"
            id="phone"
            required
          ></input>
        </div>
      </div>
    </div>
  );
}

export default InfoForm