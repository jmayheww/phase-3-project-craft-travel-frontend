import React from "react";

function Header({ toggleDarkMode }) {
  return (
    <header>
      <h1 id="app-title">Craft Travels</h1>
      <div className="toggle-switch">
        <input
          type="checkbox"
          id="toggle-dark-mode"
          onChange={toggleDarkMode}
        />
        <label htmlFor="toggle-dark-mode"></label>
      </div>
    </header>
  );
}

export default Header;
