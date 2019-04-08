import React, {useContext} from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';
import FaveContext from './FaveContext';


const FilmRow = ({film, isFave}) => {
  const favesFromContext = useContext(FaveContext);

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

      <Fave isFave={isFave} onToggle={() => favesFromContext.toggleFave(film)} />
    </article>
  );
};

export default FilmRow;