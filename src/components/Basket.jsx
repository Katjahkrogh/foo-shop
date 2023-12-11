import React from "react";

function Basket(props) {
  let vipTotal = props.vipAmount * props.priceVIP;
  let regularTotal = props.ticketAmount * props.priceRegular;
  let twoPersonTentTotal =
    props.twoPersonTentAmount * props.twoPersonTentPrice;
  let threePersonTentTotal =
    props.threePersonTentAmount * props.threePersonTentPrice;
    
  const bookingFee = 99;

  // sætter GreenCampingTotal til at være greenCampingPrice, hvis greenCamping er true, hvis den er false sætter prisen til 0.

  let greenCampingTotal = props.greenCampingPrice

  if (props.greenCamping === true) {
    greenCampingTotal = props.priceGreenCamping;
  } else {
    greenCampingTotal = 0;
  }

  const total =
    vipTotal +
    regularTotal +
    greenCampingTotal+
    twoPersonTentTotal +
    threePersonTentTotal +
    bookingFee;
  const subtotal = total - greenCampingTotal - bookingFee;

  return (
    <aside className="bg-fooGrey-900 m-10 rounded-xl p-20 max-h-96 flex flex-col gap-4">
      <p>ANTAL BILLETTER: {props.totalAmount}</p>
      <p>CAMPING OMRÅDE: {props.selectedArea}</p>
      <p>Booking gebyr: {bookingFee} DKK</p>
      <p>Billetpris: {subtotal} DKK</p>
      <p>I alt: {total} DKK</p>
    </aside>
  );
}

export default Basket;
