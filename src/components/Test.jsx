"use client";
import React from "react";
import { useForm } from "react-hook-form";


const MyForm = () => {
  const { register, handleSubmit, setValue } = useForm();
   
  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:8080/reserve-spot", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    

      if (response.ok) {
        console.log("PUT request successful");
        // Gør noget efter en succesfuld PUT-request
      } else {
        console.error("PUT request failed");
        // Håndter fejl, hvis nødvendigt
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Håndter fejl, hvis nødvendigt
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Area:
        <input
        type="text"
          className="text-black"
          {...register("area", { required: true })}
        />
      </label>
      <br />
      <label>
        Amount:
        <input
          type="number"
          className="text-black"
          {...register("amount", { required: true })}
        />
      </label>
      <br />
      <button type="submit">Send PUT request</button>
    </form>
  );
};

export default MyForm;
