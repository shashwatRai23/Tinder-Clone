import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.css";
import axios from "../../axios.js";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");
      setPeople(req.data);
    }

    fetchData();
  }, [people]);
  const swiped = (direction, nameToDelete) => {
    console.log("removing : " + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards_container">
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{ backgroundImage: `url(${person.imgUrl})` }}
                className="card"
              >
                <h2>{person.name}</h2>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
};

export default TinderCards;
