// react imported
import React from "react";
// wrapper function returns a div wrapper that holds props.children
const wrapper = (props) => <div className="wrapper">{props.children}</div>;

export default wrapper;
// wrapper exported