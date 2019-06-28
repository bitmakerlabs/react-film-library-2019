import React from "react";
import FilmPoster from "./FilmPoster"

const FilmRow = ({ title, poster_path, release_date }) => {
  return (
    <div className="film-row">
        <FilmPoster poster_path={poster_path} title={title}/>

      <div className="film-summary">
        <h1>{title}</h1>
        <p>{new Date (release_date).getFullYear()}</p>
      </div>
    </div>
  );
};

export default FilmRow;
