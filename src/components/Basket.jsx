import React from "react";

function Basket(props) {
  let vipTotal = props.vipAmount * props.priceVIP;
  let regularTotal = props.ticketAmount * props.priceRegular;
  let twoPersonTentTotal = props.twoPersonTentAmount * props.twoPersonTentPrice;
  let threePersonTentTotal =
    props.threePersonTentAmount * props.threePersonTentPrice;

  const bookingFee = 99;

  // sætter GreenCampingTotal til at være greenCampingPrice, hvis greenCamping er true, hvis den er false sætter prisen til 0.

  let greenCampingTotal = props.greenCampingPrice;

  if (props.greenCamping === true) {
    greenCampingTotal = props.priceGreenCamping;
  } else {
    greenCampingTotal = 0;
  }

  const total =
    vipTotal +
    regularTotal +
    greenCampingTotal +
    twoPersonTentTotal +
    threePersonTentTotal +
    bookingFee;
  const subtotal = total - greenCampingTotal - bookingFee;

  return (
    <aside className="bg-fooGrey-900 m-10 rounded-xl p-10 max-h-96 flex flex-col gap-4 min-w-max">
      <h3>BILLETTER</h3>
      {props.ticketAmount > 0 && (
        <div className="flex justify-between">
          <p>FOO-BILLET x{props.ticketAmount} </p> <p>{props.priceRegular} DKK</p>
        </div>
      )}
      {props.vipAmount > 0 && (
        <div className="flex justify-between">
          <p>VIP-BILLET x{props.vipAmount} </p> <p>{props.priceVIP} DKK</p>
        </div>
      )}

      {props.selectedArea && (
        <div>
          <h3>CAMPING OMRÅDE</h3> <p>{props.selectedArea}</p>
        </div>
      )}

      <h3>OVERSIGT</h3>
      {props.twoPersonTentAmount > 0 && (
        <div className="flex justify-between text-sm">
          <p> + 2 personers telt</p>
          <p>{props.twoPersonTentPrice} DKK</p>
        </div>
      )}
      {props.threePersonTentAmount > 0 && (
        <div className="flex justify-between text-sm ">
          <p> + 3 personers telt</p>
          <p>{props.threePersonTentPrice} DKK</p>
        </div>
      )}
      <div className="flex justify-between text-sm ">
        <p>Booking gebyr</p> <p>{bookingFee} DKK</p>
      </div>
      <div className="flex justify-between text-sm">
        {" "}
        <p>Billetter </p> <p> {subtotal} DKK</p>
      </div>
      <div className="flex justify-between text-xl">
        {" "}
        <p>I alt</p> <p>{total} DKK</p>
      </div>
    </aside>
  );
}

export default Basket;
