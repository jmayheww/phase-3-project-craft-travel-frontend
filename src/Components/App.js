import React, { useEffect, useState, useRef } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Header from "./Header";
import TripList from "./TripList";
import TripDetail from "./TripDetail";

const tripsUrl = "http://localhost:9292/trips";

function App() {
  const [trips, setTrips] = useState([]);
  const mainRef = useRef(null);
  let nav = useNavigate();

  useEffect(() => {
    fetch(tripsUrl)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setTrips(data);
      });
  }, []);

  function handleDarkModeToggle() {
    mainRef?.current?.classList?.toggle("dark-mode");
  }

  function handleTripClick(id) {
    nav(`/trips/${id}`);
  }

  return (
    <main ref={mainRef}>
      <Header toggleDarkMode={handleDarkModeToggle} />
      <Search trips={trips} />
      <Routes>
        <Route
          path="/trips"
          element={
            <TripList allTrips={trips} handleTripClick={handleTripClick} />
          }
        >
          <Route path=":tripId" element={<TripDetail url={tripsUrl} />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
