import React, { useState } from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

function Modal({ setIsOpen, onAddUser, tripId, users, usersTrips }) {
  const [userInput, setUserInput] = useState("");
  const [newUser, setNewUser] = useState([]);

  function handleUserInput(e) {
    setUserInput(e.target.value);
  }

  function handleUserSignup(e) {
    e.preventDefault();
    const existingUser = users.find((user) => user.name === userInput);

    const alreadySignedUp = usersTrips
      .map((userTrip) => userTrip.user_id)
      .includes(existingUser.id);


    const newUserBody = {
      name: userInput,
    };

    const usersTripBody = {
      trip_id: tripId,
      user_id: existingUser ? existingUser.id : newUser.id,
    };

    if (!existingUser) {
      fetch("http://localhost:9292/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserBody),
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log("newUser: ", newUser);
          onAddUser(data);
          setNewUser(data);
        });
    }

    if (alreadySignedUp) {
      alert(
        `${userInput} has already signed up for this trip. Please sign up with a new user. `
      );
    } else {
      fetch("http://localhost:9292/userstrips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usersTripBody),
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
        });
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
