import React from 'react';
import Tile from './Tile';

function TileList({ piggies }) {
  console.log(piggies);
  const pigsList = piggies.map(pig => <Tile name={pig.name} image={pig.image} />)
  return (
    <ul className="ui grid container">{pigsList}</ul>
  )
}

export default TileList;