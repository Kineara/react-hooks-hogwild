import React from "react";
import Tile from "./Tile";
import { v4 as uuidv4 } from "uuid";

function TileList({ piggies }) {

  const pigsList = piggies.map((pig) => (
    <Tile
      name={pig.name}
      image={pig.image}
      specialty={pig.specialty}
      greased={pig.greased ? "Very" : "No"}
      weight={pig.weight}
      medal={pig["highest medal achieved"]}
      key={uuidv4()}
    />
  ));
  return <div className="ui two cards">{pigsList}</div>;
}

export default TileList;
