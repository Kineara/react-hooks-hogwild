import React from "react";

function Filter({ filterState, filterHandler }) {
  return (
    <div className="ui toggle checkbox">
      <input type="checkbox" name="greasy" checked={filterState} onChange={filterHandler} />
      <label>Only show greasy bois?</label>
    </div>
  );
}

export default Filter;
