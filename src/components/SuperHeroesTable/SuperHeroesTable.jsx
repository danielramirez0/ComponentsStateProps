import React from "react";
import "./SuperHeroesTable.css";

const SuperHeroesTable = (props) => {
  let superHeroes = props.superHeroes;
  return (
    <table>
      <tbody>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>PRIMARY ABILITY</th>
          <th>SECONDARY ABILITY</th>
        </tr>
        {superHeroes.map((hero) => (
          <tr key={hero.id}>
            <td>{hero.id}</td>
            <td>{hero.name}</td>
            <td>{hero.primaryAbility}</td>
            <td>{hero.secondaryAbility}</td>
            <td>
              <button onClick={() => props.deleteHero(hero)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SuperHeroesTable;
