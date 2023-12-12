import React from "react";

function Info({ tickets }) {
  return (
    <fieldset className="m-10 p-10">
      <h2 className="text-fooYellow-200 text-xl mb-2">INFORMATION</h2>
      {tickets.map((ticket) => (
        <div
          className="container mx-auto border border-white p-6 mb-4"
          key={ticket.id}
        >
          <legend className="text-fooYellow-200 text-xl mt-4 mb-2">
          {ticket.ticketName}
          </legend>
          <p>Billet nr. {ticket.id +1}</p>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <label htmlFor="first-name">
              <input
                type="text"
                placeholder="First name"
                className="border p-2 rounded w-full  text-black"
                id="first-name"
                required
              ></input>
            </label>
            <label htmlFor="last-name">
              <input
                type="text"
                placeholder="Last name"
                className="border p-2 rounded w-full  text-black"
                id="last-name"
                required
              ></input>
            </label>
            <label htmlFor="email">
              <input
                type="email"
                placeholder="Email address"
                id="email"
                className="border p-2 rounded w-full  text-black"
                required
              ></input>
            </label>
            <label htmlFor="phone">
              <input
                type="phone"
                placeholder="Phone number"
                className="border p-2 rounded w-full text-black"
                id="phone"
                required
              ></input>
            </label>
          </div>
        </div>
      ))}
    </fieldset>
  );
}

export default Info;
