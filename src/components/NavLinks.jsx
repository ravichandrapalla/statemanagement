import React from "react";
import "../global.css";

const NavLinks = ({ list }) => {
  return (
    <div id="navLinks">
      <ul>
        {list?.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default NavLinks;
