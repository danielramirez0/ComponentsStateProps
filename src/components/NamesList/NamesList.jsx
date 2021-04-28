import React from "react";
import "./NamesList.css";

const NamesList = (props) => {
  let list = props.names;
  return (
    <ul>
      {list.map((item) => (
        <li key={list.indexOf(item)}>{item}</li>
      ))}
    </ul>
  );
};

export default NamesList;
