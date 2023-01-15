import React from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import Trip from "./Trip";

function TripList({ trips, setTrips, handleTripClick, url, showDetails }) {
  const { tripId } = useParams();
  const nav = useNavigate();

  function onTripDelete(id) {
    const updatedTrips = trips.filter((trip) => trip.id !== id);
    setTrips(updatedTrips);

    if (id === Number(tripId)) {
      nav("/trips");
    }
  }

  function handleAddUser() {}

  const renderTrips = trips.map((trip) => {
    return (
      <Trip
        key={trip.id}
        trip={trip}
        handleTripClick={handleTripClick}
        selected={trip.id === Number(tripId)}
        url={url}
        onTripDelete={onTripDelete}
        showDetails={showDetails}
      />
    );
  });
  return (
    <div className="trips-container">
      <div className="trips-list">
        {trips ? renderTrips : "Loading...please wait"}
      </div>
      <div className="trips-view">
        {tripId ? <Outlet /> : <div>Please select a trip</div>}
      </div>
    </div>
  );
}

export default TripList;
