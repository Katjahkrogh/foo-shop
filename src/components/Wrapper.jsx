"use client";
import React from "react";
import Camping from "./Camping";
import TicketType from "./TicketType";
import Info from "./Info";
import { useState, useEffect } from "react";
import Basket from "./Basket";
import Payment from "./Payment";
import EndPage from "./EndPage";
import FinalOverview from "./FinalOverview";
import Timer from "./Timer";


function Wrapper() {
  // Skift mellem views ud fra steps
  const [step, setStep] = useState(0);

  // priser billetter
  const priceVip = 1299;
  const priceRegular = 799;

  // priser camping & tilføjelser
  const greenCampingPrice = 249;
  const twoPersonTentPrice = 299;
  const threePersonTentPrice = 399;

  // Camping område valgt
  const [selectedArea, setSelectedArea] = useState(null);

  const campingBtnDisabled = selectedArea === null;
  // let tatTotalPrice = tatPrice * totalAmount; sæt dette ned i kruven

  // antal telt tilføjelser
  const [twoPersonTentAmount, setTwoPersonTentAmount] = useState(0);
  const [threePersonTentAmount, setThreePersonTentAmount] = useState(0);
  const [greenCamping, setGreenCamping] = useState(false);

  // antal billetter
  const [ticketAmount, setTicketAmount] = useState(0);
  const [vipAmount, setVipAmount] = useState(0);
  const [tickets, setTickets] = useState([]);

  // skal det være let eller const??
  let totalAmount = vipAmount + ticketAmount;

  // sætter ID fra resevationen
  const [reservationId, setReservationId] = useState("");


  // GET REQUEST - henter ledige billetter til camping
  const [campingAreas, setCampingAreas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/available-spots")
      .then((res) => res.json())
      .then((data) => {
        setCampingAreas(data);
      });
  }, []);

  // PUT REQUEST - sender reservation med amount + area
  async function reserveSpot() {
    let headersList = {
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      area: selectedArea,
      amount: totalAmount,
    });

    let response = await fetch("http://localhost:8080/reserve-spot", {
      method: "PUT",
      body: bodyContent,
      headers: headersList,
    });

    let booking = await response.json();
    setReservationId(booking.id);

    console.log(booking);
  }

  // POST REQUEST - sender endelig bestilling med reservations ID
  async function submit(e) {
    e.preventDefault();
    let headersList = {
      "Content-Type": "application/json",
    };
    let bodyContent = JSON.stringify({ id: reservationId });

    let response = await fetch("http://localhost:8080/fullfill-reservation", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    setStep((prevStep) => prevStep + 1);

    let orderID = await response.json();
    console.log(orderID);

    //indsæt supabase, fetch, derefter post de info fra formen vi gerne vil gemme.
  }

  return (
    <>
      {step !== 0 && step !== 1 && step !== 5 && (
        <Timer step={step} setStep={setStep} />
      )}
      <main className="flex flex-wrap justify-center xl:mx-20">
        <form onSubmit={submit} id="bookingForm" className="w-full lg:w-4/6">
          {step === 0 && (
            <div className="flex flex-col m-10 sm:px-10 ">
              <TicketType
                setVipAmount={setVipAmount}
                vipAmount={vipAmount}
                setTicketAmount={setTicketAmount}
                ticketAmount={ticketAmount}
                tickets={tickets}
                setTickets={setTickets}
                priceRegular={priceRegular}
                priceVip={priceVip}
              />

              <button
                className="enabled:bg-fooPink-900 disabled:bg-fooPink-900 disabled:opacity-50 p-4 px-8 rounded-full mt-20  place-self-end transition ease-in-out enabled:hover:-translate-y-1 enabled:hover:scale-110 enabled:hover:bg-fooPink-800 duration-300 enabled:cursor-pointer disabled:cursor-not-allowed
              "
                disabled={totalAmount < 1}
                onClick={() => {
                  setStep((prevStep) => prevStep + 1);
                  reserveSpot();
                }}
              >
                VÆLG CAMPING
              </button>
            </div>
          )}
          {step === 1 && (
            <div className="flex flex-col m-10 sm:px-10">
              <Camping
                setStep={setStep}
                campingAreas={campingAreas}
                totalAmount={totalAmount}
                setTickets={setTickets}
                setSelectedArea={setSelectedArea}
                greenCampingPrice={greenCampingPrice}
                greenCamping={greenCamping}
                setGreenCamping={setGreenCamping}
                twoPersonTentPrice={twoPersonTentPrice}
                setTwoPersonTentAmount={setTwoPersonTentAmount}
                setThreePersonTentAmount={setThreePersonTentAmount}
                twoPersonTentAmount={twoPersonTentAmount}
                threePersonTentAmount={threePersonTentAmount}
                threePersonTentPrice={threePersonTentPrice}
              />
              <button
                className="enabled:bg-fooPink-900 disabled:bg-fooPink-900 disabled:opacity-50 p-4 px-8 rounded-full mt-20  place-self-end transition ease-in-out enabled:hover:-translate-y-1 enabled:hover:scale-110 enabled:hover:bg-fooPink-800 duration-300 enabled:cursor-pointer disabled:cursor-not-allowed
              "
                disabled={campingBtnDisabled}
                onClick={() => {
                  setStep((prevStep) => prevStep + 1);
                  reserveSpot();
                }}
              >
                FIND MINE BILLETTER
              </button>
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col m-10 sm:px-10">
              <Info
                setStep={setStep}
                campingAreas={campingAreas}
                tickets={tickets}
              />
              <button
                className="enabled:bg-fooPink-900 disabled:bg-fooPink-900 disabled:opacity-50 p-4 px-8 rounded-full mt-20  place-self-end transition ease-in-out enabled:hover:-translate-y-1 enabled:hover:scale-110 enabled:hover:bg-fooPink-800 duration-300 enabled:cursor-pointer disabled:cursor-not-allowed
              "
                onClick={() => {
                  setStep((prevStep) => prevStep + 1);
                }}
              >
                VÆLG BETALING
              </button>
            </div>
          )}
          {step === 3 && (
            <div className="flex flex-col m-10 sm:px-10 ">
              <Payment setStep={setStep} campingAreas={campingAreas} />
              <button
                className="bg-fooPink-900 p-4 px-8 rounded-full mt-10 place-self-end transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-fooPink-800 duration-300 cursor-pointer"
                onClick={() => {
                  setStep((prevStep) => prevStep + 1);
                }}
              >
                SE OVERBLIK OG BETAL
              </button>
            </div>
          )}
          {step === 4 && (
            <div className="flex flex-col m-10 sm:mx-40 p-10 align-center place-self-center rounded-large bg-fooGrey-900 ">
              <FinalOverview
                vipAmount={vipAmount}
                ticketAmount={ticketAmount}
                greenCamping={greenCamping}
                setGreenCamping={setGreenCamping}
                twoPersonTentAmount={twoPersonTentAmount}
                threePersonTentAmount={threePersonTentAmount}
                priceVIP={priceVip}
                totalAmount={totalAmount}
                priceRegular={priceRegular}
                greenCampingPrice={greenCampingPrice}
                threePersonTentPrice={threePersonTentPrice}
                twoPersonTentPrice={twoPersonTentPrice}
                selectedArea={selectedArea}
              />
              <button
                type="submit"
                id="bookingForm"
                className="enabled:bg-fooPink-900 disabled:bg-fooPink-900 disabled:opacity-50 p-4 px-8 rounded-full mt-20  place-self-end transition ease-in-out enabled:hover:-translate-y-1 enabled:hover:scale-110 enabled:hover:bg-fooPink-800 duration-300 enabled:cursor-pointer disabled:cursor-not-allowed
              "
              >
                BETAL (submit)
              </button>
            </div>
          )}
        </form>

        {step === 5 && <EndPage />}

        {step < 4 && (
          <div className="w-full lg:w-2/6">
            <Basket
              vipAmount={vipAmount}
              ticketAmount={ticketAmount}
              greenCamping={greenCamping}
              setGreenCamping={setGreenCamping}
              twoPersonTentAmount={twoPersonTentAmount}
              threePersonTentAmount={threePersonTentAmount}
              priceVIP={priceVip}
              totalAmount={totalAmount}
              priceRegular={priceRegular}
              greenCampingPrice={greenCampingPrice}
              threePersonTentPrice={threePersonTentPrice}
              twoPersonTentPrice={twoPersonTentPrice}
              selectedArea={selectedArea}
            />
          </div>
        )}
      </main>
    </>
  );
}
export default Wrapper;
