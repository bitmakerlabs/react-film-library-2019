import React from 'react';

const FilmPoster = ({film}) => {
  const posterUrl = `https://image.tmdb.org/t/p/w780/${film.poster_path}`;

  return (
    <img src={`${posterUrl}`} alt={film.title} />
  );
};

export default FilmPoster;