import React from 'react';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import TMDB from './TMDB.js';

const App = () => {
  return (
    <main className="film-library">
      <div className="film-library">
        <FilmListing films={TMDB.films} />
        <FilmDetails film={null} />
      </div>
    </main>
  );
}

export default App;
