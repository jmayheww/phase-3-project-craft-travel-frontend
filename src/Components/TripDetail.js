import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function TripDetail({ url }) {
  const { tripId } = useParams();

  useEffect(() => {
    fetch(`${url}/${tripId}`)
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  });

  return (
    <>
      <h2>{tripId}</h2>
    </>
  );
}

export default TripDetail;
