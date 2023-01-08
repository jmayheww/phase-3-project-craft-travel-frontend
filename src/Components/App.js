import React, { useEffect, useState } from "react";
import Header from "./Header";
import TripList from "./TripList";

const tripsUrl = "http://localhost:9292/trips";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch(tripsUrl)
      .then((resp) => resp.json())
      .then((data) => {
        setTrips(data);
      });
  }, []);

  return (
    <main className={isDarkMode ? "dark-mode" : ""}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={setIsDarkMode} />
      <TripList allTrips={trips} />
    </main>
  );
}

export default App;
