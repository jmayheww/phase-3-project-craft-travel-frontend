import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Modal.module.css";
import { ModalButton } from "./ModalButton";
import EditTripModal from "./EditTripModal";

function Trip({ trip, selected, url, onTripDelete, onUpdateTrip }) {
  const { title, id, img } = trip;
  const [showDetails, setShowDetails] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

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

  function handleTripClick(id) {
    setShowDetails((current) => !current);

    return showDetails ? nav("/trips") : nav(`/trips/${id}`);
  }

  function handleEditClick() {
    setIsEditOpen(true);
  }

  return (
    <div className={`trip-card ${selected ? "selected" : ""}`}>
      <div className="remove" onClick={() => handleDeleteClick(id)}>
        <span>remove</span>
        <span>&times;</span>
      </div>
      <h2>{title}</h2>
      <img src={img} alt="picture of trip" width="300" height="200" />
      <button onClick={() => handleTripClick(id)}>
        {selected ? "Hide Details" : "Show details"}
      </button>
      <ModalButton
        handleClick={handleEditClick}
        className={styles.primaryBtn}
        text="Edit Trip"
      />
      {isEditOpen && (
        <EditTripModal
          isOpen={isEditOpen}
          setIsOpen={setIsEditOpen}
          tripId={id}
          onUpdateTrip={onUpdateTrip}
        />
      )}
    </div>
  );
}

export default Trip;
