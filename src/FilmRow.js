import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

const FilmRow = ({film}) => {
  return (
    <article className="film-row">
      <FilmPoster film={film} />
      <div className="film-summary">
        <h1>{film.title}</h1>
        <p>{new Date(film.release_date).getFullYear()}</p>
      </div>

      <Fave />
    </article>
  );
};

export default FilmRow;