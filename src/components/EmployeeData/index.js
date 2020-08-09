// importing react, components
import React, { Component } from "react";
import Nav from "../nav/index";
import Employees from "../employees/index";
import directory from "../../directory.json";
import "./style.css";

// 'EmployeeData' class created. state is set with three properties: results array of objects which will hold the updated directory, a sort parameter set to descend to handle onToggleClick and the orginal array objects to hold the original directory coming from the json file. 
class EmployeeData extends Component {
  state = {
    result: [{}],
    sort: "descend",
    original: [{}],
  };
// a heading array to hold the name of each column on the table for sorting and width to use in styling
  headings = [
    { name: "Image", width: "10%" },
    { name: "Name", width: "10%" },
    { name: "Website", width: "20%" },
    { name: "Title", width: "20%" },
    { name: "Country", width: "20%" },
    { name: "Email", width: "20%" },
  ];
// onToggileClick functions arranges the employee's in descending or ascending order using the sort method and the state.sort 
  onToggleClick = () => {
    // if function checks if state.sort is equal to descend where if the name of param a is greater than that of b then it is put on top. uses ternary operator
    if (this.state.sort === "descend") {
      let ascending = this.state.result.sort((a, b) =>
        a.name > b.name ? 1 : -1
      );
      // the result is put into the ascending const and it is also set to the state.results at the same time state.sort is changed to ascend(the opposite of its default). This is how the app knows when to sort in ascending or descending order.
      this.setState({ result: ascending, sort: "ascend" });
    } else {
      let descending = this.state.result.sort((a, b) =>
        a.name < b.name ? 1 : -1
      );
      // does the same as above but handles the ascending sort
      this.setState({ result: descending, sort: "descend" });
    }
  };
// handle input change function to update the table as the user types in the search bar
  handleInputChange = (e) => {
    const filter = e.target.value;
    const filteredList = this.state.original.filter((item) => {
      let values = Object.values(item).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
// sets the filtered list to the results state
    this.setState({ result: filteredList });
  };
//componentDidMount to set the states when component is mounted
  componentDidMount() {
    // directory refers to the json file that holds the employee data
    this.setState({ result: directory, original: directory });
  }
// render method returns the html table calling the methods above
  render() {
    return (
      <>
        <Nav handleInputChange={this.handleInputChange} />

        <div className="dataTable mt-5">
          <table
            id="table"
            className="table tavle-striped table-hover table-condensed"
          >
            <thead>
              <tr>
                <th>Picture</th>
                <th
                  onClick={() => {
                    this.onToggleClick();
                  }}
                >
                  Name<span className="dropdown-toggle pointer"></span>
                </th>
                <th>Title</th>
                <th>Website</th>
                <th>Country</th>
                <th>Email</th>
              </tr>
            </thead>
            {this.state.result.map((employee) => (
              <Employees
              image={employee.image}
                name={employee.name}
                title={employee.title}
                website={employee.website}
                country={employee.country}
                email={employee.email}
              />
            ))}
          </table>
        </div>
      </>
    );
  }
}
export default EmployeeData;
// class exported