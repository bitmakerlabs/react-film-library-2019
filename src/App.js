import React, {useState} from 'react';
import TMDB from './TMDB';
import FilmListing from './FilmListing';

const App = () => {
  const {films} = TMDB;

  const [faves, setFaves] = useState([]);

  const handleFaveToggle = (film) => {
    const favesCopy = faves.slice();
    const filmIndex = faves.indexOf(film);

    if (filmIndex > -1) {
      console.log(`Removing ${film.title} from faves`);
      favesCopy.splice(filmIndex, 1);
      setFaves(favesCopy);
    } else {
      console.log(`Adding ${film.title} to faves`);
      setFaves([...favesCopy, film]);
    }
  }

  return (
    <main className="film-library">
      <FilmListing films={films} faves={faves} onFaveToggle={handleFaveToggle} />

      <section className="film-details">
        <h2 className="section-title">DETAILS</h2>
      </section>
    </main>
  );
}

export default App;
