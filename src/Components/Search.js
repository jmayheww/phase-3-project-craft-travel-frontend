import React, { useState } from "react";

function Search({ trips, setFilterTrips }) {
  const [userSearchInput, setUserSearchInput] = useState("");

  function handleChange(e) {
    setUserSearchInput(e.target.value);
    const filterTripsByTitle = trips.filter((trip) => {
      const titleWords = trip.title.toLowerCase();
      const caseSearchTerm = userSearchInput.toLowerCase();

      return titleWords.includes(caseSearchTerm);
    });
    setFilterTrips(filterTripsByTitle);
  }

  function clearInput(e) {
    e.preventDefault();
    setUserSearchInput("");
  }

  function handleReset() {
    setFilterTrips(trips);
    setUserSearchInput("");
  }

  return (
    <div className="search">
      <form onSubmit={clearInput} className="search-form">
        <input
          type="text"
          name="searchtrips"
          value={userSearchInput}
          placeholder="Search Trips by Name"
          className="search-input"
          onChange={handleChange}
        />
        <button onClick={() => handleReset()}>Reset</button>
      </form>
    </div>
  );
}

export default Search;
