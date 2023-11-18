import React, { useEffect, useState } from "react";
import "../global.css";
import { ImMenu } from "react-icons/im";
import { searchMovie } from "../services/api";
import MovieBox from "../components/MovieBox";
import SearchBar from "../components/SearchBar";
import NavLinks from "../components/NavLinks";
import Loading from "../components/Loading";

const MovieFinder = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [totalMovies, setTotalMovies] = useState(0);
  const [error, setError] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const [navList, setNavList] = useState([
    "link-1",
    "link-2",
    "link-3",
    "link-3",
  ]);

  useEffect(() => {
    if (searchTitle) {
      searchMovie(searchTitle)
        .then((resp) => {
          console.log(resp);
          if (resp && resp.data && resp.data.Response === "True") {
            setError("");
            setIsLoading(false);
            setMovies(resp.data.Search);
            setTotalMovies(Number(resp.data.totalResults));
          } else if (resp && resp.data && resp.data.Response === "False") {
            setError(resp.data.Error);
            setIsLoading(false);
            setMovies([]);
            setTotalMovies(0);
            console.log("in else", resp.data.Error);
          }
        })
        .catch((err) => console.log(err));
    }
    console.log("search title", searchTitle);
  }, [searchTitle]);
  // useEffect(() => {
  //   console.log("movies ", movies, "total ", totalMovies);
  // }, [movies]);
  const handleMenuClick = () => {
    // const navLinks = document.querySelector(".navLinks");
    // // navLinks.classList.toggle("hidden");
    // navLinks.style.height = navLinks.style.width === "0px" ? "100%" : "0px";
    // // navLinks.style.visibility
    // console.log(navLinks.style);
    const navLinks = document.querySelector(".navLinks");
    navLinks.classList.toggle("visible");
  };
  const handleSearch = (searchText) => {
    if (searchText) {
      setSearchTitle(searchText);
      setIsLoading(true);
    }
  };

  return (
    <>
      <header>
        <SearchBar setSearchTitle={(text) => handleSearch(text)} />
        <ImMenu color="green" size={30} id="menu" onClick={handleMenuClick} />
        <NavLinks list={navList} />
      </header>
      {isloading ? (
        <main className="loading">
          <Loading />
        </main>
      ) : (
        <>
          <div className="total-tag">
            {totalMovies ? (
              <span className="results-success-text">{`Found ${totalMovies} Results for \"${searchTitle}\"`}</span>
            ) : (
              searchTitle && (
                <span className="results-failure-text">{`No Movies Found with \"${searchTitle}\" Title`}</span>
              )
            )}
          </div>
          <main className="main">
            <div className="trail">
              {movies.map((movie) => (
                <MovieBox data={movie} />
              ))}
            </div>
          </main>
        </>
      )}
      <footer>
        <span>&copy; 2023 Movie Finder. All rights reserved.</span>
      </footer>
    </>
  );
};

export default MovieFinder;

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
