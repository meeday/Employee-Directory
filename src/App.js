// import react and the wrapper, header, and employeeData components
import React from "react";
import Wrapper from "./components/Wrapper/index";
import Header from "./components/header/index";
import EmployeeData from "./components/EmployeeData/index";
// app returns the layout of the page using the components 
const App = () => {
  return (
    <Wrapper>
      <Header />
      <EmployeeData />
    </Wrapper>
  );
};

export default App;
// app exported