import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Keyboard,
} from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/keyboard";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const res = await axios.get(
        "https://unpkg.com/pokemons@1.1.0/pokemons.json"
      );
      setPokemons(res.data.results.slice(0, 184));
    };

    getPokemons();
  }, []);
  const names = {};

  return (
    <div className="h-full w-auto px-1 -z-10">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Keyboard]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        keyboard={{ enabled: true }}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <>
          {pokemons.map((pokemon) => {
            if (!names[pokemon.name]) {
              names[pokemon.name] = true;
              return (
                <SwiperSlide key={pokemon.id}>
                  <div className="w-[calc(100%+2.5rem)] object-cover mr-6 mt-10 justify-center flex flex-col mx-8 mb-40 border border-l-zinc-400 shadow-slate-800 shadow-md">
                    <h2 className="text-center text-2xl my-4">{pokemon.name}</h2>
                    <img
                      src={pokemon.sprites.large}
                      alt={pokemon.id}
                      className="object-fill -z-10 sm:h-96 h-80 sm:mb-0 mb-10 sm:p-8 p-2"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              );
            }
          })}
        </>
      </Swiper>
    </div>
  );
};

export default Pokemon;
