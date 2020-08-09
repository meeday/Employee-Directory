// React and styling imported 
import React from "react";
import "./style.css";
//  class that returns the html of the header shown when the page renders
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>
          Click the 'Name' column to sort in ascending or descending order.
          Filter your search by name, title or country by using the search bar.
        </p>
      </div>
    );
  }
}

export default Header;
// Header class exported