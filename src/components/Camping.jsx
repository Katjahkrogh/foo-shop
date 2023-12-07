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
          <label htmlFor="midgard">
            <input className="text-black" type="radio" name="midgard" />
            Midgard
          </label>
          <label htmlFor="vanaheim">
            <input className="text-black" type="radio" name="vanaheim" />
            Vanaheim
          </label>
          <label htmlFor="jotunheim">
            <input className="text-black" type="radio" name="jotunheim" />
            Jotunheim
          </label>
        </fieldset>

        {/* TILKØB TELTE */}
        <fieldset>
          <legend className="text-fooYellow-200 text-xl mt-4 mb-2">
            TILKØB AF TELTE
          </legend>
          <p>INKL. OPSÆTNING AF TELT PÅ PLADSEN</p>
          <label htmlFor="telt2">
            <input className="text-black" type="radio" name="telt2" />2
            PERSONERS TELT + 299 DKK
          </label>
          <label htmlFor="telt3">
            <input className="text-black" type="radio" name="telt3" />3
            PERSONERS TELT + 399 DKK
          </label>
          <label htmlFor="person-telt">
            <input className="text-black" type="radio" name="person-telt" />
            TELT TIL ANTAL BILLETTER + 199 DKK PER TELT
          </label>
        </fieldset>

        {/* GREEN CAMPING */}
        <fieldset>
          <legend className="text-fooYellow-200 text-xl mt-4 mb-2">
            TILVALG
          </legend>
          <label htmlFor="telt2">
            <input className="text-black" type="radio" name="telt2" />2
            PERSONERS TELT + 299 DKK
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
