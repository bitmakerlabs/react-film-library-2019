import React from 'react';
import FilmRow from './FilmRow';

const FilmListing = ({films}) => {
  console.log(films);

  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      {films.map((film) => (
        <div key={film.id}>
          <FilmRow film={film} />
          
        </div>
        ))
      };
    </div>
  )
};

export default FilmListing;