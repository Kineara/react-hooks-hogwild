import React from "react";

function Tile({ name, image, specialty, weight, greased, medal }) {
  return (
    <div className="card">
      <div className="content">
        <h3 className="header">{name}</h3>
      </div>
      <div className="image">
        <img src={image} alt={`${name} the pig`} />
      </div>
      <div className="content">
        <div className="description">
          <p><b>Specialty:</b> {specialty}</p>
          <p><b>Weight:</b> {weight}</p>
          <p><b>Greased?:</b> {greased}</p>
          <p><b>Highest Medal Achieved:</b> {medal}</p>
        </div>
      </div>

    </div>
  );
}

export default Tile;
