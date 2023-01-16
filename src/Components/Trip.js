import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Modal.module.css";
import Modal from "./Modal";

function Trip({ trip, selected, url, onTripDelete }) {
  const { title, id, img } = trip;
  const [isOpen, setIsOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  let nav = useNavigate();

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

  function handleSignUpClick() {
    setIsOpen(true);
  }

  function handleTripClick(id) {
    setShowDetails((current) => !current);

    return showDetails ? nav("/trips") : nav(`/trips/${id}`);
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
        {selected ? "Hide Details" : "Show details"}
      </button>
      <button
        className={styles.primaryBtn}
        onClick={() => handleSignUpClick(id)}
      >
        Sign up!
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
}

export default Trip;
