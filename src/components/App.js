import React, { useState } from "react";
import Nav from "./Nav";
import TileList from "./TileList";
import Filter from "./Filter";
import Sort from "./Sort";

import hogs from "../porkers_data";

function App() {
  const [filterState, setFilterState] = useState(false);
  const [sortState, setSortState] = useState("0");

  function filterPigs() {
    // filter pigs based on greased checkbox setting
    if (filterState === true) {
      return hogs.filter((hog) => hog.greased === true);
    } else {
      return hogs;
    }
  }

  const filteredPigs = filterPigs();

  function sortPigs() {
    // sort pigs based on sort dropdown setting
    switch (sortState) {
      case "1":
        return filteredPigs.sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();

          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });

      case "2":
        return filteredPigs.sort((a, b) => a.weight - b.weight);

      default:
        return filteredPigs;
    }
  }

  const sortedPigs = sortPigs();

  return (
    <div className="App">
      <Nav />
      <div id="sortBar">
        <Filter
          filterState={filterState}
          filterHandler={() => setFilterState(!filterState)}
        />
        <Sort
          sortState={sortState}
          sortHandler={(e) => setSortState(e.target.value)}
        />
      </div>
      <TileList piggies={sortedPigs} />
    </div>
  );
}

export default App;
