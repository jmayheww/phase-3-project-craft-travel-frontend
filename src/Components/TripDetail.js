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
      <p>Estimated Cost: ${budget}</p>
      <p>
        Dates: {startDate} - {endDate}
      </p>
      {users_trips && (
        <div className="sign-up-details">
          <h2>Registration Log:</h2>
          <ul>
            {users_trips.map((userTrip) => {
              const timeStamp = userTrip.created_at;
              const traveler = userTrip.user;

              const { id, name } = traveler;
              return (
                <li key={id}>
                  {name} : {timeStamp}
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
