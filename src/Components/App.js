import React, { useEffect, useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Header";
import TripList from "./TripList";
import TripDetail from "./TripDetail";

const tripsUrl = "http://localhost:9292/trips";

function App() {
  const [trips, setTrips] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const mainRef = useRef(null);

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

  function handleTripClick() {
    setShowDetail((current) => !current);
  }

  return (
    <main ref={mainRef}>
      <Header toggleDarkMode={handleDarkModeToggle} />
      <Routes>
        <Route
          path="/trips"
          element={
            <TripList
              allTrips={trips}
              showDetail={showDetail}
              handleTripClick={handleTripClick}
            />
          }
        >
          <Route path=":tripId" element={<TripDetail />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
