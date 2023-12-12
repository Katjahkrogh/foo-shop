import React from 'react'
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});


function EndPage() {
  return (
    <div className='w-4/6'>
      <h2
        className={`${bebasNeue.className} text-2xl md:text-4xl text-fooYellow-200 mb-4`}
      >
        ENDPAGE
      </h2>
      <img src="billet.svg" className='' alt='Billet'/>
    </div>
    
  );
}

export default EndPage