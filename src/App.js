import React, {useState} from 'react';
import FilmListing from './FilmListing';
import FavesContext from './FavesContext';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';
import axios from 'axios'


const App = () => {
  const {films} = TMDB;
  const [faves, setFaves] = useState([]);
  const [currentFilm, setCurrentFilm] = useState({});

  const onFaveToggle = (film) => {
    const favesCopy = faves.slice();
    const filmIndex = faves.indexOf(film);

    if (faves.includes(film)) {
      // remove it from faves
      console.log(`Removing ${film.title} from faves`);
      favesCopy.splice(filmIndex, 1);
      setFaves(favesCopy);
    } else {
      // add it to faves
      console.log(`Adding ${film.title} to faves`);
      setFaves([...favesCopy, film]);
    }
  };

  const handleFilmDetails = (film ) => {
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos,images&language=en`;
    axios.get(url).then(resp => {
      console.log('data', resp.data)
      setCurrentFilm(resp.data)
    });
}

  return (
    <main className="film-library">
      <FavesContext.Provider value={{faves, toggleFave: onFaveToggle, toggleCurrentFilm: handleFilmDetails, currentFilm: currentFilm}}>
        <FilmListing films={films} />
        <FilmDetails />
        <section className="film-details">
          <h1 className="section-title">DETAILS</h1>
        </section>
      </FavesContext.Provider>
    </main>
  );
}

export default App;
