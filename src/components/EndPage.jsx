import React from "react";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function EndPage({ tickets }) {
  return (
    <div className="w-5/6 text-center flex flex-col items-center">
      <h2
        className={`${bebasNeue.className} text-2xl md:text-4xl text-fooYellow-200 mb-5 mt-5`}
      >
        Tak for dit køb!
      </h2>
      <div className="p-5">
        {tickets.map((ticket) => (
          <Image
            src="billet.svg"
            width={800}
            height={800}
            alt="Billet"
            key={ticket.name}
            className="mb-2"
          />
        ))}
      </div>
    </div>
  );
}

export default EndPage;
