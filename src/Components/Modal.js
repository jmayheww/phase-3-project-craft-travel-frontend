import React, { useState } from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

function Modal({ setIsOpen }) {
  const [userInput, setUserInput] = useState("");

  function handleUserInput(e) {
    setUserInput(e.target.value);
  }

  function handleAddUser(e) {
    e.preventDefault();
    console.log(userInput);
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
          <form className="add-traveler-form" onSubmit={handleAddUser}>
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
