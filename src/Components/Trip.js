import React from "react";

function Trip({ trip, handleTripClick }) {
  const { selected, tripTitle, id, img } = trip;
  return (
    <div className={`trip-card ${selected ? "selected" : ""}`}>
      <h2>{tripTitle}</h2>
      <img src={img} alt="trip" />
      <button onClick={() => handleTripClick(id)}>Show details</button>
    </div>
  );
}

export default Trip;
