import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "../global.css";
import { ImMenu } from "react-icons/im";
import { searchMovie } from "../services/api";
import MovieBox from "../components/MovieBox";
import SearchBar from "../components/SearchBar";
import NavLinks from "../components/NavLinks";

const MovieFinder = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [totalMovies, setTotalMovies] = useState(0);
  const [navList, setNavList] = useState([
    "link-1",
    "link-2",
    "link-3",
    "link-3",
  ]);

  useEffect(() => {
    if (searchTitle) {
      searchMovie(searchTitle).then((resp) => {
        if (resp && resp.data && resp.data.Response === "True") {
          setMovies(resp.data.Search);
          setTotalMovies(Number(resp.data.totalResults));
        }
      });
    }
    console.log("search title", searchTitle);
  }, [searchTitle]);
  // useEffect(() => {
  //   console.log("movies ", movies, "total ", totalMovies);
  // }, [movies]);
  const handleMenuClick = () => {
    const navLinks = document.getElementById("navLinks");

    navLinks.style.visibility =
      navLinks.style.visibility === "visible" ? "" : "visible";
  };

  return (
    // <div className="outer-container">
    //   <div className="header">
    //     <div className="input-container">
    //       <input
    //         type="text"
    //         id="search-input"
    //         placeholder="Search for a Movie"
    //         ref={inputRef}
    //       ></input>
    //       <button
    //         className="search-btn"
    //         onClick={(e) => setSearchTitle(inputRef.current.value)}
    //       >
    //         <FaSearch />
    //       </button>
    //     </div>
    //   </div>
    //   <div className="body">
    //     {movies.map((movie) => (
    //       <MovieBox data={movie} />
    //     ))}
    //   </div>
    // </div>
    <>
      <header>
        <SearchBar setSearchTitle={setSearchTitle} />
        <ImMenu
          color="green"
          size={30}
          id="menu-icon"
          onClick={handleMenuClick}
        />
        <NavLinks list={navList} />
      </header>
      <main>
        {movies.map((movie) => (
          <MovieBox data={movie} />
        ))}
      </main>
      <footer></footer>
    </>
  );
};

export default MovieFinder;
