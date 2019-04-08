import React from 'react';
import FilmRow from './FilmRow';

const FilmListing = ({films}) => {
  const filmRows = films.map((film) => {
    return (
      <FilmRow film={film} />
    );
  });

  return (
    <section className="film-list">
      <h1 className="section-title">FILMS</h1>
      {filmRows}
    </section>
  );
};

export default FilmListing;