import React, {useState} from 'react';
import FilmRow from './FilmRow';

const FilmListing = ({films}) => {

  const [filter, setFilter] = useState('all');

  const handleFilterClick = (newFilter) => {
    console.log(`Setting filter to ${newFilter}`);
    setFilter(newFilter);
  };

  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>

      <div className="film-list-filters">
      <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} onClick={() => handleFilterClick('all')}>
        ALL
        <span className="section-count">{films.length}</span>
      </div>
      <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} onClick={() => handleFilterClick('faves')}>
        FAVES
        <span className="section-count">0</span>
      </div>
    </div>

      {films.map((film) => (
        React.createElement('div', {key: film.id}, <FilmRow film={film} />)
        ))
      };
    </div>
  )
};

export default FilmListing;