import React from "react";
import RickAndMorty from "./Components/Rick and Morty/RickAndMorty";
import Movies from "./Components/Movies/Movies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Default from "./Components/Default";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Default />} />
          <Route path="/rick" element={<RickAndMorty />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
