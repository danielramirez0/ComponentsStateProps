import React, { Component } from "react";
import "./App.css";
import NamesList from "./components/NamesList/NamesList";
import SuperHeroesTable from "./components/SuperHeroesTable/SuperHeroesTable";
import IceCreamList from "./components/IceCreamList/IceCreamList";
import SuperHeroCreateForm from "./components/SuperHeroCreateForm/SuperHeroCreateForm";

class App extends Component {
  state = {
    names: ["Peter", "Bruce", "Clark", "Mark"],
    superHeroes: [
      { id: 1, name: "Spider Man", primaryAbility: "Spider Sense", secondaryAbility: "Web Shooters" },
      { id: 2, name: "Batman", primaryAbility: "Intelligence", secondaryAbility: "Billionare" },
      { id: 3, name: "Super Man", primaryAbility: "Super Speed", secondaryAbility: "Super Strength" },
      { id: 4, name: "Invincible", primaryAbility: "Flight", secondaryAbility: "Invulnerability" },
    ],
    iceCreamFlavors: [],
  };

  addNewFlavor(flavor) {
    this.setState({
      iceCreamFlavors: [...this.state.iceCreamFlavors, flavor],
    });
  }

  addHero(hero) {
    this.setState({
      superHeroes: [...this.state.superHeroes, hero],
    });
  }

  deleteHero(hero) {
    let newHeroes = this.state.superHeroes.filter(function (obj) {
      return obj.id !== hero.id;
    });
    this.setState({
      superHeroes: newHeroes,
    });
  }

  render() {
    return (
      <div className="App">
        <NamesList names={this.state.names} />
        <SuperHeroesTable superHeroes={this.state.superHeroes} deleteHero={(hero) => this.deleteHero(hero)} />
        <IceCreamList iceCreamFlavors={this.state.iceCreamFlavors} addNewFlavor={(flavor) => this.addNewFlavor(flavor)} />
        <SuperHeroCreateForm addHero={(hero) => this.addHero(hero)} />
      </div>
    );
  }
}

export default App;
