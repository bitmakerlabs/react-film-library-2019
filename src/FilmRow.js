import React from 'react';

const FilmRow = ({film}) => {
  return (
    <article className="film-row">
      <img src={`https://image.tmdb.org/t/p/w780/${film.poster_path}`} alt={film.title} />
      <div className="film-summary">
        <h1>{film.title}</h1>
        <p>{new Date(film.release_date).getFullYear()}</p>
      </div>
    </article>
  );
};

export default FilmRow;