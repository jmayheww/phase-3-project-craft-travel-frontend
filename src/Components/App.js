import React, { useEffect, useState } from "react";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <main className={isDarkMode ? "dark-mode" : ""}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={setIsDarkMode} />
    </main>
  );
}

export default App;
