import React from "react";
import { BiWorld } from "react-icons/bi";
import { GiMaterialsScience } from "react-icons/gi";

function Animals({ animals }) {
  return (
    <div>
      {animals.map((animal) => (
        <div
          style={{
            display: "flex",
            backgroundColor: "#ffffff",
            margin: "20px",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "left",
          }}
        >
          <div>
            <img
              src={animal.img}
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
              alt=""
            />
          </div>
          <div style={{ margin: "10px 10px 10px 30px" }}>
            <h2 style={{}}>{animal.name}</h2>
            <p style={{}}>{animal.description}</p>
            <div
              style={{
                display: "flex",
              }}
            >
              <h3
                style={{
                  color: "#87888a",
                  fontSize: "16px",
                  marginRight: "30px",
                }}
              >
                <GiMaterialsScience />
                {animal.latinName}
              </h3>
              <h3
                style={{
                  color: "#87888a",
                  fontSize: "16px",
                  marginRight: "30px",
                }}
              >
                <BiWorld />
                {animal.region}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Animals;
