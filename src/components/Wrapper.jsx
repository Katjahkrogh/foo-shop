"use client";
import Camping from "./Camping";
import TicketType from "./TicketType";
import Info from "./Info";
import { useState, useRef, useEffect } from "react";
import Basket from "./Basket";
import Payment from "./Payment";

function Wrapper() {
  const [step, setStep] = useState(0);

  // GET REQUEST - henter ledige billetter til camping
  const [campingAreas, setCampingAreas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/available-spots")
      .then((res) => res.json())
      .then((data) => {
        setCampingAreas(data);
      });
  }, []);
// priser
  const priceVip = 1299;
  const priceRegular = 799;
  const priceGreenCamping = 249;
  const priceTwoPersonTent = 299;
  const priceThreePersonTent = 399;
  const priceTicketAmountTent = 199;

  const [vipAmount, setVipAmount] = useState(0);
  const [ticketAmount, setTicketAmount] = useState(0);
  const [tickets, setTickets] = useState([]);

// skal det være let eller const??
  let totalAmount = vipAmount + ticketAmount;

  const [twoPersonTentValue, setTwoPersonTentValue] = useState(0);
  const [threePersonTentValue, setThreePersonTentValue] = useState(0);

  let totalTentValue = twoPersonTentValue + threePersonTentValue;

  const [showAvailableAreas, setShowAvailableAreas] = useState(false);
  const [showAttendeeInput, setShowAttendeeInput] = useState(false);


  const [selectedArea, setSelectedArea] = useState("");


  const [showTickets, setShowTickets] = useState(false);

  const [reservationID, setReservationID] = useState("");

  const [timeValue, setTimeValue] = useState(null);

  const [showError, setShowError] = useState(false);
  const [showExtras, setShowExtras] = useState(false);

  const [greenCamping, setGreenCamping] = useState(false);
  const [tentSetup, setTentSetup] = useState(false);

  // PUT REQUEST - sender reservation med amount + area
  async function reserveSpot() {
    let headersList = {
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      area: selectedArea,
      amount: totalAmount,
      purchase: [showTickets],
    });

    let response = await fetch("http://localhost:8080/reserve-spot", {
      method: "PUT",
      body: bodyContent,
      headers: headersList,
    });

    let booking = await response.json();
    setReservationID(booking.id);
    setTimeValue(booking.timeout);
  }

  // POST REQUEST - sender endelig bestilling med reservations ID
  async function submit(e) {
    e.preventDefault();
    let headersList = {
      "Content-Type": "application/json",
    };
    let bodyContent = JSON.stringify({ id: reservationID });

    let response = await fetch("http://localhost:8080/fullfill-reservation", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let orderID = await response.json();
    console.log(orderID);
  }

  return (
    <div className="grid grid-cols-3">
      <form onSubmit={submit} id="bookingForm" className="col-span-2">
        {step === 0 && (
          <TicketType
            setStep={setStep}
            setVipAmount={setVipAmount}
            vipAmount={vipAmount}
            setTicketAmount={setTicketAmount}
            ticketAmount={ticketAmount}
            tickets={tickets}
            setTickets={setTickets}
            priceRegular={priceRegular}
            priceVip={priceVip}
          />
        )}
        {step === 1 && (
          <Camping
            setStep={setStep}
            campingAreas={campingAreas}
            totalAmount={totalAmount}
            setSelectedArea={setSelectedArea}
            priceGreenCamping={priceGreenCamping}
            priceThreePersonTent={priceThreePersonTent}
            priceTwoPersonTent={priceTwoPersonTent}
            greenCamping={greenCamping}
            setGreenCamping={setGreenCamping}
            twoPersonTentValue={twoPersonTentValue}
            threePersonTentValue={threePersonTentValue}
          />
        )}
        {step === 2 && <Info setStep={setStep} campingAreas={campingAreas} />}
        {step === 3 && (
          <Payment setStep={setStep} campingAreas={campingAreas} />
        )}
      </form>

      <Basket
        vipAmount={vipAmount}
        ticketAmount={ticketAmount}
        greenCamping={greenCamping}
        setGreenCamping={setGreenCamping}
        twoPersonTentValue={twoPersonTentValue}
        threePersonTentValue={threePersonTentValue}
        priceVIP={priceVip}
        priceRegular={priceRegular}
        priceGreenCamping={priceGreenCamping}
        priceThreePersonTent={priceThreePersonTent}
        priceTwoPersonTent={priceTwoPersonTent}
      />
    </div>
  );
}
export default Wrapper;
