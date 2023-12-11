"use client";
import Camping from "./Camping";
import TicketType from "./TicketType";
import Info from "./Info";
import { useState, useEffect } from "react";
import Basket from "./Basket";
import Payment from "./Payment";

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
  const tatPrice = 199;

  let totalTentPrice = twoPersonTentPrice + threePersonTentPrice;

  // Camping område valgt
  const [selectedArea, setSelectedArea] = useState("");

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

  // sætter tiden fra reservationen
  const [counter, setCounter] = useState(null);



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
    setCounter(booking.timeout);

    console.log(booking);
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
          <div>
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
            <button
              className="bg-fooPink-900 p-4 px-8 rounded-full mt-10"
              onClick={() => {
                setStep((prevStep) => prevStep + 1);
              }}
            >
              GÅ
            </button>
          </div>
        )}
        {step === 1 && (
          <div>
            <Camping
              setStep={setStep}
              campingAreas={campingAreas}
              totalAmount={totalAmount}
              setSelectedArea={setSelectedArea}
              priceGreenCamping={priceGreenCamping}
              greenCamping={greenCamping}
              setGreenCamping={setGreenCamping}
              twoPersonTentPrice={twoPersonTentPrice}
              threePersonTentPrice={threePersonTentPrice}
            />
            <button
              className="bg-fooPink-900 p-4 px-8 rounded-full mt-10"
              onClick={() => {
                setStep((prevStep) => prevStep + 1);
                reserveSpot();
              }}
            >
              RESEVER
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <Info setStep={setStep} campingAreas={campingAreas} />
            <button
              className="bg-fooPink-900 p-4 px-8 rounded-full mt-10"
              onClick={() => {
                setStep((prevStep) => prevStep + 1);
              }}
            >
              GÅ
            </button>
          </div>
        )}
        {step === 3 && (
          <div>
            <Payment setStep={setStep} campingAreas={campingAreas} />
            <button
              type="submit"
              id="bookingForm"
              className="bg-fooPink-900 p-4 px-8 rounded-full mt-10"
            >
              SUBMIT
            </button>
          </div>
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
        totalAmount={totalAmount}
        priceRegular={priceRegular}
        priceGreenCamping={priceGreenCamping}
        priceThreePersonTent={priceThreePersonTent}
        priceTwoPersonTent={priceTwoPersonTent}
        selectedArea={selectedArea}
      />
    </div>
  );
}
export default Wrapper;
