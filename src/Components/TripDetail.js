import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ModalButton } from "./ModalButton";
import styles from "./Modal.module.css";
import SignupModal from "./SignupModal";

function TripDetail({ url, onAddUser, users, handleHideDetails, trips }) {
  const { tripId } = useParams();
  const [tripDetails, setTripDetails] = useState([]);
  const [userTripBookings, setUserTripBookings] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch(`${url}/${tripId}`)
      .then((resp) => resp.json())
      .then((usersTrips) => {
        const selectedTripDetails = trips[0];

        setTripDetails(selectedTripDetails);
        setUserTripBookings(usersTrips);
      });
  }, [tripId]);

  const tD = tripDetails;

  const startDate = new Date(tD.start_date).toLocaleDateString();
  const endDate = new Date(tD.end_date).toLocaleDateString();

  function handleSignUpClick() {
    setIsOpen(true);
  }

  function handleBookingDelete(id) {
    const updatedBookings = userTripBookings.filter(
      (userTrip) => userTrip.id !== id
    );
    console.log("updatedBookings: ", updatedBookings);
    return setUserTripBookings(updatedBookings);
  }

  function handleCancelBooking(id) {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then((data) => {
        if (data.status === 200) {
          return handleBookingDelete(id);
        }
      })
      .catch((error) => alert("Operation failed, could not delete"));
  }

  return (
    <div className="details">
      <h2>Trip Details:</h2>
      <p>
        {" "}
        Date: {startDate} - {endDate}{" "}
      </p>
      <p>Cost: ${tD.budget}</p>
      {userTripBookings && (
        <div className="sign-up-details">
          <h2>Registration Log:</h2>
          <ul>
            {userTripBookings
              .sort((a, b) => b.id - a.id)
              .map((userTrip) => {
                const timeStamp = userTrip.created_at;
                const registrationDate = new Date(
                  timeStamp
                ).toLocaleDateString();
                const registrationTime = new Date(
                  timeStamp
                ).toLocaleTimeString();

                const userId = userTrip.user.id;
                const userName = userTrip.user.name;
                const userTripId = userTrip.id;

                return (
                  <li key={userId}>
                    {registrationTime} : {userName} registered on{" "}
                    {registrationDate}
                    <button onClick={() => handleCancelBooking(userTripId)}>
                      Cancel Booking
                    </button>
                  </li>
                );
              })}
          </ul>
          <ModalButton
            handleClick={handleSignUpClick}
            className={styles.primaryBtn}
            text="Sign up!"
          />
          <button type="button" onClick={handleHideDetails}>
            Hide Details
          </button>
          {isOpen && (
            <SignupModal
              setIsOpen={setIsOpen}
              onAddUser={onAddUser}
              tripId={tripId}
              users={users}
              userTripBookings={userTripBookings}
              setUserTripBookings={setUserTripBookings}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default TripDetail;
