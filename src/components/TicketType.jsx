import React from "react";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function TicketType({
  setStep, // funktion til at opdatere trin i bookingprocessen
  setVipAmount, // funktion til at opdatere antal VIP-billetter
  vipAmount, // tilstand for antal VIP-billetter
  setTicketAmount, // funktion til at opdatere antal "foo-billetter"
  ticketAmount, // tilstand for antal "foo-billetter"
  setTickets, // funktion til at opdatere billetlisten
  priceVip,
  priceRegular,
}) {
  const totalTicketAmount = ticketAmount; // Total antal "foo-billetter"
  const totalVipAmount = vipAmount; // Total antal VIP-billetter

  return (
    <fieldset>
      <h2
        className={`${bebasNeue.className} text-2xl md:text-4xl text-fooYellow-200 mb-10`}
      >
        VÆLG DINE BILLETTER
      </h2>

      {/* FOO-BILLET sektion */}
      <div className="flex justify-between">
        <div>
          <h3 className="font-medium text-lg md:text-2xl">FOO-BILLET</h3>
          <p className="text-base md:text-lg text-fooGrey-200">799 DKK</p>
        </div>

        <label className="flex items-center" htmlFor="foo-billet">
          {/* FJERN 1 FOO-BILLET  */}
          <button
            type="button"
            aria-label={`Fjern 1 foo-billet`}
            onClick={() => {
              if (ticketAmount > 0) {
                setTicketAmount(ticketAmount - 1);
                setTickets((obj) => {
                  const removeFromBasket = obj.findIndex(
                    (ticket) => ticket.price === priceRegular
                  );
                  if (removeFromBasket !== -1) {
                    return obj.filter((_, index) => index !== removeFromBasket);
                  } else {
                    return obj;
                  }
                });
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              className="bi bi-dash-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
          </button>

          {/* INPUT FOO-BILLET */}
          <input
            className="text-black mx-4 appearance-none border p-2 rounded w-20"
            type="number"
            min={0}
            name="billet"
            id="foo-billet"
            value={totalTicketAmount}
          />

          {/* TILFØJ 1 FOO-BILLet */}
          <button
            type="button"
            aria-label={`Tilføj 1 foo-billet`}
            onClick={() => {
              setTicketAmount(ticketAmount + 1);
              setTickets((obj) =>
                obj.concat({
                  ticketName: "FOO-billet",
                  id: obj.length,
                  price: priceRegular,
                })
              );
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              className="bi bi-plus-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
          </button>
        </label>
      </div>

      {/* VIP-BILLET sektion */}
      <div className="flex justify-between mt-10">
        <div>
          <h3 className="font-medium text-lg md:text-2xl">VIP-BILLET</h3>
          <p className="text-base md:text-lg text-fooGrey-200">1299 DKK</p>
        </div>
        <label className="flex items-center" htmlFor="vip-billet">
          {/* FJERN 1 VIP-billet  */}
          <button
            type="button"
            aria-label={`Fjern 1 VIP-billet`}
            onClick={() => {
              if (vipAmount > 0) {
                setVipAmount(vipAmount - 1);
                setTickets((obj) => {
                  const removeFromBasket = obj.findIndex(
                    (ticket) => ticket.price === priceVip
                  );
                  if (removeFromBasket !== -1) {
                    return obj.filter((_, index) => index !== removeFromBasket);
                  } else {
                    return obj;
                  }
                });
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              className="bi bi-dash-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
          </button>

          {/* INPUT VIP */}
          <input
            className="text-black mx-4 appearance-none border p-2 rounded w-20"
            type="number"
            name="billet"
            id="vip-billet"
            min={0}
            value={totalVipAmount}
          />

          {/* TILFØJ 1 VIP-billet  */}
          <button
            type="button"
            aria-label={`Tilføj 1 VIP-billet`}
            onClick={() => {
              setVipAmount(vipAmount + 1);
              setTickets((obj) =>
                obj.concat({
                  ticketName: "VIP-billet",
                  id: obj.length,
                  price: priceVip,
                })
              );
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              className="bi bi-plus-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
          </button>
        </label>
      </div>

    </fieldset>
  );
}

export default TicketType;
