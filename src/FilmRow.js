import React from 'react';
import FilmPoster from './FilmPoster';
import Faves from './Faves';

const FilmRow = ({film}) => {

  const handleDetailsClick = () => {
    console.log(`Fetching details for ${film.title}!`)
  };
  
  return (
    <div className="film-row" onClick={handleDetailsClick}>
      <FilmPoster film={film} />
      <div className="film-summary">
        <h1>{film.title}</h1>
        <p>{new Date(film.release_date).getFullYear()}</p>
      </div>
      <Faves />
    </div>
  )
};

export default FilmRow;