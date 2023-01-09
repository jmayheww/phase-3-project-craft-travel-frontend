import React, { useEffect, useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Header";
import TripList from "./TripList";

const tripsUrl = "http://localhost:9292/trips";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [trips, setTrips] = useState([]);
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

  return (
    <main ref={mainRef}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={handleDarkModeToggle} />
      <Routes>
        <Route path="*" element={<TripList allTrips={trips} />} />
      </Routes>
    </main>
  );
}

export default App;
