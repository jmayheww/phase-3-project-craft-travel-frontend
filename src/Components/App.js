import React, { useEffect, useState, useRef } from "react";
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
        setTrips(data);
      });
  }, []);

  function handleDarkModeToggle() {
    mainRef?.current?.classList?.toggle("dark-mode");
  }

  return (
    <main ref={mainRef}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={handleDarkModeToggle} />
      <TripList allTrips={trips} />
    </main>
  );
}

export default App;
