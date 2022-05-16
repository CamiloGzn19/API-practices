import React, { useEffect, useState } from "react";
import axios from "axios";
import RickAndMorty from "./Components/Rick and Morty/RickAndMorty";
import Movies from "./Components/Movies/Movies";

function App() {
  return (
    <div className="App">
      <RickAndMorty />
      <Movies />
    </div>
  );
}

export default App;
