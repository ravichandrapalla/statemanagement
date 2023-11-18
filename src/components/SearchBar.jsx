import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setSearchTitle }) => {
  const inputRef = useRef();
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setSearchTitle(inputRef.current.value);
    }
  };
  return (
    <div className="input-container">
      <input
        type="text"
        id="search-input"
        placeholder="Search for a Movie"
        ref={inputRef}
        onKeyDown={handleEnter}
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
