import React from "react";

function AnimalBox({ name, description, latinName, region, img, i }) {
  return (
    <div className="animal-info" key={i}>
      <figure className="figure">
        <img className="img" src={img} alt={name} />
      </figure>

      <div className="">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="animal-info__location">
          <p>{latinName}</p>
          <p> {region}</p>
        </div>
      </div>
    </div>
  );
}

export default AnimalBox;
