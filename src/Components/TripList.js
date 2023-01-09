import React from "react";
import Trip from "./Trip";

function TripList({ allTrips }) {
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

    return (
      <div className="trip-card" key={id}>
        <Trip
          tripTitle={title}
          totalCost={budget}
          startDate={start_date}
          endDate={end_date}
          users={participating_users}
          img={img}
        />
      </div>
    );
  });
  return (
    <>
      <div className="trips-container">
        {allTrips ? renderTrips : "Loading...please wait"}
      </div>
      <div className="detail-container"></div>
    </>
  );
}

export default TripList;
