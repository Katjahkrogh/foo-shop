import React from "react";

function Basket(props) {
  const vipTotal = props.vipAmount * props.priceVIP;
  const regularTotal = props.ticketAmount * props.priceRegular;
  let greenCampingTotal = props.priceGreenCamping;
  const twoPersonTentTotal =
    props.twoPersonTentValue * props.priceTwoPersonTent;
  const threePersonTentTotal =
    props.threePersonTentValue * props.priceThreePersonTent;
  const bookingFee = 99;

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
    <aside className="bg-fooGrey-900 m-10 rounded-xl p-20 max-h-96">
      <p>Booking fee {bookingFee} DKK</p>
      <p>Subtotal: {subtotal} DKK</p>
      <p>Total: {total} DKK</p>
    </aside>
  );
}

export default Basket;
