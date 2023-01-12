import React from "react";

function Trip({ trip, handleTripClick, selected }) {
  const { title, id, img } = trip;

  return (
    <div className={`trip-card ${selected ? "selected" : ""}`}>
      <h2>{title}</h2>
      <img src={img} alt="trip" />
      <button onClick={() => handleTripClick(id)}>Show details</button>
    </div>
  );
}

export default Trip;
