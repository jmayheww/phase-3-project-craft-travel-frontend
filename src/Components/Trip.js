import React from "react";

function Trip({ tripTitle, totalCost, startDate, endDate, users, img }) {
  return (
    <>
      <h2>{tripTitle}</h2>
      <img src={img} alt="trip" />
    </>
  );
}

export default Trip;
