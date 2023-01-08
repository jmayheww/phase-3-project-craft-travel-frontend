import React from "react";

function TripCard({ title, budget, startDate, endDate }) {
  return (
    <div className="trip">
      <h2>{title}</h2>
      <p>{budget}</p>
      <p>{startDate}</p>
      <p>{endDate}</p>
    </div>
  );
}

export default TripCard;
