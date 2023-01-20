import React, { useState } from "react";
import styles from "./Modal.module.css";
import { ModalButton } from "./ModalButton";
import EditTripModal from "./EditTripModal";

function Trip({ trip, selected, url, onTripDelete, onUpdateTrip, nav }) {
  const { title, id, img } = trip;
  const [isEditOpen, setIsEditOpen] = useState(false);

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
    nav(`/trips/${id}`);
  }

  function handleEditClick() {
    setIsEditOpen(true);
  }

  return (
    <div className={`trip-card ${selected ? "selected" : ""}`}>
      <div
        className={styles.deleteTripBtn}
        onClick={() => handleDeleteClick(id)}
      >
        <span>remove</span>
        <span>&times;</span>
      </div>
      <h2>{title}</h2>

      <img src={img} alt="picture of trip" width="300" height="200" />
      <div className={styles.tripButtons}>
        <button
          onClick={() => handleTripClick(id)}
          className={styles.primaryBtn}
        >
          Show Details
        </button>
        <button className={styles.primaryBtnEdit}>Edit Trip</button>
        {/* <button className={styles.primaryBtn}>Edit Trip</button> */}
        {/* <ModalButton
          handleClick={handleEditClick}
          className={styles.primaryBtnEdit}
          text="Edit Trip"
        /> */}
      </div>
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
