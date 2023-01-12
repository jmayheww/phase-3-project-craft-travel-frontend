import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Trip from "./Trip";

function TripList({ allTrips, handleTripClick }) {
  const { tripId: curTrip } = useParams();

  const renderTrips = allTrips.map((trip) => {
    return (
      <Trip
        key={trip.id}
        trip={trip}
        handleTripClick={handleTripClick}
        selected={trip.id === Number(curTrip)}
      />
    );
  });
  return (
    <div className="trips-container">
      <div className="trips-list">
        {allTrips ? renderTrips : "Loading...please wait"}
      </div>
      <div className="trips-view">
        {curTrip ? <Outlet /> : <div>Please select a trip</div>}
      </div>
    </div>
  );
}

export default TripList;
