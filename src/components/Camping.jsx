function Camping(props) {
  // Funktion til håndtering af ændringer i valgte campingområde
  const handleSelectArea = (event) => {
    const selectedAreaId = event.target.value;
    props.setSelectedArea(selectedAreaId);
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
            {props.campingAreas
              .filter((spot) => spot.available > props.totalAmount)
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
                type="number"
                id="telt2"
                name="telt"
                min={0}
              />
              2 PERSONERS TELT + {props.twoPersonTentPrice} DKK
            </label>
            <label htmlFor="telt3">
              <input
                className="text-black"
                type="number"
                id="telt3"
                name="telt"
                min={0}
              />
              3 PERSONERS TELT + {props.threePersonTentPrice} DKK
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
      </div>
    </fieldset>
  );
}

export default Camping;
