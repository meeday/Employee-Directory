import React from "react";
import "./style.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>
          Click the 'Name' column to sort in ascending or descending order.
          Filter your search by name by using the search bar.
        </p>
      </div>
    );
  }
}

export default Header;
