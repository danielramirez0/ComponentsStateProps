import React from "react";
import "./SuperHeroesTable.css";

const SuperHeroesTable = (props) => {
  let superHeroes = props.superHeroes;
  return (
    <table>
      <thead>
        <th>ID</th>
        <th>NAME</th>
        <th>PRIMARY ABILITY</th>
        <th>SECONDARY ABILITY</th>
      </thead>
      {superHeroes.map((hero) => (
        <tr>
          <td>{hero.id}</td>
          <td>{hero.name}</td>
          <td>{hero.primaryAbility}</td>
          <td>{hero.secondaryAbility}</td>
          {/* <td><button onClick={props.deleteItem(hero.id)}>Delete</button></td> */}
        </tr>
      ))}
    </table>
  );
};

export default SuperHeroesTable;
