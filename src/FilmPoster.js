import React from 'react';

const FilmPoster = ({film}) => {

  return (
    <figure className="film-poster">
      <img src={`https://image.tmdb.org/t/p/w780/${film.poster_path}`}  alt={film.title} />
    </figure>
  )
};

export default FilmPoster;