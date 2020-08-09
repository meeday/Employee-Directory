// React search component and styling imported
import React from "react";
import Search from "../search/index";
import "./style.css";
// nav function passes through the destructured handleinputChange to set the handleInputChange prop. returns a nav bar with the search bar
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
