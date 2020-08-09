import React from "react";
import Search from "../search/index";
import "./style.css";

const Nav = ({ handleInputChange }) => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="navbar-collapse row" id="navBar">
        <Search handleInputChange={handleInputChange} />
      </div>
    </nav>
  );
};
export default Nav;
