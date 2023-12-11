function Camping(props) {
  // Funktion til håndtering af ændringer i valgte campingområde
  const handleSelectArea = (event) => {
    const selectedAreaId = event.target.value;
    props.setSelectedArea(selectedAreaId);
  };

  const totalTwoTentAmount = props.twoPersonTentAmount;
  const totalThreeTentAmount = props.threePersonTentAmount;

  return (
    <fieldset className="m-10 p-10">
        {/* VÆLG CAMPING AREA */}
        <div>
          <h2 className="text-fooYellow-200 text-xl mb-2">
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
            <label htmlFor="telt2" className="flex justify-between">
              <div> 2 PERSONERS TELT + {props.twoPersonTentPrice} DKK</div>
              {/* FJERN 2 perstelt */}
              <button
                type="button"
                aria-label={`Fjern 1x 2-personers telt`}
                onClick={() => {
                  if (props.twoPersonTentAmount > 0) {
                    props.setTwoPersonTentAmount(props.twoPersonTentAmount - 1);
                    props.setTickets((obj) => {
                      const removeFromBasket = obj.findIndex(
                        (tent) => tent.price === props.twoPersonTentPrice
                      );
                      if (removeFromBasket !== -1) {
                        return obj.filter(
                          (_, index) => index !== removeFromBasket
                        );
                      } else {
                        return obj;
                      }
                    });
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  class="bi bi-dash-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                </svg>
              </button>
              {/* INPUT TELT-2 */}
              <input
                className="text-black mx-4 appearance-none border p-2 rounded w-20"
                type="number"
                id="telt2"
                value={totalTwoTentAmount}
                name="telt"
                min={0}
              />{" "}
              {/* TILFØJ 2 pers telt */}
              <button
                type="button"
                aria-label={`Tilføj 1x 2-personers telt`}
                onClick={() => {
                  props.setTwoPersonTentAmount(props.twoPersonTentAmount + 1);
                  props.setTickets((obj) =>
                    obj.concat({
                      ticketName: "Telt2",
                      id: obj.length,
                      price: props.twoPersonTentPrice,
                    })
                  );
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  class="bi bi-plus-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
              </button>
            </label>

            <label htmlFor="telt3">
              <div> 3 PERSONERS TELT + {props.threePersonTentPrice} DKK</div>

              {/* FJERN 1x 3-pers telt */}
              <button
                type="button"
                aria-label={`Fjern 1x 3-personers telt`}
                onClick={() => {
                  if (props.threePersonTentAmount > 0) {
                    props.setThreePersonTentAmount(
                      props.threePersonTentAmount - 1
                    );
                    props.setTickets((obj) => {
                      const removeFromBasket = obj.findIndex(
                        (tent) => tent.price === props.threePersonTentPrice
                      );
                      if (removeFromBasket !== -1) {
                        return obj.filter(
                          (_, index) => index !== removeFromBasket
                        );
                      } else {
                        return obj;
                      }
                    });
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  class="bi bi-dash-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                </svg>
              </button>
              {/* INPUT 3-pers telt */}
              <input
                className="text-black mx-4 appearance-none border p-2 rounded w-20"
                type="number"
                id="telt3"
                name="telt"
                value={totalThreeTentAmount}
                min={0}
              />

              {/* TILFØJ 3-pers telt */}
              <button
                type="button"
                aria-label={`Tilføj 1x 3-personers telt`}
                onClick={() => {
                  props.setThreePersonTentAmount(
                    props.threePersonTentAmount + 1
                  );
                  props.setTickets((obj) =>
                    obj.concat({
                      ticketName: "Telt3",
                      id: obj.length,
                      price: props.threePersonTentPrice,
                    })
                  );
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  class="bi bi-plus-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
              </button>
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
    </fieldset>
  );
}

export default Camping;
