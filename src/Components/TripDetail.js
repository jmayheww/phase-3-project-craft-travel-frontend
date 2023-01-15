import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function TripDetail({ url }) {
  const { tripId } = useParams();
  const [tripDetails, setTripDetails] = useState([]);

  useEffect(() => {
    fetch(`${url}/${tripId}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log("data: ", data);
        setTripDetails(data);
      });
  }, [tripId]);

  const { budget, start_date, end_date, users_trips } = tripDetails;

  const startDate = new Date(start_date).toLocaleDateString();
  const endDate = new Date(end_date).toLocaleDateString();

  return (
    <div className="details">
      <h2>Trip Details:</h2>
      <p>
        {" "}
        Date: {startDate} - {endDate}
      </p>
      <p>Cost: ${budget}</p>
      {users_trips && (
        <div className="sign-up-details">
          <h2>Registration Log:</h2>
          <ul>
            {users_trips
              .sort((a, b) => a.created_at - b.created_at)
              .map((userTrip) => {
                const timeStamp = userTrip.created_at;
                const registrationDate = new Date(
                  timeStamp
                ).toLocaleDateString();
                const registrationTime = new Date(
                  timeStamp
                ).toLocaleTimeString();

                const traveler = userTrip.user;

                const { id, name } = traveler;
                return (
                  <li key={id}>
                    {name} registered at {registrationTime} on{" "}
                    {registrationDate}
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TripDetail;
