import React from 'react';
import FilmRow from './FilmRow';

const FilmListing = ({films}) => {

  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      {films.map((film) => (
        React.createElement('div', {key: film.id}, <FilmRow film={film} />)
        ))
      };
    </div>
  )
};

export default FilmListing;