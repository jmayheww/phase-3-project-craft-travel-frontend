import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Modal.module.css";
import SignupModal from "./SignupModal";

function TripDetail({ url, onAddUser, users }) {
  const { tripId } = useParams();
  const [tripDetails, setTripDetails] = useState([]);
  const [updateUsersTrips, setUpdateUsersTrips] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch(`${url}/${tripId}`)
      .then((resp) => resp.json())
      .then((data) => {
        setTripDetails(data);
      });
  }, [tripId]);

  useEffect(() => {
    setUpdateUsersTrips(users_trips);
  }, [tripDetails]);

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
      {updateUsersTrips && (
        <div className="sign-up-details">
          <h2>Registration Log:</h2>
          <ul>
            {updateUsersTrips
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
            <SignupModal
              setIsOpen={setIsOpen}
              onAddUser={onAddUser}
              tripId={tripId}
              users={users}
              updateUsersTrips={updateUsersTrips}
              setUpdateUsersTrips={setUpdateUsersTrips}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default TripDetail;
