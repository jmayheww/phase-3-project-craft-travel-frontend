import React, { useState } from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

function Modal({ setIsOpen, users }) {
  const [userInput, setUserInput] = useState("");
  console.log("userInput: ", userInput);

  function handleUserInput(e) {
    setUserInput(e.target.value);
  }

  function handleUserSignup(e) {
    e.preventDefault();

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
        console.log(newUser)

      });

    // fetch("http://localhost:9292/userstrips", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     trip_id: tripId,
    //     user_id: userNumber + 1,
    //   }),
    // })
    //   .then((data) => console.log(data))
    //   .catch((error) => console.log("error:", error));
    // .then((data) => {
    //   if (data.status === 500) {
    //     alert(
    //       "This user has already signed up for the trip! Please sign up with a new user name."
    //     );
    //   }
    // });

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
