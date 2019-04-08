import React from 'react';
import TMDB from './TMDB';

const App = () => {
  const {films} = TMDB;

  return (
    <main className="film-library">
      <section className="film-list">
        <h1 className="section-title">FILMS</h1>
        <article className="film-row">
          <img src={`https://image.tmdb.org/t/p/w780/${films[0].poster_path}`} alt={films[0].title} />
          <div className="film-summary">
            <h1>{films[0].title}</h1>
            <p>{new Date(films[0].release_date).getFullYear()}</p>
          </div>
        </article>
      </section>

      <section className="film-details">
        <h2 className="section-title">DETAILS</h2>
      </section>
    </main>
  );
}

export default App;
