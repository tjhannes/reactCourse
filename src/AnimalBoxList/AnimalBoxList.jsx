import AnimalBox from "./AnimalBox";

export function AnimalBoxList({ animals }) {
  return (
    <div className="animal-list">
      {animals.map((animal, i) => (
        <AnimalBox
          key={i}
          name={animal.name}
          description={animal.description}
          latinName={animal.latinName}
          region={animal.region}
          img={animal.img}
        />
      ))}
    </div>
  );
}
