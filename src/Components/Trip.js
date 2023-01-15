import React from "react";

function Trip({
  trip,
  handleTripClick,
  selected,
  url,
  onTripDelete,
  showDetails,
}) {
  const { title, id, img } = trip;

  function handleDeleteClick(id) {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then((data) => {
        if (data.status === 200) {
          onTripDelete(id);
        }
      })
      .catch((error) => alert("Operation failed, could not delete"));
  }

  function handleSignUpClick(id) {
    console.log(id);
  }

  return (
    <div className={`trip-card ${selected ? "selected" : ""}`}>
      <div className="remove" onClick={() => handleDeleteClick(id)}>
        <span>remove</span>
        <span>&times;</span>
      </div>
      <h2>{title}</h2>
      <img src={img} alt="trip" />
      <button onClick={() => handleTripClick(id)}>
        {showDetails ? "Show details" : "Hide Details"}
      </button>
      <button onClick={() => handleSignUpClick(id)}>Sign up!</button>
    </div>
  );
}

export default Trip;
