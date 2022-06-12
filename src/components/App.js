import React from "react";
import Nav from "./Nav";
import TileList from './TileList';

import hogs from "../porkers_data";
console.log(hogs);

function App() {
	return (
		<div className="App">
			<Nav />
			<TileList piggies={hogs} />
		</div>
	);
}

export default App;
