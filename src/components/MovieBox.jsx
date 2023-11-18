import React from "react";
import "../global.css";
const MovieBox = (props) => {
  // console.log("props are", props);
  const { Poster, Title } = props.data;
  return (
    <div className="moviecard">
      <img src={Poster} width="100" alt="movie poster" />
      <span className="movie-title">{Title}</span>
    </div>
  );
};

export default MovieBox;
