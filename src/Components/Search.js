import React, { useState } from "react";

function Search({ trips, setFilterTrips }) {
  const [userInput, setUserInput] = useState("");
  console.log("userInput: ", userInput);

  function handleChange(e) {
    setUserInput(e.target.value);
    const filterTripsByTitle = trips.filter((trip) => {
      const titleWords = trip.title.toLowerCase();
      const caseSearchTerm = userInput.toLowerCase();

      return titleWords.includes(caseSearchTerm);
    });
    setFilterTrips(filterTripsByTitle);
  }

  function clearInput(e) {
    e.preventDefault();
    setUserInput("");
  }

  function handleReset() {
    setFilterTrips(trips);
    setUserInput("");
  }

  return (
    <div className="search">
      <form onSubmit={clearInput} className="search-form">
        <input
          type="text"
          name="searchtrips"
          value={userInput}
          placeholder="Search Trips by Name"
          className="search-input"
          onChange={handleChange}
        />
      </form>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Search;
