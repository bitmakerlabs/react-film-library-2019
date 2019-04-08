import React from 'react';
import TMDB from './TMDB';
import FilmListing from './FilmListing';

const App = () => {
  const {films} = TMDB;

  return (
    <main className="film-library">
      <FilmListing films={films} />

      <section className="film-details">
        <h2 className="section-title">DETAILS</h2>
      </section>
    </main>
  );
}

export default App;
