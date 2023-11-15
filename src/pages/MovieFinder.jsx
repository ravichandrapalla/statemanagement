import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "../global.css";
import { FaSearch } from "react-icons/fa";
import { searchMovie } from "../services/api";
import MovieBox from "../components/MovieBox";

const MovieFinder = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [totalMovies, setTotalMovies] = useState(0);
  const inputRef = useRef();
  useEffect(() => {
    if (searchTitle) {
      searchMovie(searchTitle).then((resp) => {
        if (resp && resp.data && resp.data.Response === "True") {
          setMovies(resp.data.Search);
          setTotalMovies(Number(resp.data.totalResults));
        }
      });
    }
  }, [searchTitle]);
  // useEffect(() => {
  //   console.log("movies ", movies, "total ", totalMovies);
  // }, [movies]);

  return (
    <div className="outer-container">
      <div className="header">
        <div className="input-container">
          <input
            type="text"
            id="search-input"
            placeholder="Search for a Movie"
            ref={inputRef}
          ></input>
          <button
            className="search-btn"
            onClick={(e) => setSearchTitle(inputRef.current.value)}
          >
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="body">
        {movies.map((movie) => (
          <MovieBox data={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieFinder;
