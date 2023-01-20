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
      <h2>Details:</h2>
      <p>
        {" "}
        Dates: {startDate} - {endDate}{" "}
      </p>
      <p>Cost: ${tD.budget}</p>
      {userTripBookings && (
        <div className="sign-up-details">
          <h2> Recent bookings</h2>
          <ul>
            {userTripBookings.map((userTrip) => {
              const timeStamp = userTrip.created_at;
              const registrationDate = new Date(timeStamp).toLocaleDateString();
              const registrationTime = new Date(timeStamp).toLocaleTimeString();

              const userId = userTrip.user.id;
              const userName = userTrip.user.name;
              const userTripId = userTrip.id;

              return (
                <li key={userId} className={styles.registerItem}>
                  {registrationDate} : {userName} registered at{" "}
                  {registrationTime}
                  <button
                    onClick={() => handleCancelBooking(userTripId)}
                    className={styles.cancelReg}
                  >
                    Cancel Booking
                  </button>
                </li>
              );
            })}
          </ul>
          <div className={styles.detailButtons}>
            <ModalButton
              handleClick={handleSignUpClick}
              className={styles.primaryBtn}
              text="Sign up!"
            />
            <button
              type="button"
              onClick={handleHideDetails}
              className={styles.primaryBtn}
            >
              Hide Details
            </button>
          </div>
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
