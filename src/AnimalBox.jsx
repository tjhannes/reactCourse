import React from "react";

function AnimalBox({ animal }) {
  return (
    <div className="animal-info">
      <figure className="figure">
        <img className="img" src={animal.img} alt={animal.name} />
      </figure>

      <div className="">
        <h2>{animal.name}</h2>
        <p>{animal.description}</p>
        <div className="animal-info__location">
          <p>{animal.latinName}</p>
          <p> {animal.region}</p>
        </div>
      </div>
    </div>
  );
}

export default AnimalBox;
