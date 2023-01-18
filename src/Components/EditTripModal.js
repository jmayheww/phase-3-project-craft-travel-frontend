import React, { useState, useEffect } from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

function EditTripModal({ setIsOpen, tripId, onUpdateTrip }) {
  const [editTrip, setEditTrip] = useState({
    title: "",
    budget: "",
    start_date: "",
    end_date: "",
    img: "",
  });

  function handleChange(e) {
    setEditTrip({ ...editTrip, [e.target.name]: e.target.value });
  }

  function handleTripEdit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/trips/${tripId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editTrip),
    })
      .then((r) => r.json())
      .then((updatedTrip) => onUpdateTrip(updatedTrip));

    setIsOpen(false);
  }

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.tripModal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Edit Trip</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            Please change the following details:
          </div>
          <div className={styles.formContent}>
            <form onSubmit={handleTripEdit}>
              <input
                type="text"
                name="title"
                value={editTrip.title}
                onChange={handleChange}
                placeholder="Title"
                required
              ></input>
              <input
                type="number"
                name="budget"
                value={editTrip.budget}
                onChange={handleChange}
                placeholder="Cost"
                required
              ></input>
              <input
                type="datetime-local"
                name="start_date"
                value={editTrip.start_date}
                onChange={handleChange}
                placeholder="Start Date"
                required
              ></input>
              <input
                type="datetime-local"
                name="end_date"
                value={editTrip.end_date}
                onChange={handleChange}
                placeholder="End Date"
                required
              ></input>
              <input
                type="text"
                name="img"
                value={editTrip.img}
                onChange={handleChange}
                placeholder="Image Source"
                required
              ></input>
              <div className={styles.modalActions}>
                <div className={styles.actionsContainer}>
                  <button className={styles.deleteBtn_trip} type="submit">
                    Edit Trip
                  </button>
                  <button
                    type="button"
                    className={styles.cancelBtn_trip}
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditTripModal;
