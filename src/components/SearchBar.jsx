import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setSearchTitle }) => {
  const inputRef = useRef();
  return (
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
        <FaSearch id="search-icon" size={10} />
      </button>
    </div>
  );
};

export default SearchBar;
