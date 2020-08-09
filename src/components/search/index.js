import React from "react";
import "./style.css";


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