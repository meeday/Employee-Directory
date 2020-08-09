//  react and styling imported
import React from "react";
import "./style.css";

// search function passes the handleInputChange mthod as a prop and sets it to the onChange attribute of the form input
const search = ({ handleInputChange }) => {
  return (
    <div className="searchBar">
      <form className="form-inline">
        <input
        className="form-control"
        type="search"
        placeholder="Filter Employee"
        onChange={e => handleInputChange(e)}
        />
      </form>
    </div>
  );
};

export default search;
// dearch component exported
