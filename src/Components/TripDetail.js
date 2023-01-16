import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Modal.module.css";
import Modal from "./Modal";

function TripDetail({ url, onAddUser, users }) {
  const { tripId } = useParams();
  const [tripDetails, setTripDetails] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch(`${url}/${tripId}`)
      .then((resp) => resp.json())
      .then((data) => {
        setTripDetails(data);
        console.log("data: ", data);
      });
  }, [tripId]);

  const { budget, start_date, end_date, users_trips } = tripDetails;

  const startDate = new Date(start_date).toLocaleDateString();
  const endDate = new Date(end_date).toLocaleDateString();

  function handleSignUpClick() {
    setIsOpen(true);
  }

  return (
    <div className="details">
      <h2>Trip Details:</h2>
      <p>
        {" "}
        Date: {startDate} - {endDate}
      </p>
      <p>Cost: ${budget}</p>
      {users_trips && (
        <div className="sign-up-details">
          <h2>Registration Log:</h2>
          <ul>
            {users_trips
              .sort((a, b) => b.id - a.id)
              .map((userTrip) => {
                const timeStamp = userTrip.created_at;
                const registrationDate = new Date(
                  timeStamp
                ).toLocaleDateString();
                const registrationTime = new Date(
                  timeStamp
                ).toLocaleTimeString();

                const traveler = userTrip.user;

                const { id, name } = traveler;
                return (
                  <li key={id}>
                    {registrationTime} : {name} registered on {registrationDate}
                  </li>
                );
              })}
          </ul>
          <button
            className={styles.primaryBtn}
            onClick={() => handleSignUpClick()}
          >
            Sign up!
          </button>
          {isOpen && (
            <Modal
              setIsOpen={setIsOpen}
              onAddUser={onAddUser}
              tripId={tripId}
              users={users}
              usersTrips={users_trips}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default TripDetail;
