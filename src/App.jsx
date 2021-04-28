import React, { Component } from "react";
import "./App.css";
import NamesList from "./components/NamesList/NamesList";

class App extends Component {
  state = {
    names: ["Peter", "Bruce", "Clark", "Mark"],
  };
  render() {
    return (
      <div className="App">
        <NamesList names={this.state.names} />
      </div>
    );
  }
}

export default App;
