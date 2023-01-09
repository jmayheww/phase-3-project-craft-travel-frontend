import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Trip from "./Trip";
import TripDetail from "./TripDetail";

function TripList({ allTrips }) {
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
        <Link to={`/trips/${id}`}>
          <Trip
            tripTitle={title}
            totalCost={budget}
            startDate={start_date}
            endDate={end_date}
            users={participating_users}
            img={img}
          />
        </Link>
      </div>
    );
  });
  return (
    <>
      <div className="trips-container">
        {allTrips ? renderTrips : "Loading...please wait"}
      </div>
      <div className="detail-container">
        <Routes>
          <Route path={`trips/:tripId`} element={<TripDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default TripList;
