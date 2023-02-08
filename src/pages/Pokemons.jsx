import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Pokemon from "./Pokemon";

const Pokemons = () => {
  return (
    <>
      <Header />
      <main>
        <Pokemon />
      </main>
      <Footer />
    </>
  );
};

export default Pokemons;
