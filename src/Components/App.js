import React, { useEffect, useState, useRef } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import styles from "./Modal.module.css";

import Header from "./Header";
import TripList from "./TripList";
import TripDetail from "./TripDetail";
import Search from "./Search";
import { ModalButton } from "./ModalButton";
import CreateTripModal from "./CreateTripModal";

const tripsUrl = "http://localhost:9292/trips";
const usersUrl = "http://localhost:9292/users";
const usersTripsUrl = "http://localhost:9292/users_trips";

function App() {
  const [trips, setTrips] = useState([]);
  const [users, setUsers] = useState([]);
  const [filterTrips, setFilterTrips] = useState([]);
  const [isOpenTripModal, setIsOpenTripModal] = useState(false);
  const mainRef = useRef(null);
  const nav = useNavigate();

  useEffect(() => {
    fetch(tripsUrl)
      .then((resp) => resp.json())
      .then((data) => {
        setTrips(data);
      });
    nav("/trips");
  }, []);

  useEffect(() => {
    fetch(usersUrl)
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  useEffect(() => {
    setFilterTrips(trips);
  }, [trips]);

  function handleDarkModeToggle() {
    mainRef?.current?.classList?.toggle("dark-mode");
  }

  function handleHideDetails() {
    nav("/trips");
  }

  function handleNewTripClick() {
    setIsOpenTripModal(true);
  }

  function handleAddNewUser(newUser) {
    setUsers((users) => [...users, newUser]);
  }

  function handleAddNewTrip(newTrip) {
    return setTrips((current) => [newTrip, ...current]);
  }

  function handleUpdateTrip(updatedTripObj) {
    const updatedTrips = trips.map((trip) => {
      if (trip.id === updatedTripObj.id) {
        return updatedTripObj;
      } else {
        return trip;
      }
    });
    setTrips(updatedTrips);
  }

  return (
    <main ref={mainRef}>
      <Header toggleDarkMode={handleDarkModeToggle} />
      <div>
        <Search trips={trips} setFilterTrips={setFilterTrips} />
        <ModalButton
          handleClick={handleNewTripClick}
          className={styles.primaryBtnAdd}
          text="Add new trip!"
        />
      </div>
      <Routes>
        <Route
          path="/trips"
          element={
            <TripList
              trips={filterTrips}
              setTrips={setTrips}
              url={tripsUrl}
              onUpdateTrip={handleUpdateTrip}
              nav={nav}
            />
          }
        >
          <Route
            path=":tripId"
            element={
              <TripDetail
                url={usersTripsUrl}
                onAddUser={handleAddNewUser}
                users={users}
                trips={trips}
                handleHideDetails={handleHideDetails}
                nav={nav}
              />
            }
          />
        </Route>
      </Routes>
      {isOpenTripModal && (
        <CreateTripModal
          setIsOpen={setIsOpenTripModal}
          onAddTrip={handleAddNewTrip}
          url={tripsUrl}
          trips={trips}
        />
      )}
    </main>
  );
}

export default App;
