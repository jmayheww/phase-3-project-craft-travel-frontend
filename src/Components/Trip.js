import React from "react";
import { Link } from "react-router-dom";

function Trip({
  tripTitle,
  totalCost,
  startDate,
  endDate,
  users,
  id,
  img,
  handleTripClick,
}) {
  return (
    <>
      <h2>{tripTitle}</h2>
      <Link to={`${id}`} onClick={handleTripClick}>
        <img src={img} alt="trip" />
      </Link>
    </>
  );
}

export default Trip;
