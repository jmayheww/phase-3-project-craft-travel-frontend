import React from "react";
import { useParams } from "react-router-dom";

function TripDetail() {
  const { tripId } = useParams();
  return <h2>{tripId}</h2>;
}

export default TripDetail;
