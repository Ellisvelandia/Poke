import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Pokemons } from "./pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pokemons />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
