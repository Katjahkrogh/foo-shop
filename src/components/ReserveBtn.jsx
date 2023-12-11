import React from 'react'

function ReserveBtn(setStep, text){
  return (
    <div className="flex justify-end">
      <button
        className="bg-fooPink-900 p-4 px-8 rounded-full mt-10"
        onClick={() => {
          setStep((prevStep) => prevStep + 1);
          reserveSpot();
          // count();
        }}
      >
        {text}
      </button>
    </div>
  );
}

export default ReserveBtn