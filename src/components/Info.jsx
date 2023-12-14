import React from "react";
import { Bebas_Neue } from "next/font/google";
import { useForm, Controller } from "react-hook-form";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function Info({ tickets, formRef }) {
   const { control, register } = useForm();

  return (
    <fieldset id="infoStep">
      <h2
        className={`${bebasNeue.className} text-2xl md:text-4xl text-fooYellow-200 `}
      >
        INFORMATION
      </h2>
      <p className="text-sm text-fooGrey-200 mb-10">
        UDFYLD INFORMATION TIL DIN BILLET
      </p>

      {tickets.map((ticket) => (
        <div
          className="container mx-auto border-b border-white mb-4"
          key={ticket.id}
        >
          <legend
            className={`${bebasNeue.className} text-2xl md:text-4xl text-fooYellow-200`}
          >
            {ticket.ticketName}
          </legend>
          <p className="font-medium  text-lg mb-8 text-fooGrey-200 ">
            Deltager nr. {ticket.id + 1}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
            <div>
              <label htmlFor={`fornavn`}>Fornavn</label>
              <Controller
                name={`firstName`}
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  maxLength: 20,
                }}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="Fornavn"
                    className="border p-2 rounded-lg w-full text-black"
                    id={`fornavn`}
                    {...field}
                  />
                )}
              />
            </div>
            <div>
              <label htmlFor={`efternavn`}>Efternavn</label>
              <Controller
                name={`lastName`}
                control={control}
                defaultValue=""
                rules={{
                  pattern: /^[A-Za-z]+$/i,
                }}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="Efternavn"
                    className="border p-2 rounded-lg w-full text-black"
                    id={`efternavn`}
                    {...field}
                  />
                )}
              />
            </div>
            <div>
              <label htmlFor={`email`}>Email</label>
              <Controller
                name={`email`}
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  pattern: /^\S+@\S+$/i,
                }}
                render={({ field }) => (
                  <input
                    type="email"
                    placeholder="eksempel@mail.com"
                    id={`mail`}
                    {...field}
                    className="border p-2 rounded-lg w-full text-black"
                  />
                )}
              />
            </div>
            <div>
              <label htmlFor={`telefon`}> Telefon </label>
              <Controller
                name={`phone`}
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  pattern: /^\d+$/,
                }}
                render={({ field }) => (
                  <input
                    type="tel"
                    placeholder="12 34 56 78"
                    id={`telefon`}
                    {...field}
                    className="border p-2 rounded-lg w-full text-black"
                  />
                )}
              />
            </div>
          </div>
        </div>
      ))}
    </fieldset>
  );
}

export default Info;
