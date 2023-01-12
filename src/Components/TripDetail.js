import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function TripDetail({ url }) {
  const { tripId } = useParams();
  const [tripDetails, setTripDetails] = useState([]);

  useEffect(() => {
    fetch(`${url}/${tripId}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setTripDetails(data);
      });
  }, [tripId]);

  const { budget, start_date, end_date, participating_users } = tripDetails;
  console.log("participating_users: ", participating_users);

  return (
    <>
      <h2>{tripId}</h2>
      <p>Total Estimated Cost: ${budget}</p>
      <p>Start Date: {start_date}</p>
      <p>End Date: {end_date}</p>

      {participating_users && (
        <div>
          Confirmed Travelers:{" "}
          <ul>
            {participating_users.map((user) => {
              return <li key={user}>{user}</li>;
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default TripDetail;
