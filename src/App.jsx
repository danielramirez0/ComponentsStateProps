import React, { Component } from "react";
import "./App.css";
import NamesList from "./components/NamesList/NamesList";
import SuperHeroesTable from "./components/SuperHeroesTable/SuperHeroesTable";

class App extends Component {
  state = {
    names: ["Peter", "Bruce", "Clark", "Mark"],
    superHeroes: [
      { id: 1, name: "Spider Man", primaryAbility: "Spider Sense", secondaryAbility: "Web Shooters" },
      { id: 2, name: "Batman", primaryAbility: "Intelligence", secondaryAbility: "Billionare" },
      { id: 3, name: "Super Man", primaryAbility: "Super Speed", secondaryAbility: "Super Strength" },
      { id: 4, name: "Invincible", primaryAbility: "Flight", secondaryAbility: "Invulnerability" },
    ],
  };
  render() {
    return (
      <div className="App">
        <NamesList names={this.state.names} />
        <SuperHeroesTable superHeroes={this.state.superHeroes} />
      </div>
    );
  }
}

export default App;
