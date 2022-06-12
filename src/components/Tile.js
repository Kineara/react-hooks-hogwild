import React from "react";

function Tile({ name, image }) {
  return (
    <li className="ui eight wide column pigTile">
      <h3>{name}</h3>
      <img src={image} width="100%"/>
    </li>
  );
}

export default Tile;
