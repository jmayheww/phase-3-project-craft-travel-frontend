import React from "react";
import Trip from "./Trip";

function TripList({ allTrips }) {
  const renderTrips = allTrips.map((trip) => {
    console.log("trip: ", trip);

    const { id, title, budget, start_date, end_date } = trip;

    return (
      <div key={id}>
        <Trip
          title={title}
          budget={budget}
          startDate={start_date}
          endDate={end_date}
        />
      </div>
    );
  });
  return (
    <>
      <div className="trip-container">{renderTrips}</div>
      <div className="detail-container"></div>
    </>
  );
}

export default TripList;
