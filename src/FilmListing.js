import React from 'react';
import FilmRow from './FilmRow';

const FilmListing = ({films}) => {
  const filmRows = films.map((film) => {
    return (
      <FilmRow film={film} key={film.id} />
    );
  });

  const handleFilterToggle = (filter) => {
    console.log(`Setting filter to ${filter}`);
  }

  return (
    <section className="film-list">
      <h1 className="section-title">FILMS</h1>

      <nav className="film-list-filters">
        <button className="film-list-filter" onClick={() => handleFilterToggle('all')}>
          ALL
          <span className="section-count">{films.length}</span>
        </button>
        <button className="film-list-filter" onClick={() => handleFilterToggle('faves')}>
          FAVES
          <span className="section-count">{0}</span>
        </button>
      </nav>

      {filmRows}
    </section>
  );
};

export default FilmListing;