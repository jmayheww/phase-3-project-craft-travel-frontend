import React, { useEffect, useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./Modal.module.css";

import Header from "./Header";
import TripList from "./TripList";
import TripDetail from "./TripDetail";
import Search from "./Search";
import { ModalButton } from "./ModalButton";
import CreateTripModal from "./CreateTripModal";

const tripsUrl = "http://localhost:9292/trips";
const usersUrl = "http://localhost:9292/users";

function App() {
  const [trips, setTrips] = useState([]);
  const [users, setUsers] = useState([]);
  const [filterTrips, setFilterTrips] = useState([]);
  const [isOpenTripModal, setIsOpenTripModal] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    fetch(tripsUrl)
      .then((resp) => resp.json())
      .then((data) => {
        setTrips(data);
      });
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

  function handleNewTripClick() {
    setIsOpenTripModal(true);
  }

  function handleAddNewUser(newUser) {
    setUsers((users) => [...users, newUser]);
  }

  function handleAddNewTrip(newTrip) {
    setTrips((trips) => [...trips, newTrip]);
  }

  return (
    <main ref={mainRef}>
      <Header toggleDarkMode={handleDarkModeToggle} />
      <div>
        <ModalButton
          handleClick={handleNewTripClick}
          className={styles.primaryBtn}
          text="Add new trip!"
        />
        <Search trips={trips} setFilterTrips={setFilterTrips} />
      </div>
      <Routes>
        <Route
          path="/trips"
          element={
            <TripList trips={filterTrips} setTrips={setTrips} url={tripsUrl} />
          }
        >
          <Route
            path=":tripId"
            element={
              <TripDetail
                url={tripsUrl}
                onAddUser={handleAddNewUser}
                users={users}
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
        />
      )}
    </main>
  );
}

export default App;
