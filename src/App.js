import React from "react";
import Wrapper from "./components/Wrapper/index";
import Header from "./components/header/index";
import EmployeeData from "./components/EmployeeData/index";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <EmployeeData />
    </Wrapper>
  );
};

export default App;
