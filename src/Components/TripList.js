import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Trip from "./Trip";

function TripList({ trips, url, setTrips, onUpdateTrip, nav }) {
  const { tripId } = useParams();

  function handleTripDelete(id) {
    const updatedTrips = trips.filter((trip) => trip.id !== id);
    setTrips(updatedTrips);

    if (id === Number(tripId)) {
      nav("/trips");
    }
  }

  const renderTrips = trips.map((trip) => {
    return (
      <Trip
        key={trip.id}
        trip={trip}
        selected={trip.id === Number(tripId)}
        url={url}
        onTripDelete={handleTripDelete}
        onUpdateTrip={onUpdateTrip}
        nav={nav}
      />
    );
  });

  return (
    <div>
      <div className="trips-container">
        <div className="trips-list">
          {trips ? renderTrips : "Loading...please wait"}
        </div>
        <div className="trips-view">
          {tripId ? <Outlet /> : <div>Please select a trip</div>}
        </div>
      </div>
    </div>
  );
}

export default TripList;
