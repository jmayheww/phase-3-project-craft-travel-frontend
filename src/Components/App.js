import React, { useEffect, useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Header";
import TripList from "./TripList";
import TripDetail from "./TripDetail";
import Search from "./Search";

const tripsUrl = "http://localhost:9292/trips";
const usersUrl = "http://localhost:9292/users";

function App() {
  const [trips, setTrips] = useState([]);
  const [users, setUsers] = useState([]);
  const [filterTrips, setFilterTrips] = useState([]);
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

  function handleAddNewUser(newUser) {
    setUsers((users) => [...users, newUser]);
  }

  return (
    <main ref={mainRef}>
      <Header toggleDarkMode={handleDarkModeToggle} />
      <Search trips={trips} setFilterTrips={setFilterTrips} />
      <Routes>
        <Route
          path="/trips"
          element={
            <TripList trips={filterTrips} setTrips={setTrips} url={tripsUrl} />
          }
        >
          <Route
            path=":tripId"
            element={<TripDetail url={tripsUrl} onAddUser={handleAddNewUser} />}
          />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
