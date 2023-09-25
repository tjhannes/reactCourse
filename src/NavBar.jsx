import React from "react";
import { useState } from "react";

function NavBar({ animals }) {
  return (
    <nav>
      <h1 className="title-hidden">Animals</h1>
      <button>All cute animals</button>
      <button onClick={() => {}}>Selectors Choice</button>
    </nav>
  );
}

export default NavBar;
