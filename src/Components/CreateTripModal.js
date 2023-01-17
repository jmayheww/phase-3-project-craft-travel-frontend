import React, { useState, useEffect } from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

function CreateTripModal({ setIsOpen, onAddTrip, url }) {
  const [newTrip, setNewTrip] = useState({
    title: "",
    budget: "",
    start_date: "",
    end_date: "",
    img: "",
  });

  function handleChange(e) {
    setNewTrip({ ...newTrip, [e.target.name]: e.target.value });
  }
  console.log(newTrip);

  function handleTripCreation(e) {
    e.preventDefault();

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTrip),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        onAddTrip(data);
      });

    setIsOpen(false);
  }

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.tripModal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Add Trip</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            Please provide the following details:
          </div>
          <div className={styles.formContent}>
            <form onSubmit={handleTripCreation}>
              <input
                type="text"
                name="title"
                value={newTrip.title}
                onChange={handleChange}
                placeholder="Title"
              ></input>
              <input
                type="number"
                name="budget"
                value={newTrip.budget}
                onChange={handleChange}
                placeholder="Cost"
              ></input>
              <input
                type="datetime-local"
                name="start_date"
                value={newTrip.start_date}
                onChange={handleChange}
                placeholder="Start Date"
              ></input>
              <input
                type="datetime-local"
                name="end_date"
                value={newTrip.end_date}
                onChange={handleChange}
                placeholder="End Date"
              ></input>
              <input
                type="text"
                name="img"
                value={newTrip.img}
                onChange={handleChange}
                placeholder="Image Source"
              ></input>
              <div className={styles.modalActions}>
                <div className={styles.actionsContainer}>
                  <button className={styles.deleteBtn_trip} type="submit">
                    Create Trip
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

export default CreateTripModal;