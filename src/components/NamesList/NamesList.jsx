import React from "react";
import "./NamesList.css";

const NamesList = (props) => {
  let list = props.names;
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default NamesList;
