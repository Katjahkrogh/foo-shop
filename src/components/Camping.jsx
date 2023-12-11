import NextStepBtn from "./NextStepBtn";

function Camping({ campingAreas, totalAmount, setSelectedArea, setStep }) {
  // Funktion til håndtering af ændringer i valgte campingområde
  const handleSelectArea = (event) => {
    const selectedAreaId = event.target.value;
    setSelectedArea(selectedAreaId);

    console.log(handleSelectArea);
  };

  return (
    <fieldset>
      <div className="bg-fooGrey-900 m-10 rounded-xl p-20">
        {/* VÆLG CAMPING AREA */}
        <div>
          <h2 className="text-fooYellow-200 text-xl mt-4 mb-2">
            VÆLG CAMPING OMRÅDE
          </h2>
          <p>CAMPING RESEVERTATION 99 DKK</p>
          <div className="flex flex-wrap gap-6 mt-6">
            {campingAreas
              .filter((spot) => spot.available > totalAmount)
              .map((spot) => (
                <div key={spot.area}>
                  <input
                    className="text-black"
                    type="radio"
                    id={spot.area}
                    value={spot.area}
                    name="camping"
                    onChange={handleSelectArea}
                  />
                  <label htmlFor={spot.area} className="ml-2">
                    {spot.area}
                  </label>
                  <p>{spot.available} ledige pladser</p>
                </div>
              ))}
          </div>
        </div>
        {/* TILKØB TELTE */}
        <div>
          <h2 className="text-fooYellow-200 text-xl mt-4 mb-2">
            TILKØB AF TELTE
          </h2>
          <p>INKL. OPSÆTNING AF TELT PÅ PLADSEN</p>
          <div className="flex flex-col gap-4 mt-6">
            <label htmlFor="telt2">
              <input
                className="text-black"
                type="radio"
                value={299}
                id="telt2"
                name="telt"
              />
              2 PERSONERS TELT + 299 DKK
            </label>
            <label htmlFor="telt3">
              <input
                className="text-black"
                type="radio"
                value={399}
                id="telt3"
                name="telt"
              />
              3 PERSONERS TELT + 399 DKK
            </label>
            <label htmlFor="person-telt">
              <input
                className="text-black"
                type="radio"
                value={199}
                id="person-telt"
                name="telt"
              />
              TELT TIL ANTAL BILLETTER + 199 DKK PER TELT
            </label>
          </div>
        </div>
        {/* GREEN CAMPING */}
        <div>
          <h2 className="text-fooYellow-200 text-xl mt-4 mb-2">TILVALG</h2>
          <label htmlFor="green">
            <input
              className="text-black"
              type="checkbox"
              name="green"
              id="green"
            />
            GREEN CAMPING + 299 DKK
          </label>
        </div>
        <div className="flex justify-end">
          <NextStepBtn
            setStep={setStep}
            text="FIND MINE BILLETTER"
          ></NextStepBtn>
        </div>
      </div>
    </fieldset>
  );
}

export default Camping;
