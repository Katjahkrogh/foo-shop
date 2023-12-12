import React from 'react'
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});


function EndPage() {
  return (
    <div>
      <h2
        className={`${bebasNeue.className} text-3xl text-fooYellow-200 mb-4`}
      >ENDPAGE</h2>
    </div>
  );
}

export default EndPage