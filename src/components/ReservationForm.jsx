"use client";
// Import necessary dependencies
import { useState, useEffect } from "react";

// Define the Form component
const ReservationForm = () => {
  // State to store available spots
  const [availableSpots, setAvailableSpots] = useState([]);

  // State to store form data
  const [formData, setFormData] = useState({
    area: "",
    amount: 0,
  });

  // Fetch available spots when the component mounts
  useEffect(() => {
    const fetchAvailableSpots = async () => {
      try {
        const response = await fetch(
          "https://robust-ionized-tartan.glitch.me/available-spots"
        );
        const data = await response.json();
        setAvailableSpots(data);
      } catch (error) {
        console.error("Error fetching available spots:", error);
      }
    };

    fetchAvailableSpots();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

      console.log("Form Data:", formData);

    try {
      // Send PUT request
      const response = await fetch(
        "https://robust-ionized-tartan.glitch.me/reserve-spots",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Reservation successful!");
        // You can perform any additional actions after successful reservation
      } else {
        console.error("Reservation failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting reservation:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Choose an area:
          <div>
            {availableSpots.map((spot, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="area"
                  value={spot.area}
                  checked={formData.area === spot.area}
                  onChange={handleInputChange}
                />
                {spot.area}
              </label>
            ))}
          </div>
        </label>
      </div>
      <div>
        <label>
          Number of tickets:
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <button type="submit">Reserve Spots</button>
      </div>
    </form>
  );
};

export default ReservationForm;
