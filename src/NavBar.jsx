import React from "react";
import { useState } from "react";

function NavBar({ animals, setDisplayAllAnimals }) {
  const [showAllAnimals, setShowAllAnimals] = useState(true);

  const handleShowAllClick = () => {
    setShowAllAnimals(true);
    setDisplayAllAnimals(true);
  };

  const handleShowSelectorsChoiceClick = () => {
    setShowAllAnimals(false);
    setDisplayAllAnimals(false);
  };

  return (
    <nav>
      <h1 className="title-hidden">Animals</h1>
      <button onClick={handleShowAllClick}>All cute animals</button>
      <button onClick={handleShowSelectorsChoiceClick}>Selectors Choice</button>
    </nav>
  );
}

export default NavBar;
