import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

const FilmRow = ({film}) => {
  const handleDetailsClick = (event) => {
    console.log(`Fetching details for ${film.title}`);
  }

  return (
    <article className="film-row" onClick={handleDetailsClick}>
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