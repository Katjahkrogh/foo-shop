import Knap from "./Knap";

function Camping() {
  return (
    <div className="bg-fooGrey-900 m-10 rounded-xl p-20">
      <h1 className="text-fooYellow-200 text-3xl">FOOFEST </h1>
      <p>Mandag d. 10 Juli - Søndag d. 17 Juli 2024</p>

      <form action="" id="camping">
        {/* VÆLG CAMPING */}
        <fieldset>
          <legend className="text-fooYellow-200 text-xl mt-4 mb-2">
            VÆLG CAMPING OMRÅDE
          </legend>
          <p>CAMPING RESEVERTATION 99 DKK</p>
          <label htmlFor="svartheim">
            <input
              className="text-black"
              type="radio"
              id="Svartheim"
              value="Svartheim"
              name="camping"
            />
            Svartheim
          </label>
          <label htmlFor="nilfheim">
            <input
              className="text-black"
              type="radio"
              id="Nilfheim"
              value="Nilfheim"
              name="camping"
            />
            Nilfheim
          </label>
          <label htmlFor="muspelheim">
            <input
              className="text-black"
              type="radio"
              id="Muspelheim"
              value="Muspelheim"
              name="camping"
            />
            Muspelheim
          </label>
          <label htmlFor="helheim">
            <input
              className="text-black"
              type="radio"
              id="Helheim"
              value="Helheim"
              name="camping"
            />
            Helheim
          </label>
          <label htmlFor="alfheim">
            <input
              className="text-black"
              type="radio"
              id="Alfheim"
              value="Alfheim"
              name="camping"
            />
            Alfheim
          </label>
        </fieldset>

        {/* TILKØB TELTE */}
        <fieldset>
          <legend className="text-fooYellow-200 text-xl mt-4 mb-2">
            TILKØB AF TELTE
          </legend>
          <p>INKL. OPSÆTNING AF TELT PÅ PLADSEN</p>
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
        </fieldset>

        {/* GREEN CAMPING */}
        <fieldset>
          <legend className="text-fooYellow-200 text-xl mt-4 mb-2">
            TILVALG
          </legend>
          <label htmlFor="green">
            <input
              className="text-black"
              type="checkbox"
              name="green"
              id="green"
            />
            GREEN CAMPING + 299 DKK
          </label>
        </fieldset>
        <div className="flex justify-end">
          <Knap id="camping" text="FIND MINE BILLETTER"></Knap>
        </div>
      </form>
    </div>
  );
}

export default Camping;
