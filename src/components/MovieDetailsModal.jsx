import React from "react";

const MovieDetailsModal = (props) => {
  const {
    Title,
    Year,
    Released,
    Runtime,
    Genre,
    Director,
    Actors,
    Plot,
    Language,
    Poster,
    imdbRating,
    Type,
  } = props.details;
  return (
    <div className="movie-details-modal">
      <section className="poster">
        <img src={Poster} alt="movie detailed" />
      </section>
      <section className="details">
        <article>
          <h2>{`Title : ${Title}`}</h2>
          <h5 className="year">{`Year of Release : ${Year}`}</h5>
          <span className="movie-details-text">{`Runtime : ${Runtime}`}</span>
          <span className="movie-details-text">{`Genre : ${Genre}`}</span>
          <span className="movie-details-text">{`Director : ${Director}`}</span>
          <span className="movie-details-text">{`Actors : ${Actors}`}</span>
          <span className="movie-details-text"></span>
        </article>
      </section>
    </div>
  );
};

export default MovieDetailsModal;
