import React, { useState } from "react";
import TMDB from "./TMDB";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";

const App = () => {
  const myFilms = TMDB.films;
  const [films, setFilms] = useState(myFilms);

  return (
    <main className="film-library">
      <div className="film-library">
        <FilmListing films={films} />
        <FilmDetails films={films} />
      </div>
    </main>
  );
};

export default App;

