import Knap from "./Knap";

function TicketType() {
  return (
    <div className="bg-fooGrey-900 m-10 rounded-xl p-20">
    <h1>FOOFEST </h1>

    <h2>VÆLG DINE BILLETTER</h2>
    
      <div className="flex justify-between">
        <div>
          <h3>FOO-BILLET</h3>
          <p>799 DKK</p>
        </div>
        <label htmlFor="foo-billet">
          <input type="number" name="foo-billet" min={0} />
        </label>
      </div>

      <div className="flex justify-between">
        <div>
          <h3>VIP-BILLET</h3>
          <p>1299 DKK</p>
        </div>
        <label htmlFor="vip-billet">
          <input type="number" name="vip-billet" min={0} />
        </label>
      </div>

      <Knap text="SEND">
      </Knap>
    </div>
  );
}

export default TicketType;
