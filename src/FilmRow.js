import React from 'react';
import FilmPoster from './FilmPoster';

const FilmRow = ({film}) => {

  // const filmYear = (film) => film.release_date.split('-')[0];

  const filmYear = (film) => {
    let d = new Date(film.release_date)
    return d.getFullYear();
  }

  return (
    <div className="film-row">
      <FilmPoster film={film} />
      <div className="film-summary">
        <h1>{film.title}</h1>
        <p>{filmYear(film)}</p>
      </div>

    </div>
  )
};

export default FilmRow;