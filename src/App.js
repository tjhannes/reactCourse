import "./App.css";
import React from "react";

function App() {
  const animals = [
    {
      name: "Red Panda",
      latinName: "Ailurus fulgens",
      img: "./animals/Red-Panda.jpeg",
      description:
        "The red panda has thick red fur and a striped, bushy tail. It is about the size and weight of a domestic cat. Its mischievous face and playful behavior have made it a favorite among people visiting zoos and sanctuaries.",
      region: "China",
    },
    {
      name: "Meerkat",
      latinName: "Suricata suricatta",
      img: "./animals/Meerkat.jpeg",
      description:
        "The meerkat is not a cat. It’s actually a small mongoose. Native to southern Africa, the meerkat has enormous eyes and a long tail. Meerkats have incredibly cute behavior, including sitting up high on their hind legs and looking around.",
      region: "Africa",
      selectorsChoice: true,
    },
    {
      name: "hedgehog",
      latinName: "Erinaceusis",
      img: "./animals/Hedgehog.jpeg",
      description:
        "This tiny creature is known for its round, spiked body and intensely adorable facial expression. The hedgehog is a member of the Erinaceinae family. There are 15 species of hedgehog. This cute critter lives in Europe, Asia, and Africa. Hedgehogs were introduced to New Zealand. There are no hedgehogs in Australia or North America. Hedgehogs are tiny, but they are not defenseless. Their sharp teeth and spines make them difficult for predators to catch and eat.",
      region: "Europe",
    },
    {
      name: "Quokka",
      latinName: "Setonix brachyurus",
      img: "./animals/Quokka.jpeg",
      description:
        "The quokka is also known as the short-tailed scrub wallaby. It is a small, round creature about the size of a cat. Its face looks like a cross between a mouse and a rabbit. The quokka is a marsupial. It’s nocturnal and carries its young in a pouch.",
      region: "Australia",
    },
    {
      name: "Sea Otter",
      latinName: "Enhydra lutris",
      img: "./animals/Sea-Otter.jpeg",
      description:
        "Recently, a sea otter named Joey captured the hearts of YouTube viewers who watched as he was rescued from near death and raised at an otter sanctuary in Canada. Joey’s daily fight for survival and his love of toys drew millions of viewers. That’s not surprising, since a sea otter is one of the most adorable animals on land or sea. The smallest marine mammal, the sea otter is a marine mammal native to the coasts of the northern and eastern North Pacific Ocean. About 90% of the world’s sea otters live in Alaska.",
      region: "Alaska",
      selectorsChoice: true,
    },
  ];

  const animalsSelectorsChoice = animals.filter(
    (animal) => animal.selectorsChoice
  );

  // const navState = "selectorsChoice";
  return (
    <div className="App">
      <h1 className="title-hidden">Animals</h1>
      <div className="animal-list">
        {animalsSelectorsChoice.map((animal, i) => (
          <div key={i} className="animal-info">
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
        ))}
      </div>
    </div>
  );
}

export default App;
