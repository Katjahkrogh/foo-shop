"use client";
import React from 'react'
import { useEffect, useState } from 'react';

function Fetchtest() {
  const [camping, setCamping] = useState([]);
  useEffect(() => {
    fetch("https://localhost:8080/available-spots")
      .then((res) => res.json())
      .then((data) => {
        setCamping(data);
      });
  }, []);

  return (
    <div>
      {camping.map((spots) => (
        <li>{spots.available}</li>
      ))}
    </div>
  );
    }


export default Fetchtest