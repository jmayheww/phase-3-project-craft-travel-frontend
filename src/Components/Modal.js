import React, { useState } from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { createUserTrip } from "../Utilities/api-helpers";

function Modal({ setIsOpen, onAddUser, tripId, users, usersTrips }) {
  const [userInput, setUserInput] = useState("");

  function handleUserInput(e) {
    setUserInput(e.target.value);
  }

  function handleUserSignup(e) {
    e.preventDefault();
    const existingUser = users.find((user) => user.name === userInput);
    console.log("existingUser: ", existingUser);

    if (!existingUser) {
      fetch("http://localhost:9292/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userInput,
        }),
      })
        .then((resp) => resp.json())
        .then((newUser) => {
          console.log("newUser: ", newUser);
          onAddUser(newUser);

          createUserTrip(newUser.id);
        });
    } else {
    }

    if (existingUser) {
      const alreadySignedup = usersTrips
        .map((userTrip) => {
          console.log(userTrip.user_id);
          return userTrip.user_id;
        })
        .includes(existingUser.id);
    }

    setIsOpen(false);
  }
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Dialog</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            Please submit name of traveler:
          </div>
          <form className="add-traveler-form" onSubmit={handleUserSignup}>
            <input
              type="text"
              value={userInput}
              onChange={handleUserInput}
            ></input>
            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
                <button className={styles.deleteBtn}>Add Traveler</button>
                <button
                  type="button"
                  className={styles.cancelBtn}
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Modal;
