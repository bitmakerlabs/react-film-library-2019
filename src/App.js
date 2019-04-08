import React from 'react';
import TMDB from './TMDB';

const App = () => {
  const {films} = TMDB;

  return (
    <main className="film-library">
      <section className="film-list">
        <h1 className="section-title">FILMS</h1>
        <h1>{films[0].title}</h1>
      </section>

      <section className="film-details">
        <h2 className="section-title">DETAILS</h2>
      </section>
    </main>
  );
}

export default App;
