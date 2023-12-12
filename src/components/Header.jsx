import React from "react";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function Header() {
  return (
    <header>
      <div className="flex justify-between bg-fooGrey-900 py-6 overflow-x-hidden">
        <div className="ml-7">
          <h1
            className={`text-5xl sm:text-7xl ${bebasNeue.className} text-fooYellow-200 mb-2 mt-4`}
          >
            FOOFEST 2024
          </h1>
          <p className="text-lg">10.07.2024 - 17.07.2024</p>
        </div>
        <Image src="/logo.svg" width={200} height={200} alt="logo" className="-mr-28 sm:-mr-16"/>
      </div>
      <hr className="p-2 bg-fooPink-900 w-screen border-none"></hr>
    </header>
  );
}

export default Header;
