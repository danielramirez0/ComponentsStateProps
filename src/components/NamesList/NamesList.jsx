import React from "react";
import "./NamesList.css";

const NamesList = (props) => {
  let list = props.names;
  console.log(list);
  return (
    <ul>
      {list.map((item) => (
        <li key={list.indexOf(item)}>{item}</li>
      ))}
    </ul>
  );
};

export default NamesList;
