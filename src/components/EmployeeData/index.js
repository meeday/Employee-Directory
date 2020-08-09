import React, { Component } from "react";
import Nav from "../nav/index";
import Employees from "../employees/index";
import directory from "../../directory.json";
import "./style.css";

class EmployeeData extends Component {
  state = {
    result: [{}],
    sort: "descend",
    original: [{}],
  };

  headings = [
    { name: "Image", width: "10%" },
    { name: "Name", width: "10%" },
    { name: "Website", width: "20%" },
    { name: "Title", width: "20%" },
    { name: "Country", width: "20%" },
    { name: "Email", width: "20%" },
  ];

  onToggleClick = () => {
    if (this.state.sort === "descend") {
      let ascending = this.state.result.sort((a, b) =>
        a.name > b.name ? 1 : -1
      );
      this.setState({ result: ascending, sort: "ascend" });
    } else {
      let descending = this.state.result.sort((a, b) =>
        a.name < b.name ? 1 : -1
      );
      this.setState({ result: descending, sort: "descend" });
    }
  };

  handleInputChange = (e) => {
    const filter = e.target.value;
    const filteredList = this.state.original.filter((item) => {
      let values = Object.values(item).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });

    this.setState({ result: filteredList });
  };

  componentDidMount() {
    this.setState({ result: directory, original: directory });
  }

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
                  Name<span className="dropdown-toggle"></span>
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
