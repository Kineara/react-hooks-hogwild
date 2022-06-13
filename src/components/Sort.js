import React from 'react';

function Sort({ sortState, sortHandler}) {
  return (
    <select className="ui dropdown" value={sortState} onChange={sortHandler}>
      <option value="0">Sort By</option>
      <option value="1">Name</option>
      <option value="2">Weight</option>
    </select>
  )
}

export default Sort;