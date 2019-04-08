import React from 'react';
import TMDB from './TMDB';
import FilmRow from './FilmRow';

const App = () => {
  const {films} = TMDB;

  const filmRows = films.map((film) => {
    return (
      <FilmRow film={film} />
    );
  });

  return (
    <main className="film-library">
      <section className="film-list">
        <h1 className="section-title">FILMS</h1>
        {filmRows}
      </section>

      <section className="film-details">
        <h2 className="section-title">DETAILS</h2>
      </section>
    </main>
  );
}

export default App;
