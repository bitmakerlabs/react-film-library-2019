import React, { useState } from "react";
import FilmRow from "./FilmRow";

const FilmListing = ({ films }) => {
//   const [f, setF] = useState(TMDB.films)

  const filmsCollection = films.map((film, i) => 
    <FilmRow key={i} {...film} />
  );

  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      {filmsCollection}
    </div>
  );
};

export default FilmListing;

// const listingElements = listings.map( (listing, i) =>
// <Listing key={i} {...listing} />
// )

// const Listing = ({title, description, views}) => {

//     const [v, setV] = useState(views)
//     const [faves, setFaves] = useState(10)

//     const incrementFaves = () => {
//         setFaves(faves + 1);
//     }

//     useEffect( () => {
//         setV(views)
//     })

//     return (
//         <div>
//             <h1>{title}</h1>
//             <h2>Views: {v}</h2>
//             <h2>Faves: {faves}</h2>
//             <p>{description}</p>
//             <button onClick={ incrementFaves }>Favourite!</button>
//         </div>
//     )
