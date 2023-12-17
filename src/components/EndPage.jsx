import React from "react";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function EndPage({ tickets }) {
  return (
    <div className="w-5/6 text-center flex flex-col items-center">
      <h2
        className={`${bebasNeue.className} text-4xl md:text-5xl text-fooYellow-200 mb-4 lg:mt-20`}
      >
        Tak for dit køb!
      </h2>
    
      <div className="flex items-baseline gap-2 mt-2 md:mt-4 mb-10">
        <Image
          src={"download.svg"}
          width={20}
          height={20}
          alt="download dine billetter"
        />
        <h3 className="uppercase font-medium text-xs md:text-sm">
          Download dine billetter til foofest 2024
        </h3>
      </div>


      <motion.div
        className="p-5"
        initial={{ opacity: 0, y: 500 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        animate={{ y: 0 }}
        viewport={{ once: true }}
      >
        {tickets.map((ticket) => (
          <Image
            src={"billet.svg"}
            width={800}
            height={800}
            alt="Billet"
            key={ticket.name}
            className="mb-2"
          />
        ))}
      </motion.div>
    </div>
  );
}

export default EndPage;
