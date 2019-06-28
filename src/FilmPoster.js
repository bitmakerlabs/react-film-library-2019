import React from "react";

const FilmPoster = ({ title, poster_path }) => {
  return (
    <div>
      <figure className="film-poster">
        <img
          src={`https://image.tmdb.org/t/p/w780/${poster_path}`}
          alt= {title}
        />
      </figure>
    </div>
  );
};

export default FilmPoster;


