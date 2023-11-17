import React from "react";
import "../global.css";

const NavLinks = ({ list }) => {
  return (
    <div id="navLinks">
      <ul className="nav-list">
        {list?.map((item) => {
          return <li className="nav-links">{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default NavLinks;
