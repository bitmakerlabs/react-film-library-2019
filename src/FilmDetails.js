import React, {useContext} from 'react';

import FavesContext from './FavesContext';

const FilmDetails = () => {
  const favesFromContext = useContext(FavesContext);
  let details;

  if(favesFromContext.currentFilm) {
    const film = favesFromContext.currentFilm;
    const backdropUrl = `https://image.tmdb.org/t/p/w1280/${film.backdrop_path}`;
    const posterUrl = `https://image.tmdb.org/t/p/w780/${film.poster_path}`;

    details = (
       <div className="film-detail is-hydrated">
        <figure className="film-backdrop">
          <img src={backdropUrl} alt="" />
          <h1 className="film-title">{film.title}</h1>
        </figure>

        <div className="film-meta">
          <h2 className="film-tagline">{film.tagline}</h2>
          <p className="film-detail-overview">
            <img src={posterUrl} className="film-detail-poster" alt={film.title} />
            {film.overview}
          </p>
        </div>
      </div>
      )
  } else {
    details = (
      <div className="film-detail">
        <p>
          <i className="material-icons">subscriptions</i>
          <span>No film selected</span>
        </p>
      </div>
    )
  }


  return (
    <React.Fragment>
      {details}
    </React.Fragment>
  );
}

export default FilmDetails;
