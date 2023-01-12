import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import Trip from "./Trip";

function TripList({ allTrips, showDetail, handleTripClick }) {
  const { pathname } = useLocation();
  const curTrip = Number(pathname.replace("/trips/", ""));

  const renderTrips = allTrips.map((trip) => {
    const {
      id,
      title,
      budget,
      start_date,
      end_date,
      participating_users,
      img,
    } = trip;

    const selected = id === curTrip;

    return (
      <div key={id} className={`trip-card ${selected ? "selected" : ""}`}>
        <Trip
          tripTitle={title}
          totalCost={budget}
          startDate={start_date}
          endDate={end_date}
          users={participating_users}
          id={id}
          img={img}
          handleTripClick={handleTripClick}
        />
      </div>
    );
  });
  return (
    <>
      <div className="trips-container">
        {allTrips ? renderTrips : "Loading...please wait"}
      </div>
      <div className="detail-container">{showDetail ? <Outlet /> : ""}</div>
    </>
  );
}

export default TripList;
