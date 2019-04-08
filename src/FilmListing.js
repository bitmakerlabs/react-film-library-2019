import React from 'react';
import FilmRow from './FilmRow';

const FilmListing = ({films}) => {
  const filmRows = films.map((film) => {
    return (
      <FilmRow film={film} key={film.id} />
    );
  });

  return (
    <section className="film-list">
      <h1 className="section-title">FILMS</h1>

      <nav className="film-list-filters">
        <button className="film-list-filter">
          ALL
          <span className="section-count">{films.length}</span>
        </button>
        <button className="film-list-filter">
          FAVES
          <span className="section-count">{0}</span>
        </button>
      </nav>

      {filmRows}
    </section>
  );
};

export default FilmListing;