import React, { useEffect, useState, useRef } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";

import Header from "./Header";
import TripList from "./TripList";
import TripDetail from "./TripDetail";
import Search from "./Search";

const tripsUrl = "http://localhost:9292/trips";

function App() {
  const [trips, setTrips] = useState([]);
  const [filterTrips, setFilterTrips] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  const mainRef = useRef(null);
  let nav = useNavigate();

  useEffect(() => {
    fetch(tripsUrl)
      .then((resp) => resp.json())
      .then((data) => {
        setTrips(data);
      });
  }, []);

  useEffect(() => {
    setFilterTrips(trips);
  }, [trips]);

  function handleDarkModeToggle() {
    mainRef?.current?.classList?.toggle("dark-mode");
  }

  function handleTripClick(id) {
    setShowDetails((current) => !current);
    return showDetails ? nav(`/trips/${id}`) : nav("/trips");
  }

  return (
    <main ref={mainRef}>
      <Header toggleDarkMode={handleDarkModeToggle} />
      <Search trips={trips} setFilterTrips={setFilterTrips} />
      <Routes>
        <Route
          path="/trips"
          element={
            <TripList
              trips={filterTrips}
              setTrips={setTrips}
              handleTripClick={handleTripClick}
              url={tripsUrl}
              showDetails={showDetails}
            />
          }
        >
          <Route path=":tripId" element={<TripDetail url={tripsUrl} />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
