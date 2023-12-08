import Knap from "./Knap";

function TicketType({setStep, handleInputValue, inputValue, setInputValue}) {

  return (
    <div className="bg-fooGrey-900 m-10 rounded-xl p-20">
      <h1 className="text-fooYellow-200 text-3xl">FOOFEST </h1>
      <p>Mandag d. 10 Juli - Søndag d. 17 Juli 2024</p>

      <form action="" id="billet">
        <fieldset>
        <legend className="text-fooYellow-200 text-xl mt-4 mb-2">
          VÆLG DINE BILLETTER
        </legend>
        <div className="flex justify-between">
          <div>
            <h3>FOO-BILLET</h3>
            <p>799 DKK</p>
          </div>
          <label htmlFor="foo-billet">
            <input
              onChange={handleInputValue}
              className="text-black"
              type="number"
              name="ticket"
              min={0}
            />
          </label>
        </div>

        <div className="flex justify-between mt-10">
          <div>
            <h3>VIP-BILLET</h3>
            <p>1299 DKK</p>
          </div>
          <label htmlFor="vip-billet">
            <input
              onChange={handleInputValue}
              className="text-black"
              type="number"
              name="ticket"
              min={0}
            />
          </label>
        </div>
        </fieldset>
        <div className="flex justify-end">
          <Knap
            setInputValue={setInputValue}
            inputValue={inputValue}
            setStep={setStep}
            id="billet"
            text="VÆLG CAMPING"
          ></Knap>
        </div>
      </form>
    </div>
  );
}

export default TicketType;
