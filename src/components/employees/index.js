import React from "react";
import "./style.css";

const employees = (props) => {
  return (
    <tbody>
      <tr>
        <td className="align-middle">
          <img 
          alt={props.name} 
          src={props.image} 
          className="responsiveImg" 
          />
        </td>
        <td className="align-middle">{props.name}</td>
        <td className="align-middle">{props.title}</td>
        <td className="align-middle">{props.website}</td>
        <td className="align-middle">{props.country}</td>
        <td className="align-middle">
          <a href={`mailto: ${props.email}`} target="__blank">{props.email}</a>
        </td>
      </tr>
    </tbody>
  );
};

export default employees;